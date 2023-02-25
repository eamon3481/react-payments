import React from 'react';
import { useCardFieldContext } from '../CardFieldContext/CardFieldContext';
import { CardNumberField } from './CardNumberField';
import { CardOwnerNameField } from './CardOwnerNameField';
import { CardCVCNumberField } from './CardCVCNumberField';
import { CardPasswordField } from './CardPasswordField';
import { CardExpirationDateField } from './CardExpirationDateField';
import { CARD_COMPANIES } from '@/constants';

const CardFields = () => {
  const data = useCardFieldContext();

  if (data === null) return null;

  const {
    cardNumber,
    cardPassword,
    cvc,
    expirationMonth,
    expirationYear,
    ownerName,
    cardCompany,
  } = data;

  const fontColor =
    cardCompany !== null ? CARD_COMPANIES[cardCompany].color : 'gray1';
  return (
    <form>
      <CardNumberField cardNumber={cardNumber} fontColor={fontColor} />
      <CardExpirationDateField
        expirationMonth={expirationMonth}
        expirationYear={expirationYear}
        fontColor={fontColor}
      />
      <CardOwnerNameField ownerName={ownerName} fontColor={fontColor} />
      <CardCVCNumberField cvc={cvc} fontColor={fontColor} />
      <CardPasswordField cardPassword={cardPassword} fontColor={fontColor} />
    </form>
  );
};

export default CardFields;
