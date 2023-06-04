<p align="middle" >
  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/0fefce79602043a9b3281ee1dd8f4be6" width="400">
</p>
<h2 align="middle">Payment</h2>
<p align="middle">React 모바일 페이먼츠 애플리케이션</p>
</p>

## 🚀 Getting Started

```
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
```

## 📦 Installation

```bash
yarn add @ahndongmin/react-payment

npm install @ahndongmin/react-payment
```

## 📚 Dependencies

- React
- Typescript
- Emotion
- Storybook

## Component

### Payment

| props     | type     | description           |
| --------- | -------- | --------------------- |
| price     | number   | 결제 금액             |
| onSuccess | function | 결제 성공시 콜백 함수 |
| onFail    | function | 결제 실패시 콜백 함수 |

### PaymentModal.Modal

| props   | type     | description         |
| ------- | -------- | ------------------- |
| isOpen  | boolean  | 모달 오픈 여부      |
| onClose | function | 모달 닫기 콜백 함수 |

### PaymentModal.useModal

| return      | type     | description         |
| ----------- | -------- | ------------------- |
| isModalOpen | boolean  | 모달 오픈 여부      |
| onClose     | function | 모달 닫기 콜백 함수 |
| onOpen      | function | 모달 오픈 콜백 함수 |

- [초기 설계](https://ahddongmin.notion.site/3d6cce1c1b464e86b8246ddc7549623c)

| 컴포넌트 명      | props                                                          |
| ---------------- | -------------------------------------------------------------- |
| Card             | cardName, cardNumber, userName, expirationMonth,expirationYear |
| Header           | title, onLeftIconClick, LeftIcon                               |
| Input            | placeholder, onChange , value , id , width, textAlign          |
| CardCategoryITem | name, color                                                    |
| Label            | textLength, limit , children , title                           |
| BottomModal      | 바텀 모달 컴포넌트                                             |
| TextButton       | text , onClick                                                 |
| CardAddButton    | onClick                                                        |
| LineInput        | value , onChange                                               |

---

```

```
