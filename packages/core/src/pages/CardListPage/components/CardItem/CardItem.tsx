import { CompanyCard } from "@/components";
import { ROUTE } from "@/constants/route";
import { CARD_LIST_ACTION, useCardListDispatch } from "@/store";
import { ROUTE_ACTION } from "@/store/CardListAction";
import useRouterPush from "@/store/hooks/useRouterPush";
import { CardInfo } from "@/types";
import styled from "@emotion/styled";
import React from "react";

const CardItem = ({ card }: { card: CardInfo }) => {
  const dispatch = useCardListDispatch();
  const push = useRouterPush();

  const handleClick = () => {
    push(ROUTE_ACTION.PUSH_CARD_ID(ROUTE.CARD_NICKNAME_EDIT, card.id));
  };

  const handleDelete = () => {
    dispatch(CARD_LIST_ACTION.DELETE_CARD(card.id));
  };

  return (
    <StyledCardItem>
      <CompanyCard card={card} size="small" />
      <CardItemBottom>
        <Nickname>{card.cardNickname}</Nickname>
      </CardItemBottom>
      <CardItemButtons>
        <NickNameEditButton onClick={handleClick}>
          닉네임 변경
        </NickNameEditButton>
        <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
      </CardItemButtons>
    </StyledCardItem>
  );
};

const CardItemButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CardItemBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.red};
`;
const NickNameEditButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
`;

const Nickname = styled.p`
  font-weight: 700;
  text-align: center;
  width: 100%;
  padding: 0 40px;
  margin-top: 16px;
`;

const StyledCardItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default React.memo(CardItem, (prevProps, nextProps) => {
  return prevProps.card.id === nextProps.card.id;
});
