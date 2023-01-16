import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
