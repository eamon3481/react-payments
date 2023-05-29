import { CardListProvider } from "@/store";
import GlobalStyle from "@/styles/GlobalStyle";
import { theme } from "@/styles/colors";
import { ThemeProvider } from "@emotion/react";
import RouterProvider from "./RouterProvider";

const PaymentProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider>
        <CardListProvider>{children}</CardListProvider>
      </RouterProvider>
    </ThemeProvider>
  );
};

export default PaymentProvider;
