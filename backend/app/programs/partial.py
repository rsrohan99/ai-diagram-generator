from typing import Optional, Dict, Any

from llama_index.program.openai import OpenAIPydanticProgram
from llama_index.llms.openai.utils import to_openai_tool

from app.utils import parse_partial_json

class PartialPypanticProgram(OpenAIPydanticProgram):
  def stream_partial_object(
    self,
    llm_kwargs: Optional[Dict[str, Any]] = None,
    **kwargs: Any,
  ):
    llm_kwargs = llm_kwargs or {}
    messages = self._prompt.format_messages(llm=self._llm, **kwargs)

    description = self._description_eval(**kwargs)
    openai_fn_spec = to_openai_tool(self._output_cls, description=description)
    chat_response_gen = self._llm.stream_chat(
        messages=messages,
        tools=[openai_fn_spec],
        tool_choice=self._tool_choice,
        **llm_kwargs,
    )
    for partial_resp in chat_response_gen:
      kwargs = partial_resp.message.additional_kwargs
      tool_calls = kwargs["tool_calls"]
      if len(tool_calls) == 0:
          continue
      fn_args = kwargs["tool_calls"][0].function.arguments
      # print(f"args: {fn_args}")
      partial_json = parse_partial_json(fn_args)
      try:
        yield self._output_cls.parse_obj(partial_json)
        # print(f"partial: {self._output_cls.parse_obj(partial_json)}")
      except:
        continue