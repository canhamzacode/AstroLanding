import { useContext } from 'react';
import { LabelContext } from '../context/LabelProvider';

const useLabel = () => {
  const context = useContext(LabelContext);
  console.log(context);

  if (!context) {
    throw new Error('useLabel must be used within a LabelProvider');
  }

  return context;
};

export default useLabel;
