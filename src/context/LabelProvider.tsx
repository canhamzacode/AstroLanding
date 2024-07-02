import React, { createContext, useState } from 'react';

interface LabelContextProps {
  activeLabel: string;
  handleLabelClick: (label: string) => void;
}

export const LabelContext = createContext<LabelContextProps>({
  activeLabel: '3D',
  handleLabelClick: function (label: string): void {
    throw new Error('Function not implemented.');
  }
});

const LabelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeLabel, setActiveLabel] = useState('3D');

  const handleLabelClick = (label: string) => {
    setActiveLabel(label);
  };

  return (
    <LabelContext.Provider value={{ activeLabel, handleLabelClick }}>
      {children}
    </LabelContext.Provider>
  );
};

export default LabelProvider;
