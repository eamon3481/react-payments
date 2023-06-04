import {
  CreateCardPage,
  CardListPage,
  CardCreateCompletePage,
  CardNicknameEditPage,
  PaymentPage,
  LoadingPage,
} from "./pages";
import { ROUTE } from "./constants/route";

const router = {
  [ROUTE.CARD]: <CardListPage />,
  [ROUTE.CARD_CREATE]: <CreateCardPage />,
  [ROUTE.CARD_CREATE_COMPLETE]: <CardCreateCompletePage />,
  [ROUTE.CARD_NICKNAME_EDIT]: <CardNicknameEditPage />,
  [ROUTE.PAYMENT]: <PaymentPage />,
  [ROUTE.LOADING]: <LoadingPage />,
} as const;

export default router;
