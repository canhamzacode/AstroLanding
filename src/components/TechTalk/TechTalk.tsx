import React from 'react';
import TechTalkCard from './TechTalkCard';
import './TechTalk.css';
import { TechTalkData } from './TechTalkData';

const TechTalk = () => {
  return (
    <div className="w-full mx-auto container flex items-center gap-4 overflow-x-scroll scrollbar-hide my-14">
      <div className="flex space-x-4">
        {TechTalkData.map((data, index) => (
          <TechTalkCard
            key={index}
            description={data.description}
            img={data.img.src}
            name={data.name}
          />
        ))}
      </div>
    </div>
  );
};

export default TechTalk;
