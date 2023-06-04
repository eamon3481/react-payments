import { CardField } from "@/types";
import {
  AppendNewCardAction,
  DeleteCardAction,
  UpdateCardAction,
} from "./CardListReducer";
import { isCompanyValid } from "@/utils";

import router from "@/router";
import {
  RoutePushAction,
  RoutePushCardIDAction,
} from "@/Providers/RouteProvider/routerReducer";

export const ROUTE_ACTION = {
  PUSH: (path: keyof typeof router): RoutePushAction => ({
    type: "PUSH",
    payload: {
      path,
    },
  }),

  PUSH_CARD_ID: (
    path: keyof typeof router,
    slug: number
  ): RoutePushCardIDAction => ({
    type: "PUSH_CARD_ID",
    payload: {
      path,
      slug,
    },
  }),
};

export const ACTION = {
  APPEND_NEW_CARD: (id: number, cardField: CardField): AppendNewCardAction => {
    if (!isCompanyValid(cardField)) {
      throw new Error("cardCompany is not valid");
    }
    return {
      type: "APPEND",
      payload: {
        value: {
          ...cardField,
          id,
          cardNickname: "",
        },
      },
    };
  },

  UPDATE_CARD_NICKNAME: (
    id: number,
    cardNickname: string
  ): UpdateCardAction => ({
    type: "UPDATE",
    payload: {
      id,
      key: "cardNickname",
      value: cardNickname,
    },
  }),

  DELETE_CARD: (id: number): DeleteCardAction => ({
    type: "DELETE",
    payload: {
      id,
    },
  }),
};
