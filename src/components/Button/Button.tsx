import React from 'react';
import './Button.css';
interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="btn-color flex gap-2 hover:gap-4 transition-all hover:bg-[#cf58fa] text-center rounded-lg py-2 px-4">
      {text} <span>→</span>
    </button>
  );
};

export default Button;
