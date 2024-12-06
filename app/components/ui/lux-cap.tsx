import React from 'react';

interface LuxCapProps {
  title: string;
}

export default function LuxCap({ title }: LuxCapProps) {

  const titleFirstChar = title.charAt(0);
  const restOfTitle = title.slice(1);

  return (
    <div className='pt-4'>
      <h1 className="mb-4 text-center text-xl md:text-4xl">
        <span className="pr-[0.5vw] font-luxurious text-[56px] md:text-8xl">{titleFirstChar}</span>
        {restOfTitle}
      </h1>
    </div>
  );
}