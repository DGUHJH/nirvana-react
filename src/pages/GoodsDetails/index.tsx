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
import { useLocation } from 'react-router-dom';
import useGetImage from 'hooks/useGetImage';
import { isMobile } from 'react-device-detect';
import MobileGoodsDetails from './Mobile';
import Image from 'components/Image';
import { commonAxios } from 'api/commonAxios';

const GoodsDetails = () => {
  const location = useLocation();
  const uuid = location.pathname.split('/')[2];
  const userUuid = localStorage.getItem('uuid');
  const { image } = useGetImage({ uuid });
  const [goods, setGoods] = useState<any>();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const postGoodsHistory = () => {
    commonAxios({
      url: 'post_goods_history.php',
      method: 'POST',
      params: { goods_uuid: uuid, user_uuid: userUuid },
    }).then((res) => {
      window.location.reload();
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    commonAxios({
      url: 'get_goods_details.php',
      method: 'GET',
      params: { goods_uuid: uuid, user_uuid: userUuid },
    }).then((res) => {
      setGoods(res.data.data);
      setIsChecked(res.data.data.check);
    });
  }, []);

  if (isMobile) {
    return <MobileGoodsDetails />;
  }

  return (
    <Root>
      <Header />
      <Container>
        <ContentTitleTypo>
          {goods?.is_enter === '0' ? '교환' : '응모'} 상품 상세
        </ContentTitleTypo>
        <ContentContainer>
          <Image imgSrc={image} />
          <ContentInfoContainer>
            <ContentInfoTitleTypo>{goods?.name}</ContentInfoTitleTypo>
            <ContentInfoPriceContainer>
              <ContentInfoPriceNumberTypo>
                {goods?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </ContentInfoPriceNumberTypo>
              <ContentInfoPriceTypo>
                니르{' '}
                {goods?.is_enter === '0' &&
                  `(잔여 수량 : ${goods?.number - goods?.history_number} 개)`}
              </ContentInfoPriceTypo>
            </ContentInfoPriceContainer>
            {(goods?.is_enter !== '0' ||
              (goods?.is_enter === '0' &&
                goods?.number - goods?.history_number > 0)) &&
            !isChecked ? (
              <ContentInfoButton
                onClick={() => {
                  if (
                    window.confirm(
                      `정말로 ${
                        goods?.is_enter === '0' ? '교환' : '응모'
                      }하시겠습니까?`
                    )
                  ) {
                    postGoodsHistory();
                    window.alert(
                      `${
                        goods?.is_enter === '0' ? '교환' : '응모'
                      }가 완료되었습니다.`
                    );
                  }
                }}
              >
                {goods?.is_enter === '0' ? '교환' : '응모'}하기
              </ContentInfoButton>
            ) : (
              <ContentInfoButton disabled={true}>
                {goods?.is_enter === '0' ? '교환' : '응모'}완료
              </ContentInfoButton>
            )}
          </ContentInfoContainer>
        </ContentContainer>
      </Container>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Root>
  );
};

export default GoodsDetails;
