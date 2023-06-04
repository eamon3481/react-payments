import usePayment from "@/store/hooks/usePrice";
import PreviewCompleteCard from "../CardCreateCompletePage/components/PreviewCompleteCard/PreviewCompleteCard";
import useRouter from "@/store/hooks/useRouter";
import styled from "@emotion/styled";

const PaymentPage = () => {
  const { price, onSuccess } = usePayment();
  const { slug } = useRouter();

  const handleClick = () => {
    onSuccess();
  };

  if (!slug) return <div>존재하지 않는 카드입니다.</div>;

  return (
    <>
      <PreviewSection>
        <PreviewCompleteCard title="결제 하기" cardId={slug} />
        <PriceSection>결제 금액: {price}원</PriceSection>
      </PreviewSection>
      <PaymentButton onClick={handleClick}>결제하기</PaymentButton>
    </>
  );
};

export default PaymentPage;

const PriceSection = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
`;

const PreviewSection = styled.section`
  flex: 1;
`;

const PaymentButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  width: 100%;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.gray0};
  font-size: 16px;
`;
