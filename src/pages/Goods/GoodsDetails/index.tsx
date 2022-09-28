import React, { useState } from 'react';
import Header from 'systems/Header';
import {
  BannerImg,
  CardContainer,
  Container,
  ContentContainer,
  ContentImg,
  ContentInfoButton,
  ContentInfoContainer,
  ContentInfoPriceContainer,
  ContentInfoPriceNumberTypo,
  ContentInfoPriceTypo,
  ContentInfoTitleTypo,
  ContentTitleTypo,
  Root,
} from './styled';

import goods_list from 'assets/json/goods.json';
import Footer from 'systems/Footer';
import logo_img from 'assets/images/logo.png';

const GoodsDetails = () => {
  const [goodsList, setGoodsList] = useState<any[]>(goods_list.data);
  return (
    <Root>
      <Header />
      <Container>
        <ContentTitleTypo>교환 상품 상세</ContentTitleTypo>
        <ContentContainer>
          <ContentImg src={logo_img} />
          <ContentInfoContainer>
            <ContentInfoTitleTypo>
              앱코 HACKER K8200 카일광축 완전방수 크리스탈 투톤 게이밍 키보드
            </ContentInfoTitleTypo>
            <ContentInfoPriceContainer>
              <ContentInfoPriceNumberTypo>1,000</ContentInfoPriceNumberTypo>
              <ContentInfoPriceTypo>니르</ContentInfoPriceTypo>
            </ContentInfoPriceContainer>
            <ContentInfoButton
              onClick={() => {
                if (window.confirm('정말로 응모하시겠습니까?')) {
                  window.alert('응모가 완료되었습니다.');
                }
              }}
            >
              응모하기
            </ContentInfoButton>
            <ContentInfoButton disabled={true}>응모완료</ContentInfoButton>
          </ContentInfoContainer>
        </ContentContainer>
      </Container>
      <Footer />
    </Root>
  );
};

export default GoodsDetails;
