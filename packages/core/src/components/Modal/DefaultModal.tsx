import styled from "@emotion/styled";
import React, { PropsWithChildren, cloneElement, useState } from "react";
import { keyframes } from "@emotion/react";
import Modal from "./Modal";

export interface ModalChildrenProps {
  onClose: () => void;
}

const DefaultModal = ({
  children,
  isOpen,
  onClose,
}: PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>) => {
  const [show, setShow] = useState(isOpen);

  const handelClickBackground = () => {
    setShow(false);
  };
  const handleTransitionEnd = () => {
    if (!show) onClose();
  };

  return (
    <Modal
      position="center"
      isOpen={isOpen}
      backgroundClick={handelClickBackground}
    >
      <DefaultModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
        show={show}
        onAnimationEnd={handleTransitionEnd}
      >
        {cloneElement(children as React.ReactElement, {
          onClose: handelClickBackground,
        })}
      </DefaultModalContainer>
    </Modal>
  );
};

export default DefaultModal;

const DefaultModalContainer = styled.div<{
  show: boolean;
}>`
  width: 600px;
  min-height: 700px;
  display: flex;

  background-color: white;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  border-radius: 10px;
  position: absolute;

  animation-name: ${({ show }) => (show ? openAnimation : closeAnimation)};
  padding: 34px;
`;

const openAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
    `;

const closeAnimation = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
