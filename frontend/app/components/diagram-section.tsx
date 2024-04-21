"use client";

import { useCompletion } from "ai/react";

import TopicInput from "./topic-input";
import DiagramVis, { Diagram } from "./diagram-vis";
import { useEffect, useState } from "react";

export default function DiagramSection() {
  const { input, isLoading, handleInputChange, handleSubmit, data } =
    useCompletion({
      api: process.env.NEXT_PUBLIC_CHAT_API,
    });

  const [diagram, setDiagram] = useState<Diagram | null>(null);

  useEffect(() => {
    // console.log("data");
    // console.log(data);
    if (data && data.length > 0) {
      setDiagram(data[data.length - 1] as unknown as Diagram);
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-3 items-center">
      <TopicInput
        isLoading={isLoading}
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      {diagram && <DiagramVis diagram={diagram} />}
    </div>
  );
}
