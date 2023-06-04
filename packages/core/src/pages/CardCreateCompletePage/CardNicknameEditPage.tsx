import { TextButton } from "@/components";
import styled from "@emotion/styled";
import PreviewCompleteCard from "./components/PreviewCompleteCard/PreviewCompleteCard";
import CardNicknameEdit from "./components/CardNicknameEdit/CardNicknameEdit";
import { CARD_LIST_ACTION, useCardListDispatch } from "@/store";
import useRouterPush from "@/store/hooks/useRouterPush";
import { ROUTE_ACTION } from "@/store/CardListAction";
import { ROUTE } from "@/constants/route";
import useRouter from "@/store/hooks/useRouter";

const CardNicknameEditPage = () => {
  const cardNicknameFormId = "cardNicknameForm";
  const dispatch = useCardListDispatch();
  const { slug: cardId } = useRouter();
  const push = useRouterPush();

  const handleDelete = () => {
    if (!cardId) return;
    dispatch(CARD_LIST_ACTION.DELETE_CARD(cardId));
    push(ROUTE_ACTION.PUSH(ROUTE.CARD));
  };

  if (!cardId) return null;

  return (
    <CardNicknameEditPageContainer>
      <section>
        <PreviewCompleteCard title="카드 닉네임 변경" cardId={cardId} />
        <CardNicknameEdit formId={cardNicknameFormId} cardId={cardId} />
      </section>
      <TextButtonContainer>
        <TextButton
          type="button"
          text="삭제"
          color="red"
          onClick={handleDelete}
        />
        <TextButton form={cardNicknameFormId} type="submit" text="확인" />
      </TextButtonContainer>
    </CardNicknameEditPageContainer>
  );
};

export default CardNicknameEditPage;

const TextButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardNicknameEditPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
`;
