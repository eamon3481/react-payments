import React from "react";

import { Header } from "@/components";
import { RightArrowIcon } from "@/assets";
import { CardFields, PreviewCard, CardFieldProvider } from "./components";
import useRouterPush from "@/store/hooks/useRouterPush";
import { ROUTE_ACTION } from "@/store/CardListAction";
import { ROUTE } from "@/constants/route";

const CreateCardPage = () => {
  const push = useRouterPush();
  const handleClick = () => {
    push(ROUTE_ACTION.PUSH(ROUTE.CARD));
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
