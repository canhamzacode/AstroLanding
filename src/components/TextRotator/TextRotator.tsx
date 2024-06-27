import React, { useEffect } from 'react';
import './TextRotator.css';

const items = ['Generative AI', 'Automotive AI', 'Government AI', 'Generative AI'];

const TextRotator = () => {
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const animationName = 'dynamic-auto-scroll';
    const itemCount = items.length;

    const updateKeyframes = () => {
      const createKeyframes = (height: number) => {
        let keyframes = `
          @keyframes ${animationName} {
            0%, 20% { transform: translateY(0); }
        `;

        for (let i = 1; i < itemCount; i++) {
          const percentage1 = (i / itemCount) * 100 - 5;
          const percentage2 = (i / itemCount) * 100;
          keyframes += `
            ${percentage1}% { transform: translateY(-${i * height}em); }
            ${percentage2}%, ${percentage2 + 20}% { transform: translateY(-${i * height}em); }
          `;
        }

        keyframes += `
            100% { transform: translateY(-${(itemCount - 1) * height}em); }
          }
        `;
        return keyframes;
      };

      // Remove previous keyframes
      for (let i = styleSheet.cssRules.length - 1; i >= 0; i--) {
        if ((styleSheet.cssRules[i] as CSSKeyframesRule).name === animationName) {
          styleSheet.deleteRule(i);
        }
      }

      // Determine height based on screen size
      const isSmallScreen = window.matchMedia('(max-width: 610px)').matches;
      const height = isSmallScreen ? 1.1 : 1;

      // Append keyframes to the stylesheet
      const keyframes = createKeyframes(height);
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

      // Set dynamic height for the container
      const container = document.querySelector('.inner-headings') as HTMLElement;
      if (container) {
        container.style.height = `${height}em`;
      }

      // Set animation name and duration
      const texts = document.querySelectorAll('.custom-text');
      texts.forEach((text) => {
        (text as HTMLElement).style.animation = `${animationName} ${itemCount * 2}s infinite`;
      });
    };

    // Initial setup
    updateKeyframes();

    // Update keyframes on window resize
    const handleResize = () => {
      updateKeyframes();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="inner-headings">
      {items.map((item, index) => (
        <span key={index} className="custom-text">
          {item}
        </span>
      ))}
    </div>
  );
};

export default TextRotator;
