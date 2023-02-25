import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

type FlexPosition = 'top' | 'bottom' | 'left' | 'right' | 'center';
interface Type {
  children: ReactNode;
  selector?: string;
  isOpen: boolean;
  position: FlexPosition;
  backgroundClick?: () => void;
}

const flexPosition = {
  top: css`
    align-items: flex-start;
    justify-content: center;
  `,
  bottom: css`
    align-items: flex-end;
    justify-content: center;
  `,
  left: css`
    align-items: center;
    justify-content: flex-start;
  `,
  right: css`
    align-items: center;
    justify-content: flex-end;
  `,
  center: css`
    align-items: center;
    justify-content: center;
  `,
};
// Modal : Portal 로 구현했으나 굳이 portal로 구현할 필요 없다는 생각이 들어서 제거
const Modal = ({
  children,
  isOpen,
  selector = 'modal',
  position,
  backgroundClick,
}: Type) => {
  if (!isOpen) return null;

  return (
    <ModalBackground position={position} onClick={backgroundClick}>
      {children}
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div<{
  position: FlexPosition;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  ${({ position }) => flexPosition[position]}
`;