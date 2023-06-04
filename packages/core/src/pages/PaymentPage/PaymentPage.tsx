import { Header } from "@/components";
import usePayment from "@/store/hooks/usePrice";

const PaymentPage = () => {
  const { price, onSuccess } = usePayment();

  const handleClick = () => {
    onSuccess();
  };

  return (
    <div>
      <Header title="결제 하기" />
      <div>결제 금액: {price}원</div>
      <button onClick={handleClick}>결제하기</button>
    </div>
  );
};

export default PaymentPage;
