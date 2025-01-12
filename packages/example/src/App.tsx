import { PaymentModal, Payment } from "@dongminahn/react-payments";

function App() {
  const { isModalOpen, onClose, onOpen } = PaymentModal.useModal();
  return (
    <>
      <button onClick={onOpen}>결제하기</button>
      {isModalOpen && (
        <PaymentModal.Modal isOpen={isModalOpen} onClose={onClose}>
          <Payment
            price={2000}
            onSuccess={({ massage }) => {
              alert(massage);
              onClose();
            }}
          />
        </PaymentModal.Modal>
      )}
    </>
  );
}

export default App;
