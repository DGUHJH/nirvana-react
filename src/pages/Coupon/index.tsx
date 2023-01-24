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
import ItemCard from 'systems/ItemCard';
import Footer from 'systems/Footer';
import useGoods from 'hooks/useGoods';
import MobileGoods from './Mobile';
import { isMobile } from 'react-device-detect';

const CouponPage = () => {
  const { couponList } = useGoods();

  if (isMobile) {
    return <MobileGoods />;
  }
  return (
    <Root>
      <Header />
      <Container>
        <BannerImg />
        <CardTitleTypo>상품권 상품 리스트 (응모)</CardTitleTypo>
        <CardContainer>
          {couponList.map((goods, index) => {
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

export default CouponPage;
