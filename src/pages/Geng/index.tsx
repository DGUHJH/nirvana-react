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

const Geng = () => {
  const { gengList, goodsList } = useGoods();

  if (isMobile) {
    return <MobileGoods />;
  }
  return (
    <Root>
      <Header />
      <Container>
        <BannerImg />
        <CardTitleTypo>젠지 선수단 친필 사인 리스트(응모)</CardTitleTypo>
        <CardContainer>
          {gengList.map((goods, index) => {
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

export default Geng;
