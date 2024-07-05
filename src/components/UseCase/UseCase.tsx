import React, { useState, useEffect } from 'react';
import { providerImg, useCaseData } from './UsecaseData';
import UsecaseCard from './UsecaseCard';
import TechTalkSwiper from '../TechTalk/TechTalkSwiper';
import UsecaseSwipper from './UsecaseSwipper';

const UseCase = ({ imageUrls }: { imageUrls: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [allActive, setAllActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex === useCaseData.length - 1) {
          setAllActive(true);
          return 0;
        } else if (prevIndex === 0 && allActive) {
          setAllActive(false);
          return 0;
        } else {
          setAllActive(false);
          return prevIndex + 1;
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [allActive]);

  const handleHover = (index: React.SetStateAction<number>) => {
    setActiveIndex(index);
    setAllActive(false);
  };

  const usecaseSwipperImages = [
    imageUrls[imageUrls.length - 1],
    ...imageUrls.slice(0, imageUrls.length - 1)
  ];

  return (
    <div className="container">
      <div className="md:grid hidden md:grid-cols-2 gap-4">
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
            src={allActive ? imageUrls[imageUrls.length - 1] : imageUrls[activeIndex]}
            alt="whole model"
            className="w-[80%] h-full"
          />
        </div>
      </div>
      <UsecaseSwipper imageUrls={usecaseSwipperImages} />
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
