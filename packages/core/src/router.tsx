import {
  CreateCardPage,
  CardListPage,
  CardCreateCompletePage,
  CardNicknameEditPage,
} from "./pages";
import { ROUTE } from "./constants/route";

const router = {
  [ROUTE.CARD]: <CardListPage />,
  [ROUTE.CARD_CREATE]: <CreateCardPage />,
  [ROUTE.CARD_CREATE_COMPLETE]: <CardCreateCompletePage />,
  [ROUTE.CARD_NICKNAME_EDIT]: <CardNicknameEditPage />,
} as const;

export default router;
