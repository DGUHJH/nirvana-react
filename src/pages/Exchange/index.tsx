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
import { isMobile } from 'react-device-detect';
import MobileExchange from './Mobile';

const Exchange = () => {
  const { enterGoodsList, goodsList } = useGoods();

  if (isMobile) {
    return <MobileExchange />;
  }

  return (
    <Root>
      <Header />
      <Container>
        <BannerImg />
        <CardTitleTypo>교환 상품 리스트</CardTitleTypo>
        <CardContainer>
          {goodsList.map((goods, index) => {
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

export default Exchange;
