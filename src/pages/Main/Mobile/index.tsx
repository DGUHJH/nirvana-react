import React, { useEffect, useState } from 'react';
import MobileHeader from 'systems/Header/Mobile';
import ItemCard from 'systems/ItemCard';
import { Container, ContentContainer, Root } from './styled';

const MobileMain = () => {
  return (
    <Root>
      <Container>
        <MobileHeader />
        <ContentContainer></ContentContainer>
      </Container>
    </Root>
  );
};
export default MobileMain;
