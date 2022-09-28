import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Header from 'systems/Header';
import ItemCard from 'systems/ItemCard';
import MobileMain from './Mobile';
import { BannerImg, Container, ContentContainer, Root } from './styled';
import main_banner from 'assets/images/main_banner.png';

const Main = () => {
  if (isMobile) {
    return <MobileMain />;
  }

  return (
    <Root>
      <Header />
      <Container>
        <BannerImg src={main_banner} />
      </Container>
    </Root>
  );
};
export default Main;
