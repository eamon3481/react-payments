<p align="middle" >
  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/0fefce79602043a9b3281ee1dd8f4be6" width="400">
</p>
<h2 align="middle">페이먼츠</h2>
<p align="middle">React 모바일 페이먼츠 애플리케이션</p>
</p>

## 🚀 Getting Started

> `Component-Driven Development` 에 따라 UI를 구성하고 재사용 가능한 `Component`를 작성합니다.

✔️ `모바일 타겟`의 웹 앱을 구현하며 사용하기 `편리한 모바일 UI/UX`에 대해 고민해봅니다.  
✔️ 다른 라이브러리나 프레임워크 없이 오로지 `React`만으로 상태를 관리하고 컴포넌트를 설계합니다.  
✔️ `재사용 가능한 Component`를 직접 작성하고 사용합니다.  
✔️ `Controlled` & `Uncontrolled Components`에 입각하여 `Form`을 핸들링합니다.

---

## 컴포넌트 설계 (초기 설계)

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

## 🎯 Requirements

### Step1 카드 추가 페이지

- [x] `<`(뒤로가기) 버튼 클릭 시, 카드 목록 페이지로 이동한다.

- [x] 카드 번호를 입력 받을 수 있다.
  - [x] 카드 번호는 숫자만 입력가능하다.
  - [x] 카드 번호 4자리마다 -가 삽입된다.
  - [x] 카드 번호는 실시간으로 카드 UI에 반영된다.
  - [x] 카드 번호는 앞 8자리만 숫자로 보여지고, 나머지 숫자는 \*로 보여진다.
- [x] 만료일을 입력 받을 수 있다.

  - [x] MM / YY 로 placeholder를 적용한다.
  - [x] 월, 년 사이에 자동으로 /가 삽입된다.
  - [x] 만료일은 실시간으로 카드 UI에 반영된다.
  - [x] 월은 1이상 12이하 숫자여야 한다.

- [x] 보안코드를 입력 받을 수 있다.

  - [x] 보안코드는 \*으로 보여진다.
  - [x] 보안코드는 숫자만 입력가능하다.

- [x] 카드 비밀번호의 앞 2자리를 입력 받을 수 있다.

  - [x] 카드 비밀번호는 각 폼마다 한자리 숫자만 입력가능하다.
  - [ ] 카드 번호 입력 시, \*으로 보여진다.

- [x] 카드 소유자 이름을 입력 받을 수 있다.

  - [x] 이름은 30자리까지 입력할 수 있다.
  - [x] 이름 입력 폼 위에, 현재 입력 자릿수와 최대 입력 자릿수를 실시간으로 보여준다.
  - [ ] 카드 추가 완료시 카드 등록 완료 페이지로 이동한다.

### 추가 구현사항

- [ ] 카드 클릭시, 카드 종류 선택 모달창이 나타난다.
- [ ] 카드 종류를 바꿀 시 모달창이 닫히고, 카드 이미지가 변경된다.
- [ ] 카드에 해당하는 색에 따라서 변경한다.
- [ ] 확인 버튼을 누르면, 카드 목록 페이지로 이동한다.

### Step2 카드 목록 페이지

- [ ] Storybook 상호 작용 테스트
- [ ] Controlled & Uncontrolled Components에 입각하여 Form 핸들링
- [ ] Context API를 활용해 전역 상태 관리 및 계층 재구성

- [ ] 카드 추가 확인
  - [ ] 이전 폼에서 입력된 카드를 보여준다.
  - [ ] 카드 별칭을 입력할 수 있다.
  - [ ] placeholder는 카드 별칭 (선택)이다.
  - [ ] 빈 입력값인 경우, 카드사 이름이 별칭으로 저장된다.
  - [ ] 최대 길이는 10자리이다.
  - [ ] 확인 버튼을 누르면, 카드 목록 페이지로 이동한다.
- [ ] 카드 목록
  - [ ] 카드 목록을 조회할 수 있다.
  - [ ] 카드 목록은 최신순(내림차순)으로 정렬된다.
  - [ ] 목록 최상단에 +을 누르면 카드 추가 페이지로 이동한다.
  - [ ] 카드를 클릭하면, 카드 별칭 수정(카드 추가 완료 페이지)로 이동한다.
  - [ ] 카드를 삭제할 수 있다.
