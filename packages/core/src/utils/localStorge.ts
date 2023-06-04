import { CardInfo } from "@/types";

interface LocalStorageType {
  PAYMENT_CARD_LIST: CardInfo[];
}

export const setTypedLocalStorage = <K extends keyof LocalStorageType>(
  key: K,
  value: LocalStorageType[K]
) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getTypedLocalStorage = <K extends keyof LocalStorageType>(
  key: K
) => {
  const value = window.localStorage.getItem(key);
  if (!value) return null;
  return JSON.parse(value) as LocalStorageType[K];
};
