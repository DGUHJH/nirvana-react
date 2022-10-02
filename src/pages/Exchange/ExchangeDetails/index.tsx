import React, { useEffect, useState } from 'react';
import Header from 'systems/Header';
import {
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
  FooterWrapper,
  Root,
} from './styled';
import Footer from 'systems/Footer';
import useGoods from 'hooks/useGoods';
import { useLocation } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import useGetImage from 'hooks/useGetImage';
import { isMobile } from 'react-device-detect';
import MobileEnterDetails from './Mobile';
import Image from 'components/Image';

const ExchangeDetails = () => {
  const location = useLocation();
  const uuid = location.pathname.split('/')[2];
  const { allGoodsList } = useGoods();
  const { image } = useGetImage({ uuid });
  const [goods, setGoods] = useState<any>();

  useEffect(() => {
    setGoods(allGoodsList.filter((value) => value.uuid === uuid)[0]);
  }, [JSON.stringify(allGoodsList)]);

  if (isMobile) {
    return <MobileEnterDetails />;
  }

  return (
    <Root>
      <Header />
      <Container>
        <ContentTitleTypo>교환 상품 상세</ContentTitleTypo>
        <ContentContainer>
          <Image imgSrc={image} />
          <ContentInfoContainer>
            <ContentInfoTitleTypo>{goods?.name}</ContentInfoTitleTypo>
            <ContentInfoPriceContainer>
              <ContentInfoPriceNumberTypo>
                {goods?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </ContentInfoPriceNumberTypo>
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
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Root>
  );
};

export default ExchangeDetails;
