import { useState, useEffect } from 'react';
import './TextRotator.css';
const texts = ['Generative AI', 'Automotive AI', 'Government AI'];

const TextRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return <span className="custom-text flip">{texts[currentIndex]}</span>;
};

export default TextRotator;
