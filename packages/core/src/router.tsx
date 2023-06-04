import {
  CreateCardPage,
  CardListPage,
  CardCreateCompletePage,
  CardNicknameEditPage,
} from "./pages";
import { ROUTE } from "./constants/route";
import PaymentPage from "./pages/PaymentPage/PaymentPage";

const router = {
  [ROUTE.CARD]: <CardListPage />,
  [ROUTE.CARD_CREATE]: <CreateCardPage />,
  [ROUTE.CARD_CREATE_COMPLETE]: <CardCreateCompletePage />,
  [ROUTE.CARD_NICKNAME_EDIT]: <CardNicknameEditPage />,
  [ROUTE.PAYMENT]: <PaymentPage />,
} as const;

export default router;
