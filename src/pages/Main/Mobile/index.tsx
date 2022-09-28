import React, { useEffect, useState } from 'react';
import Header from 'systems/Header';
import ItemCard from 'systems/ItemCard';
import { Container, ContentContainer, Root } from './styled';

const MobileMain = () => {
  return (
    <Root>
      <Container>
        <Header />
        <ContentContainer>
          <ItemCard title='재형이랑 협곡 데이트' description='500 니르' />
          <ItemCard title='메르세데스 벤츠' description='50,000 니르' />
          <ItemCard title='피카츄' description='1,000 니르' />
        </ContentContainer>
      </Container>
    </Root>
  );
};
export default MobileMain;
