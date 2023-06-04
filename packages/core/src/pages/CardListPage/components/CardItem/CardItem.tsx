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
      <button onClick={handleClick}>
        <CompanyCard card={card} size="small" />
      </button>
      <CardItemBottom>
        <Nickname>{card.cardNickname}</Nickname>
        <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
      </CardItemBottom>
    </StyledCardItem>
  );
};

const CardItemBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.red};
  position: absolute;
  right: 4px;
  top: 16px;
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
