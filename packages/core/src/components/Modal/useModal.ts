import { useCallback, useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const onClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const onOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return {
    isModalOpen,
    onClose,
    onOpen,
  };
};
