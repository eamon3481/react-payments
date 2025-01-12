import React, { createContext, useReducer, useState } from "react";
import routerReducer, { Route, RouteAction } from "./routerReducer";

export const RouterContext = createContext<
  [Route, React.Dispatch<RouteAction>] | null
>(null);

const RouterProvider = ({ children }: RouterProviderProps) => {
  const router = useReducer(routerReducer, {
    path: "/card",
  });
  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
};

type RouterProviderProps = React.PropsWithChildren<{}>;

export default RouterProvider;
