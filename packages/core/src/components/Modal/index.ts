import { default as BottomModal } from "./BottomModal";
import { default as DefaultModal } from "./DefaultModal";
import { useModal } from "./useModal";

const PaymentModal = {
  BottomModal: BottomModal,
  Modal: DefaultModal,
  useModal: useModal,
};

export default PaymentModal;
