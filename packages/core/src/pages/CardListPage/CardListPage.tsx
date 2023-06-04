import { Header } from "@/components/Header";
import { useCardList } from "@/store";
import { EmptyCardButton } from "@/components";
import styled from "@emotion/styled";
import { CardItem } from "./components";
import useRouterPush from "@/store/hooks/useRouterPush";
import { ROUTE_ACTION } from "@/store/CardListAction";
import { ROUTE } from "@/constants/route";

const CardListPage = () => {
  const cardList = useCardList();
  const push = useRouterPush();

  const handleClick = () => {
    push(ROUTE_ACTION.PUSH(ROUTE.CARD_CREATE));
  };
  return (
    <>
      <Header title="보유 카드" />
      <CardListContainer>
        <li>
          <EmptyCardButton onClick={handleClick} />
        </li>
        {cardList.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </CardListContainer>
    </>
  );
};

export default CardListPage;

const CardListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  margin: 0;
  padding: 20px 0;
  li {
    margin: 10px 0;
  }
`;
