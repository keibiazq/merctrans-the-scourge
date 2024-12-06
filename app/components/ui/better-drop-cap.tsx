import React from 'react';

interface DropCapProps {
  title?: string;
  content?: string;
}

export default function DropCap({ content }: DropCapProps) {

  const firstChar = content?.charAt(0);
  const restOfText = content?.slice(1);

  const highlightTheScourge = (text?: string) => {
    const parts = text?.split(/\b(The Scourge)\b/);
    return parts?.map((part, index) =>
      part === 'The Scourge' ? <span key={index} className="text-scourge">{part}</span> : part
    );
  };

  return (
    <div>
      <div className="relative">
        <p className="text-justify">
          <span className="float-left mr-2 h-fit text-[102px] leading-[0.7]">
            {firstChar}
          </span>
          {(highlightTheScourge(restOfText))}
        </p>
      </div>
    </div>
  );
}
