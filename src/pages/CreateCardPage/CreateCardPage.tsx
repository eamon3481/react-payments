import React from 'react';
import { CardFieldProvider } from './components/CardFieldContext';
import { CardFields } from './components/CardFields';
import { PreviewCard } from './components/PreviewCard';
import { Header } from '@/components/Header';
import { RightArrowIcon } from '@/assets';
import { useNavigate } from 'react-router-dom';

const CreateCardPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
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
