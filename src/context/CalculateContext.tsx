import React, { createContext, useReducer, useState } from "react";
import { reducer, initialState, CalculateType } from "../reducers";

type ContextType = {
  state: CalculateType;
  dispatch: React.Dispatch<any>;
};

type PropType = {
  children: JSX.Element[] | JSX.Element;
};

export const CalculateContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
});

export const CalculateProvider = ({ children }: PropType) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CalculateContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculateContext.Provider>
  );
};
