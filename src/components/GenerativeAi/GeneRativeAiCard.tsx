import React from 'react';

interface GeneRativeAiCardProp {
  img: string;
  info: string;
  title: string;
  description: string;
}

const GeneRativeAiCard = ({ img, info, title, description }: GeneRativeAiCardProp) => {
  return (
    <div className="pt-12 px-12 border-2 border-neutral-800  rounded-2xl">
      <p className="uppercase leading-4 text-xs tracking-[4px] mb-4 lg:mb-6 z-10 relative">
        {info}
      </p>
      <p className="md:text-[1.625rem] text-3.5xl leading-tight md:leading-8 mb-2 font-aeonik z-10 relative">
        {title}
      </p>
      <p className="z-10 mb-8 leading-6 md:mb-18 text-zinc-400">{description}</p>
      <div className="h-[250px]">
        <img src={img} alt={info} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default GeneRativeAiCard;
