import { RouterContext } from "@/Providers/RouterProvider";
import { useContext } from "react";

const useRouterPush = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useDispatch must be used within a CardListProvider");
  }
  return context[1];
};

export default useRouterPush;
