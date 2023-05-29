import { Header } from "@/components/Header";
import { useCardList } from "@/store";
import { EmptyCardButton } from "@/components";
import styled from "@emotion/styled";
import { CardItem } from "./components";

const CardListPage = () => {
  const cardList = useCardList();

  const handleClick = () => {
    //
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

  margin: 0;
  padding: 20px 0;
  li {
    margin: 10px 0;
  }
`;
