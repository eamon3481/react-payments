import { CompanyCard } from "@/components/Card";
import styled from "@emotion/styled";
import React, { useCallback, useMemo, useState } from "react";
import { useCardFieldContext } from "../CardFieldContext";
import PaymentModal from "@/components/Modal";
import CardCompanySelectFormModal from "../CardCompanySelectModal/CardCompanySelectModal";
import { useModal } from "@/components/Modal/useModal";

const PreviewCard = () => {
  const data = useCardFieldContext();
  const { isModalOpen, onClose, onOpen } = PaymentModal.useModal();

  const {
    cardNumber,
    expirationMonth,
    expirationYear,
    ownerName,
    cardCompany,
  } = data || {};

  const card = useMemo(
    () => ({
      cardNumber,
      expirationMonth,
      expirationYear,
      ownerName,
      cardCompany,
    }),
    [cardNumber, expirationMonth, expirationYear, ownerName, cardCompany]
  );

  return (
    <PreviewCardContainer onClick={onOpen}>
      <CompanyCard size="big" card={card} />
      {isModalOpen && (
        <PaymentModal.BottomModal isOpen={isModalOpen} onClose={onClose}>
          <CardCompanySelectFormModal selectedCardCompany={cardCompany} />
        </PaymentModal.BottomModal>
      )}
    </PreviewCardContainer>
  );
};

export default React.memo(PreviewCard);

const PreviewCardContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  margin-bottom: 20px;
`;
