import json
from pydantic import BaseModel 
from fastapi.responses import StreamingResponse
from fastapi import APIRouter, Request
from llama_index.program.openai import OpenAIPydanticProgram

from app.scheme.diagram import Diagram

chat_router = r = APIRouter()

class RequestData(BaseModel):
    prompt: str

prompt_template_str = """
Explain the given topic using a very detailed and comprehensive tree-like diagram. You must use loads of nodes spanning multiple levels to properly explain the topic in details. Make the tree very deep in hierarchy with as much details as possible. Use proper labels for the nodes and edges. Use the most appropriate shape for the nodes to make the diagram as visually appealing as possible.
topic: {topic}
"""

@r.post("")
async def chat(
    request: Request,
    data: RequestData
):
    topic = data.prompt
    diagram_program = OpenAIPydanticProgram.from_defaults(
        output_cls=Diagram,
        prompt_template_str=prompt_template_str,
        verbose=True
    )

    # stream response
    async def event_generator():
        for partial_diagram in diagram_program.stream_partial_objects( topic=topic):
            if await request.is_disconnected():
                break
            yield f"2:{json.dumps([partial_diagram.model_dump(by_alias=True)])}\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "X-Experimental-Stream-Data": "true"
        }
    )
