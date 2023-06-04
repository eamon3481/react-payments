import React from "react";

import { Header } from "@/components";
import { RightArrowIcon } from "@/assets";
import { CardFields, PreviewCard, CardFieldProvider } from "./components";

const CreateCardPage = () => {
  const handleClick = () => {
    //
  };
  return (
    <>
      <Header
        title="카드 추가"
        leftIcon={<RightArrowIcon />}
        onIconClick={handleClick}
      />
      <CardFieldProvider>
        <PreviewCard />
        <CardFields />
      </CardFieldProvider>
    </>
  );
};

export default CreateCardPage;
