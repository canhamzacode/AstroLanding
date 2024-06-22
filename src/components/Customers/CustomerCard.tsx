import React from 'react';

interface CustomerCardProps {
  info: string;
  name: string;
  role: string;
}

const CustomerCard = ({ info, name, role }: CustomerCardProps) => {
  return (
    <div className="box_box__wrapper__7yWdR box_box-blue__FPEs4 rounded-lg p-12 py-20 border-neutral-800 border">
      <div className="lg:flex-1 max-w-[700px] mx-auto text-center">
        <q className="inline-block mb-8 text-base md:leading-[1.6] md:text-xl">{info}</q>
        <h4 className="inline-block mb-2 font-medium md:leading-7 md:text-lg sm:mb-0 text-no-gradient">
          {name}
        </h4>
        <p className="text-base text-white text-opacity-75">{role}</p>
      </div>
    </div>
  );
};

export default CustomerCard;
