import { CardInfo } from "@/types";
import React, { createContext, useReducer } from "react";
import cardListReducer, { CardListAction } from "./CardListReducer";

export const CardListContext = createContext<
  [CardInfo[], React.Dispatch<CardListAction>] | null
>(null);

const CardListProvider = ({ children }: CardListProviderProps) => {
  const initial: CardInfo[] = [];
  const reducer = useReducer(cardListReducer, initial);
  return (
    <CardListContext.Provider value={reducer}>
      {children}
    </CardListContext.Provider>
  );
};

type CardListProviderProps = { children: JSX.Element | JSX.Element[] };

export default CardListProvider;
