import React, { useEffect, useState } from 'react';
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
  Root,
} from './styled';
import Footer from 'systems/Footer';
import useGoods from 'hooks/useGoods';
import { useLocation } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import useGetImage from 'hooks/useGetImage';
import MobileHeader from 'systems/Header/Mobile';
import Image from 'components/Image';

const MobileGoodsDetails = () => {
  const location = useLocation();
  const uuid = location.pathname.split('/')[2];
  const { allGoodsList } = useGoods();
  const { image } = useGetImage({ uuid });
  const [goods, setGoods] = useState<any>();

  useEffect(() => {
    setGoods(allGoodsList.filter((value) => value.uuid === uuid)[0]);
  }, [JSON.stringify(allGoodsList)]);

  return (
    <Root>
      <MobileHeader />
      <Container>
        <ContentTitleTypo level={4}>응모 상품 상세</ContentTitleTypo>
        <ContentContainer>
          <Image imgSrc={image} size='small' />
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
      <Footer />
    </Root>
  );
};

export default MobileGoodsDetails;
