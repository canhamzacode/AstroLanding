import React, { useEffect, useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import CustomerCard from './CustomerCard';
import { CustomerData } from './CustomerData';
import analysis from '../../img/analysis.svg';
import usAirForce from '../../img/usarmy.png';
import amazon from '../../img/amazon.png';
import toyota from '../../img/toyota.png';
import salesForce from '../../img/salesforce.png';

const Customers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CustomerData.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const currentCustomer = CustomerData[currentIndex];

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const images = [
    { src: analysis.src, alt: 'analysis' },
    { src: usAirForce.src, alt: 'us airforce' },
    { src: amazon.src, alt: 'amazon' },
    { src: toyota.src, alt: 'toyota' },
    { src: salesForce.src, alt: 'sales force' }
  ];

  return (
    <div className="container">
      <div className="py-16 lg:py-20 bg-transparent pb-0 lg:pb-0">
        <SectionHeader
          info="CUSTOMERS"
          title="We have changed the game of AI data—hear it from our customers."
          description="From RLHF to data labeling to model evaluation to enterprise apps, learn from experts why Scale is key to any AI strategy."
        />
      </div>
      <div className="w-full">
        <CustomerCard
          info={currentCustomer.info}
          name={currentCustomer.name}
          role={currentCustomer.role}
        />
      </div>
      <div className=" md:flex hidden justify-between items-center mt-10">
        {images.map((image, index) => (
          <button key={index} onClick={() => handleImageClick(index)}>
            <img
              src={image.src}
              alt={image.alt}
              className={`customImg w-[50px] ${index === currentIndex ? 'active' : 'inactive'}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Customers;
