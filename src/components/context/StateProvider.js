import { createContext, useContext, useReducer } from "react";

export const stateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </stateContext.Provider>
  );
};
//this hook will be used to get data
export const useStateValue = () => useContext(stateContext);
