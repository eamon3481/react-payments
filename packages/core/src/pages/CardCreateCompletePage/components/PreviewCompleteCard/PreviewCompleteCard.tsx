import React from "react";
import { CompanyCard } from "@/components";
import useCard from "@/store/hooks/useCard";
import styled from "@emotion/styled";

type PreviewCompleteCardProps = {
  title: string;
  cardId: number;
};
const PreviewCompleteCard = ({ title, cardId }: PreviewCompleteCardProps) => {
  const card = useCard(cardId);

  return (
    <PreviewSection>
      <PreviewTitle>{title}</PreviewTitle>
      <CompanyCard card={card} size="big" />
    </PreviewSection>
  );
};

export default PreviewCompleteCard;

const PreviewSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PreviewTitle = styled.h1`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  margin-top: 130px;
  margin-bottom: 24px;
  text-align: center;
`;
