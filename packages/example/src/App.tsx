import { Payment } from "@dongminahn/react-payments";

function App() {
  return (
    <Payment
      price={2000}
      onSuccess={() => {
        alert("결제 성공");
      }}
    />
  );
}

export default App;
