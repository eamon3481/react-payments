import { PaymentContext } from "@/Providers/PaymentProvider/PaymentProvider";
import { useContext } from "react";

const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }

  return context;
};

export default usePayment;
