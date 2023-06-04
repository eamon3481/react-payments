import { ROUTE } from "./constants/route";
import router from "./router";
import useRouter from "./store/hooks/useRouter";

const RouteComponent = () => {
  const { path } = useRouter();

  return router[path] || router[ROUTE.CARD];
};

export default RouteComponent;
