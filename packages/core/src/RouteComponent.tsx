import { ROUTE } from "./constants/route";
import router from "./router";
import useRouter from "./store/hooks/useRouter";
import styled from "@emotion/styled";

const RouteComponent = () => {
  const { path } = useRouter();

  return <Wrapper>{router[path] || router[ROUTE.CARD]}</Wrapper>;
};

export default RouteComponent;

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
