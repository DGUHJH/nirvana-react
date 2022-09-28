import React, { useState } from 'react';
import Header from 'systems/Header';
import { BannerImg, CardContainer, Container, Root } from './styled';
import main_banner from 'assets/images/main_banner.png';
import goods_list from 'assets/json/goods.json';
import ItemCard from 'systems/ItemCard';
import Footer from 'systems/Footer';

const ExchangeDetails = () => {
  const [goodsList, setGoodsList] = useState<any[]>(goods_list.data);
  return (
    <Root>
      <Header />
      <Container>
        <BannerImg src={main_banner} />
        <CardContainer>
          {goodsList.map((goods, index) => {
            return <ItemCard {...goods} key={`goods_${index}`} />;
          })}
        </CardContainer>
      </Container>
      <Footer />
    </Root>
  );
};

export default ExchangeDetails;
