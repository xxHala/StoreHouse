import React from "react";
export const AppContext = React.createContext();
export const ProductContext = React.createContext();
export const CatContext = React.createContext();
export const Provider = AppContext.Provider;
export const ProductProvider = ProductContext.Provider;
export const CatProvider = CatContext.Provider;