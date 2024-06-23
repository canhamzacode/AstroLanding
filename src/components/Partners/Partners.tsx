import React, { useEffect, useState } from 'react';
import 'swiper/swiper-bundle.css';

import microsoft from '../../img/microsoft.png';
import meta from '../../img/meta.png';
import openai from '../../img/openai.png';
import cohere from '../../img/cohere.png';
import nvidia from '../../img/nvidia.png';
import adept from '../../img/adept.png';
import usarmy from '../../img/usarmy.png';
import airforce from '../../img/airforce.png';
import defenseUnit from '../../img/defense-innovation-unit.png';
import cdao from '../../img/cdao.png';
import gm from '../../img/general-motors.png';
import toyota from '../../img/toyota.png';
import fox from '../../img/fox.png';
import accenture from '../../img/accenture.png';
import koch from '../../img/koch.png';

import './Partners.css';
import SponsorsSwiper from './SponsorSwiper';

type PartnerCategory = 'Generative AI Companies' | 'U.S. Government Agencies' | 'Enterprises';

const partnerCategories: PartnerCategory[] = [
  'Generative AI Companies',
  'U.S. Government Agencies',
  'Enterprises'
];

const sponsors: Record<PartnerCategory, { src: string; alt: string }[]> = {
  'Generative AI Companies': [
    { src: microsoft.src, alt: 'Microsoft' },
    { src: meta.src, alt: 'Meta' },
    { src: openai.src, alt: 'OpenAI' },
    { src: cohere.src, alt: 'Cohere' },
    { src: nvidia.src, alt: 'Nvidia' },
    { src: adept.src, alt: 'Adept' }
  ],
  'U.S. Government Agencies': [
    { src: usarmy.src, alt: 'Us Army' },
    { src: airforce.src, alt: 'Air Force' },
    { src: defenseUnit.src, alt: 'Defense Innovation Unit' },
    { src: cdao.src, alt: 'CDAO' }
  ],
  Enterprises: [
    { src: gm.src, alt: 'General Motors' },
    { src: toyota.src, alt: 'Toyota' },
    { src: fox.src, alt: 'Fox' },
    { src: accenture.src, alt: 'Accenture' },
    { src: koch.src, alt: 'Koch' }
  ]
};

const Partners: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PartnerCategory>(partnerCategories[0]);
  const [allSponsors, setAllSponsors] = useState<{ src: string; alt: string }[]>([]);

  useEffect(() => {
    // Combine all sponsors into a single array
    const combinedSponsors = [
      ...sponsors['Generative AI Companies'],
      ...sponsors['U.S. Government Agencies'],
      ...sponsors.Enterprises
    ];
    setAllSponsors(combinedSponsors);

    const interval = setInterval(() => {
      setActiveCategory((prevCategory) => {
        const currentIndex = partnerCategories.indexOf(prevCategory);
        const nextIndex = (currentIndex + 1) % partnerCategories.length;
        return partnerCategories[nextIndex];
      });
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const changeActiveCategory = (category: PartnerCategory) => {
    setActiveCategory(category);
  };

  return (
    <div className="container mx-auto">
      <div className="pt-6 pb-12 sm:pb-16 sm:pt-20 xl:pb-16 xl:pt-24 text-center">
        <p className="md:flex hidden items-center justify-center">
          Scale works with{' '}
          {partnerCategories.map((category) => (
            <button
              key={category}
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => changeActiveCategory(category)}
            >
              {category},
            </button>
          ))}
        </p>
        <p className="flex md:hidden items-center justify-center flex-wrap">
          Scale works with{' '}
          {partnerCategories.map((category) => (
            <span key={category} className="category-button">
              {category}
            </span>
          ))}
        </p>
      </div>
      <div className="w-full mb-4 hidden md:flex">
        <ul className="flex h-[35px] items-center justify-between gap-6 w-full">
          {sponsors[activeCategory].map((sponsor, index) => (
            <li key={index} className="h-full">
              <img src={sponsor.src} alt={sponsor.alt} className="h-full" />
            </li>
          ))}
        </ul>
      </div>
      <SponsorsSwiper allSponsors={allSponsors} />
    </div>
  );
};

export default Partners;
