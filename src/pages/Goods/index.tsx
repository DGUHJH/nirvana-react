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

const Goods = () => {
  const { enterGoodsList, goodsList } = useGoods();

  if (isMobile) {
    return <MobileGoods />;
  }
  return (
    <Root>
      <Header />
      <Container>
        <BannerImg src={main_banner} />
        <CardTitleTypo>응모 상품 리스트</CardTitleTypo>
        <CardContainer>
          {enterGoodsList.map((goods, index) => {
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

export default Goods;
