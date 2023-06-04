import router from "@/router";
export interface Route {
  path: keyof typeof router;
  slug?: number;
}

export type RoutePushCardIDAction = {
  type: "PUSH_CARD_ID";
  payload: {
    path: keyof typeof router;
    slug: number;
  };
};

export type RoutePushAction = {
  type: "PUSH";
  payload: {
    path: keyof typeof router;
  };
};

export type RouteAction = RoutePushAction | RoutePushCardIDAction;

export const routerReducer = (state: Route, action: RouteAction) => {
  switch (action.type) {
    case "PUSH":
      return {
        path: action.payload.path,
      };

    case "PUSH_CARD_ID":
      return {
        path: action.payload.path,
        slug: action.payload.slug,
      };

    default:
      return state;
  }
};

export default routerReducer;
