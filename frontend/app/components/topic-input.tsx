"use client";

import { FormEvent, ChangeEvent } from "react";
import { Loader2 } from "lucide-react";

interface TopicInputProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  isLoading: boolean;
  input: string;
}

const TopicInput: React.FC<TopicInputProps> = ({
  handleSubmit,
  isLoading,
  handleInputChange,
  input,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row w-max items-center gap-1.5"
    >
      <input
        className="rounded-lg p-2 w-[50vw] text-sm"
        id="topic"
        placeholder="Topic e.g. Photosynthesis, push notification system etc."
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        disabled={isLoading}
        className={`px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium ${
          isLoading && "cursor-not-allowed animate-pulse"
        }`}
      >
        Generate Diagram
      </button>
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
    </form>
  );
};

export default TopicInput;
