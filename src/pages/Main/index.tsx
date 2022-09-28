import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Header from 'systems/Header';
import ItemCard from 'systems/ItemCard';
import MobileMain from './Mobile';
import { Container, ContentContainer, Root } from './styled';

const Main = () => {
  if (isMobile) {
    return <MobileMain />;
  }

  return (
    <Root>
      <Container>
        <Header />
      </Container>
    </Root>
  );
};
export default Main;
