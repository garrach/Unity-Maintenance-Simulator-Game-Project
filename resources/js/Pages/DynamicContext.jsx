import React, { createContext, useContext, useState } from 'react';

const DynamicContext = createContext();

export  const DynamicProvider = ({ children, config }) => {
  const [dynamicValues, setDynamicValues] = useState(config.defaultValues || {});

  const updateValues = (newValues) => {
    setDynamicValues((prevValues) => ({ ...prevValues, ...newValues }));
  };

  return (
    <DynamicContext.Provider value={{ dynamicValues, updateValues }}>
      {children}
    </DynamicContext.Provider>
  );
};

export const useDynamicContext = () => {
  const context = useContext(DynamicContext);
  if (!context) {
    throw new Error('useDynamicContext must be used within a DynamicProvider');
  }
  return context;
};
