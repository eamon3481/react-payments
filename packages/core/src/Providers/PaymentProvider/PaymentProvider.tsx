import { PaymentProps } from "@/Payment";
import React, { createContext } from "react";

export const PaymentContext = createContext<PaymentProps | null>(null);

const PaymentProvider = ({ children, paymentValue }: PaymentProviderProps) => {
  return (
    <PaymentContext.Provider value={paymentValue}>
      {children}
    </PaymentContext.Provider>
  );
};

type PaymentProviderProps = {
  children: JSX.Element | JSX.Element[];
  paymentValue: PaymentProps;
};

export default PaymentProvider;
