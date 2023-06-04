import { CardListProvider } from "@/store";
import GlobalStyle from "@/styles/GlobalStyle";
import { theme } from "@/styles/colors";
import { ThemeProvider } from "@emotion/react";
import RouterProvider from "./RouteProvider/RouterProvider";
import { PaymentProps } from "@/Payment";
import PaymentProvider from "./PaymentProvider/PaymentProvider";
import React from "react";

const RootProvider = ({
  children,
  price,
  onError,
  onSuccess,
}: React.PropsWithChildren<PaymentProps>) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CardListProvider>
        <PaymentProvider
          paymentValue={{
            price,
            onError,
            onSuccess,
          }}
        >
          <RouterProvider>{children}</RouterProvider>
        </PaymentProvider>
      </CardListProvider>
    </ThemeProvider>
  );
};

export default RootProvider;
