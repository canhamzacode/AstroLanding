import React from 'react';

interface CoolTextProps {
  text: string;
  customColor?: string;
}

const CoolText = ({ text, customColor }: CoolTextProps) => {
  return (
    <div
      className={`mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-white bg-opacity-5 ${
        customColor ? customColor : ' text-[#D1AAD7]'
      } rounded-full px-4 py-2`}
    >
      <p>{text}</p>
    </div>
  );
};

export default CoolText;
