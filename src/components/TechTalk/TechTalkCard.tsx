import FeiFei from '../../img/feifei.png';
import Play from '../../icons/play.svg';
import React from 'react';

interface TechTalkCardProps {
  description: string;
  img: string;
  name: string;
}

const TechTalkCard = ({ description, img, name }: TechTalkCardProps) => {
  return (
    <div className="relative w-[400px] bg-[#D1AAD7]/[0.01] border-white border md:w-[450px] rounded-2xl grid grid-cols-[0.7fr,1fr] flex-shrink-0">
      <div className="flex justify-end items-end">
        <img src={img} alt={name} />
      </div>
      <div className="p-4">
        <p className="mb-1 text-xs font-medium sm:text-sm text-scale-lightmauve">Tech Talk</p>
        <p className="font-aeonik text-lg leading-6 sm:text-xl lg:text-2xl sm:leading-[111%] mb-3 sm:mb-6 lg:mb-2 line-clamp-2">
          {description}
        </p>
        <p className="text-xs font-medium sm:text-sm text-white/60">by {name}</p>
      </div>
      <button className="absolute w-[40px] h-[40px] rounded-[50%] bottom-2 z-20 bg-slate-50 right-2">
        <img src={Play.src} alt="play icon" />
      </button>
    </div>
  );
};

export default TechTalkCard;
