import { useState } from 'react';

const ActiveLabel = () => {
  const [activeLabel, setActiveLabel] = useState('3D');

  const handleLabelClick = (label: string) => {
    setActiveLabel(label);
  };

  return (
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
  );
};

export default ActiveLabel;
