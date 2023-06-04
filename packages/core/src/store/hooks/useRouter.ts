import { RouterContext } from "@/Providers/RouterProvider";
import { useContext } from "react";

const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterContext");
  }
  return context[0];
};

export default useRouter;
