import { RootProvider } from "./Providers";
import RouteComponent from "./RouteComponent";

export type PaymentProps = {
  price: number;
  onSuccess: ({ massage }: { massage: string }) => void;
  onError?: () => void;
};

const Payment = ({ price, onSuccess, onError }: PaymentProps) => {
  return (
    <RootProvider price={price} onSuccess={onSuccess} onError={onError}>
      <RouteComponent />
    </RootProvider>
  );
};

export default Payment;
