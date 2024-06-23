import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import GeneRativeAiCard from './GeneRativeAiCard';
import { GenerativeAiData } from './GenerativeAiData';

const GenerativeAi = () => {
  return (
    <div className="container">
      <div className="py-16 lg:py-20 bg-transparent pb-0 lg:pb-0">
        <SectionHeader
          info="APPLY AI"
          title="Generative AI Applications"
          description="Easily Apply AI to your most challenging use cases with pre‑built applications that harness the power of customized LLMs."
          customColor="text-[#7B8FDD]"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 grid-cols-1">
        {GenerativeAiData.map((data, index) => (
          <GeneRativeAiCard
            key={index}
            description={data.description}
            img={data.image?.src}
            title={data.title}
            info={data.info}
          />
        ))}
      </div>
    </div>
  );
};

export default GenerativeAi;
