import { createContext, useState } from "react";

export const ServiceModeContext = createContext();

export const ServiceModeProvider = ({ children }) => {
  const [mode, setMode] = useState("tech");

  return (
    <ServiceModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ServiceModeContext.Provider>
  );
};