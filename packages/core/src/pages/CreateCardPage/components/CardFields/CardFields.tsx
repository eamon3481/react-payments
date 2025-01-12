import { useCardFieldContext } from "../CardFieldContext/CardFieldContext";
import { CardNumberField } from "./CardNumberField";
import { CardOwnerNameField } from "./CardOwnerNameField";
import { CardCVCNumberField } from "./CardCVCNumberField";
import { CardPasswordField } from "./CardPasswordField";
import { CardExpirationDateField } from "./CardExpirationDateField";
import { CARD_COMPANIES } from "@/constants";
import styled from "@emotion/styled";
import { TextButton } from "@/components";
import { CardField } from "@/types";
import { CARD_LIST_ACTION, useCardListDispatch } from "@/store";
import { isMonth } from "@/utils";
import useRouterPush from "@/store/hooks/useRouterPush";
import { ROUTE_ACTION } from "@/store/CardListAction";
import { ROUTE } from "@/constants/route";

const CardFields = () => {
  const data = useCardFieldContext();
  const dispatch = useCardListDispatch();
  const push = useRouterPush();

  if (data === null) return null;

  const {
    cardNumber,
    ownerName,
    cvc,
    cardPassword,
    expirationMonth,
    expirationYear,
    cardCompany,
  } = data;

  const fontColor =
    cardCompany !== null ? CARD_COMPANIES[cardCompany].color : "gray3";

  const handleNextButtonClick = () => {
    const uniqueId = Date.now();
    dispatch(CARD_LIST_ACTION.APPEND_NEW_CARD(uniqueId, data));
    push(ROUTE_ACTION.PUSH_CARD_ID(ROUTE.CARD_CREATE_COMPLETE, uniqueId));
  };
  return (
    <>
      <CardFieldForm>
        <CardNumberField cardNumber={cardNumber} fontColor={fontColor} />
        <CardExpirationDateField
          expirationMonth={expirationMonth}
          expirationYear={expirationYear}
          fontColor={fontColor}
        />
        <CardOwnerNameField ownerName={ownerName} fontColor={fontColor} />
        <CardCVCNumberField cvc={cvc} fontColor={fontColor} />
        <CardPasswordField cardPassword={cardPassword} fontColor={fontColor} />
      </CardFieldForm>
      <TextButtonContainer>
        <TextButton
          text="다음"
          disabled={isDisabled(data)}
          type="button"
          onClick={handleNextButtonClick}
        />
      </TextButtonContainer>
    </>
  );
};

export default CardFields;

const CardFieldForm = styled.form`
  width: 100%;
  flex: 1;
  label {
    display: block;
    margin-bottom: 12px;
  }
`;

const TextButtonContainer = styled.div`
  width: 100%;
  text-align: right;
`;

const isDisabled = (field: CardField) => {
  const {
    cardNumber,
    cardCompany,
    cvc,
    cardPassword,
    expirationMonth,
    expirationYear,
  } = field;
  if (cardNumber.length < 16) return true;
  if (cvc.length < 3) return true;
  if (cardPassword.length < 2) return true;
  if (cardCompany === null) return true;
  if (expirationMonth.length < 2) return true;
  if (!isMonth(+expirationMonth)) return true;
  if (expirationYear.length < 2) return true;
  return false;
};
