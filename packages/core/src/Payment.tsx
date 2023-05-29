import { PaymentProvider } from "./Providers";
import RouteComponent from "./RouteComponent";
interface PaymentProps {
  onSuccess?: () => void;
  onError?: () => void;
}

const Payment = ({ onSuccess, onError }: PaymentProps) => {
  return (
    <PaymentProvider>
      <RouteComponent />
    </PaymentProvider>
  );
};

export default Payment;
