import React from 'react';

interface TextBlockProps {
  title?: string;
  content?: string;
}

export default function TextBlock({ title, content }: TextBlockProps) {

  const firstChar = content?.charAt(0);
  const restOfText = content?.slice(1);
  const titleFirstChar = title?.charAt(0);
  const restOfTitle = title?.slice(1);

  const highlightTheScourge = (text?: string) => {
    const parts = text?.split(/\b(The Scourge)\b/);
    return parts?.map((part, index) =>
      part === 'The Scourge' ? <span key={index} className="text-[#9C1515]">{part}</span> : part
    );
  };

  return (
    <div>
      <div>
        <h1 className="mb-4 text-center text-xl md:text-4xl">
          <span className="font-luxurious text-6xl md:text-8xl">{titleFirstChar}</span>
          {restOfTitle}
        </h1>
        <div className="relative">
          <p className="text-justify">
            <span className="relative top-[5px] md:top-[1px] float-left mr-2 text-8xl md:text-[102px] leading-[0.65] md:leading-[0.8]">
              {firstChar}
            </span>
            {(highlightTheScourge(restOfText))}
          </p>
        </div>
      </div>
    </div>
  );
}
