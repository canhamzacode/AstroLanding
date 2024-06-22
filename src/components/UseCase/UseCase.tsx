import React, { useState, useEffect } from 'react';
import { providerImg, useCaseData } from './UsecaseData';
import UsecaseCard from './UsecaseCard';
import wholeModel1 from '../../img/rlhf.png';
import wholeModel2 from '../../img/foundation-models.png';
import wholeModel3 from '../../img/data-engine.png';
import wholeModelAllActive from '../../img/whole-model.png';
import TechTalkSwiper from '../TechTalk/TechTalkSwiper';

const images = [wholeModel1, wholeModel2, wholeModel3, wholeModelAllActive];

const UseCase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [allActive, setAllActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex === useCaseData.length - 1) {
          setAllActive(true);
          return prevIndex;
        } else {
          return prevIndex + 1;
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleHover = (index: number) => {
    setActiveIndex(index);
    setAllActive(false);
  };

  return (
    <div className="container">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid">
          {useCaseData.map((data, index) => (
            <UsecaseCard
              key={index}
              title={data.title}
              description={data.description}
              isActive={allActive || activeIndex === index}
              onHover={() => handleHover(index)}
            />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <img
            src={allActive ? images[images.length - 1].src : images[activeIndex].src}
            alt="whole model"
            className="w-[80%] h-full"
          />
        </div>
      </div>
      <div className="md:grid grid-cols-5 gap-5 my-14 hidden">
        {providerImg.map((data, index) => (
          <div
            key={index}
            className="inset-10 border border-white/15 rounded-2xl flex items-center justify-center p-7"
          >
            <img src={data.src} alt="open ai" />
          </div>
        ))}
      </div>
      <TechTalkSwiper />
    </div>
  );
};

export default UseCase;
