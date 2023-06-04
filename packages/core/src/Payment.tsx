import { RootProvider } from "./Providers";
import RouteComponent from "./RouteComponent";

export type PaymentProps = {
  price?: number;
  onSuccess?: () => void;
  onError?: () => void;
};

const Payment = ({ price, onSuccess, onError }: PaymentProps) => {
  return (
    <RootProvider>
      <RouteComponent />
    </RootProvider>
  );
};

export default Payment;
