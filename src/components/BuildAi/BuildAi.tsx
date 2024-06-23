import React, { useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import Button from '../Button/Button';
import rlhfImg from '../../img/rlhfImg.png';
import dataCuration from '../../img/data-curation.png';

const BuildAi = () => {
  const [activeLabel, setActiveLabel] = useState('3D');

  const handleLabelClick = (label: string) => {
    setActiveLabel(label);
  };

  return (
    <div className="container">
      <div className="py-16 lg:py-20 bg-transparent relative">
        <SectionHeader
          info="BUILD AI"
          title="Scale Data Engine"
          description="For AI teams, Scale Data Engine improves your models by improving your data."
        />
        <div className="grid gap-40">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center gap-8">
            <div className="rounded-md ">
              <img src={rlhfImg.src} alt="rlhf" />
            </div>
            <div>
              <h3 className="text-3xl xl:text-4xl mb-2 text-white">RLHF</h3>
              <p>Powering the next generation of Generative AI</p>
              <p className="my-8 text-[#F5F5F5]">
                Scale Generative AI Data Engine powers the most advanced LLMs and generative models
                in the world through world-class RLHF, data generation, model evaluation, safety,
                and alignment.
              </p>
              <Button text="Label My Data" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center gap-8">
            <div>
              <h3 className="text-3xl xl:text-4xl mb-2 text-white">Data Labeling</h3>
              <p>The best quality data to fuel the best performing models</p>
              <div className="w-full  overflow-x-auto disableScroll">
                <div className="w-full border border-white rounded-[50px] min-h-[45px] min-w-[420px] flex items-center mt-5 p-2">
                  {['3D', 'Image', 'Mapping', 'Text', 'Audio'].map((label, index) => (
                    <button
                      key={label}
                      className={`h-full w-full rounded-[50px] p-2 border ${
                        activeLabel === label ? 'border-white' : 'border-transparent'
                      } ${index !== 4 ? 'border-r' : ''}`}
                      onClick={() => handleLabelClick(label)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <p className="my-8 text-[#F5F5F5]">
                Scale has pioneered in the data labeling industry by combining AI-based techniques
                with human-in-the-loop, delivering labeled data at unprecedented quality,
                scalability, and efficiency.
              </p>
              <Button text="Label My Data" />
            </div>
            <div className="bg-red-300 rounded-md h-[240px] flex items-center justify-center">
              <p>{activeLabel}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center gap-8">
            <div className="rounded-md">
              <img src={dataCuration.src} alt="rlhf" />
            </div>
            <div>
              <h3 className="text-3xl xl:text-4xl mb-2 text-white">Data Curation</h3>
              <p>Unearth the most valuable data by intelligently managing your dataset</p>
              <p className="my-8 text-[#F5F5F5]">
                Scale’s suite of dataset management, testing, model evaluation, and model comparison
                tools enable you to “label what matters.” Maximize the value of your labeling budget
                by identifying the highest value data to label, even without ground truth labels.
              </p>
              <Button text="Curate My Data" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildAi;
