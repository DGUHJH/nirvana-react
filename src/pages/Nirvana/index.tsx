import React, { useState } from 'react';
import Header from 'systems/Header';
import {
  BannerImg,
  CardContainer,
  CardTitleTypo,
  Container,
  FooterWrapper,
  Root,
} from './styled';
import main_banner from 'assets/images/main_banner.png';
import ItemCard from 'systems/ItemCard';
import Footer from 'systems/Footer';
import useGoods from 'hooks/useGoods';
import MobileGoods from './Mobile';
import { isMobile } from 'react-device-detect';

const Nirvana = () => {
  const { nirvanaList, goodsList } = useGoods();

  if (isMobile) {
    return <MobileGoods />;
  }
  return (
    <Root>
      <Header />
      <Container>
        <BannerImg src={main_banner} />
        <CardTitleTypo>니르바나 굿즈 리스트 (응모)</CardTitleTypo>
        <CardContainer>
          {nirvanaList.map((goods, index) => {
            return <ItemCard {...goods} key={`goods_${index}`} />;
          })}
        </CardContainer>
      </Container>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Root>
  );
};

export default Nirvana;
