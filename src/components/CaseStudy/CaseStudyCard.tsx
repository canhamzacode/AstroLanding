import React from 'react';

interface CaseStudyCardProps {
  info: string;
  title: string;
  img: string;
}

const CaseStudyCard = ({ info, title, img }: CaseStudyCardProps) => {
  return (
    <div className="relative w-[400px] bg-[#D1AAD7]/[0.01] flex-shrink-0">
      <div className="w-full h-[250px]">
        <img src={img} alt={title} className="w-ful h-full" />
      </div>
      <div className="pt-6">
        <p className="text-sm font-medium leading-[1.71] text-[#D1AAD7]">{info}</p>
        <h5 className="line-clamp-2 text-2xl font-aeonik leading-[1.33] mt-1">{title}</h5>
      </div>
    </div>
  );
};

export default CaseStudyCard;
