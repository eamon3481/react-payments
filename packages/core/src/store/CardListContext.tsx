import { CardInfo } from "@/types";
import React, { createContext, useReducer, useEffect } from "react";
import cardListReducer, { CardListAction } from "./CardListReducer";
import {
  getTypedLocalStorage,
  setTypedLocalStorage,
} from "@/utils/localStorge";

export const CardListContext = createContext<
  [CardInfo[], React.Dispatch<CardListAction>] | null
>(null);

const localStorageMiddleware = (
  reducer: (state: CardInfo[], action: CardListAction) => CardInfo[]
) => {
  return (state: CardInfo[], action: CardListAction) => {
    const newState = reducer(state, action);
    setTypedLocalStorage("PAYMENT_CARD_LIST", newState);
    return newState;
  };
};

const CardListProvider = ({ children }: CardListProviderProps) => {
  const initial: CardInfo[] = [];

  const reducer = useReducer(localStorageMiddleware(cardListReducer), initial);

  useEffect(() => {
    const localData = getTypedLocalStorage("PAYMENT_CARD_LIST");
    if (localData !== null) {
      reducer[1]({
        type: "INITIALIZE",
        payload: localData,
      });
    }
  }, []);
  return (
    <CardListContext.Provider value={reducer}>
      {children}
    </CardListContext.Provider>
  );
};

type CardListProviderProps = { children: JSX.Element | JSX.Element[] };

export default CardListProvider;
