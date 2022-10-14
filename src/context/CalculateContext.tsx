import React, { createContext, useState } from "react";

type ContextType = {
  input: string;
  setInput: (input: string) => void;
};

type PropType = {
  children: JSX.Element[] | JSX.Element;
};

export const CalculateContext = createContext<ContextType>({
  input: "",
  setInput: () => {},
});

export const CalculateProvider = ({ children }: PropType) => {
  const [input, setInput] = useState<string>("");

  return (
    <CalculateContext.Provider value={{ input, setInput }}>
      {children}
    </CalculateContext.Provider>
  );
};
