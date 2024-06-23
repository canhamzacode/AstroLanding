import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import TechTalkCard from '../TechTalk/TechTalkCard';
import { TechTalkData } from '../TechTalk/TechTalkData';
import CaseStudyCard from './CaseStudyCard';
import { CaseStudyData } from './CaseStudyData';

const CaseStudy = () => {
  return (
    <div className="container">
      <div className="py-16 lg:py-20 bg-transparent pb-0 lg:pb-0">
        <SectionHeader
          info="LEARN HOW WE SERVE ENTERPRISES LARGE AND SMALL"
          title="Case Studies & Resources"
          description="We've worked with the world's leading AI teams for years, and delivered more high-quality data than anybody else."
        />
      </div>
      <div className="w-full mx-auto container flex items-center gap-4 overflow-x-scroll scrollbar-hide my-14">
        <div className="flex space-x-4">
          {CaseStudyData.map((data, index) => (
            <CaseStudyCard key={index} info={data.info} title={data.title} img={data.image.src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
