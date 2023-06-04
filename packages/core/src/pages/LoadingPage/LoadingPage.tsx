import usePayment from "@/store/hooks/usePrice";
import { delay } from "@/utils/delay";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
const LoadingPage = () => {
  const { onSuccess } = usePayment();
  const isRender = useRef(false);

  useEffect(() => {
    if (isRender.current) return;
    isRender.current = true;
    delay(1000).then(() => {
      onSuccess({
        massage: "결제가 완료되었습니다.",
      });
    });
  }, [isRender.current]);

  return (
    <LoadingPageSection>
      <Loader />
    </LoadingPageSection>
  );
};

export default LoadingPage;

const LoadingPageSection = styled.div`
  display: flex;
  height: 700px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
`;

const Loader = styled.div`
  width: 190px;
  height: 190px;
  background-color: ${({ theme }) => theme.colors.primary};
  animation: loader 1s infinite linear;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
      border-radius: 50%;
    }
    50% {
      transform: rotate(90deg);
      border-radius: 0%;
    }
    100% {
      transform: rotate(180deg);
      border-radius: 50%;
    }
  }
`;
