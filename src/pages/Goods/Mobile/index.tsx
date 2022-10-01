import React, { useState } from 'react';
import Header from 'systems/Header';
import {
  BannerImg,
  CardContainer,
  CardTitleTypo,
  Container,
  Root,
} from './styled';
import main_banner from 'assets/images/main_banner.png';
import ItemCard from 'systems/ItemCard';
import Footer from 'systems/Footer';
import useGoods from 'hooks/useGoods';
import MobileHeader from 'systems/Header/Mobile';

const MobileGoods = () => {
  const { enterGoodsList, goodsList } = useGoods();
  return (
    <Root>
      <MobileHeader />
      <Container>
        <BannerImg src={main_banner} />
        <CardTitleTypo level={4}>응모 상품 리스트</CardTitleTypo>
        <CardContainer>
          {enterGoodsList.map((goods, index) => {
            return <ItemCard {...goods} key={`goods_${index}`} />;
          })}
        </CardContainer>
      </Container>
      <Footer />
    </Root>
  );
};

export default MobileGoods;
