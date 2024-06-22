import React from 'react';

interface UsecaseCardProp {
  title: string;
  description: string;
  isActive: boolean;
  onHover: () => void;
}

const UsecaseCard = ({ title, description, isActive, onHover }: UsecaseCardProp) => {
  return (
    <div
      className={`border-b group last:border-transparent border-white/10 transition-all duration-300 cursor-pointer ${
        isActive ? 'opacity-100 hover:border-white' : 'opacity-30'
      }`}
      onMouseEnter={onHover}
    >
      <p className="w-full pt-6 pb-2 text-2xl leading-10 text-left text-white font-aeonik">
        {title}
      </p>
      <p className="pb-6 overflow-hidden text-white transition-colors group-hover:text-white/70">
        {description}
      </p>
    </div>
  );
};

export default UsecaseCard;
