import React from 'react';
import Button from '../Button/Button';
import CoolText from '../CoolText/CoolText';
import SectionHeader from '../SectionHeader/SectionHeader';

const AiArchitecture = () => {
  return (
    <div className="py-16 lg:py-20 lg:pb-8">
      <SectionHeader
        info="AI FOR THE ENTERPRISE"
        title="Generative AI Architecture"
        description="Whether you’re building your own models or applying foundation models to your
              business, data remains the biggest bottleneck to AI."
        action="Talk to a Generative AI Expert"
      />
    </div>
  );
};

export default AiArchitecture;
