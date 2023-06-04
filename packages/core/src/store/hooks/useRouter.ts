import { RouterContext } from "@/Providers/RouteProvider/RouterProvider";
import { useContext } from "react";

const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterContext");
  }
  return context[0];
};

export default useRouter;
