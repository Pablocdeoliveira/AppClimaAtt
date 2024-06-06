// src/CityContext.js
import React, { createContext, useState } from 'react';

export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cidade, setCidade] = useState("");

  return (
    <CityContext.Provider value={{ cidade, setCidade }}>
      {children}
    </CityContext.Provider>
  );
};
