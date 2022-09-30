import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  ContentButton,
  ContentContainer,
  Root,
  TitleTypo,
} from './styled';

const ManageMain = () => {
  const navigate = useNavigate();

  const onClickButton = (type: 'MEMBER' | 'GOODS') => () => {
    if (type === 'MEMBER') {
      navigate('/manage/member');
      return;
    }
    navigate('/manage/goods');
  };

  return (
    <Root>
      <Container>
        <TitleTypo level={2}>관리자 메인</TitleTypo>
        <ContentContainer>
          <ContentButton onClick={onClickButton('MEMBER')}>
            동아리원 관리
          </ContentButton>
          <ContentButton onClick={onClickButton('GOODS')}>
            상품 관리
          </ContentButton>
        </ContentContainer>
      </Container>
    </Root>
  );
};
export default ManageMain;
