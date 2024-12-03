import React from 'react';

interface LuxCapProps {
  title: string;
}

export default function LuxCap({ title }: LuxCapProps) {

  const titleFirstChar = title.charAt(0);
  const restOfTitle = title.slice(1);

  return (
    <div>
      <h1 className="mb-[5.2vw] text-[5.2vw] text-center md:text-4xl">
        <span className="pr-[0.5vw] font-luxurious text-[14.5vw] md:text-8xl">{titleFirstChar}</span>
        {restOfTitle}
      </h1>
    </div>
  );
}