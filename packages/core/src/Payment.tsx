import { PaymentProvider } from "./Providers";
import RouteComponent from "./RouteComponent";

export type PaymentProps = {
  price?: number;
  onSuccess?: () => void;
  onError?: () => void;
};

const Payment = ({ price, onSuccess, onError }: PaymentProps) => {
  return (
    <PaymentProvider>
      <RouteComponent />
    </PaymentProvider>
  );
};

export default Payment;
