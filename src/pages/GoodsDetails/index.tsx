import React, { useEffect, useRef, useState } from 'react';
import Header from 'systems/Header';
import {
  Container,
  ContentContainer,
  ContentDescriptionTypo,
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
  SwiperLeftArrow,
  SwiperLeftArrowWrapper,
  SwiperRightArrow,
  SwiperRightArrowWrapper,
} from './styled';
import Footer from 'systems/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import useGetImage from 'hooks/useGetImage';
import { isMobile } from 'react-device-detect';
import MobileGoodsDetails from './Mobile';
import Image from 'components/Image';
import { commonAxios } from 'api/commonAxios';
import { Carousel } from 'antd';
import bag_1 from 'assets/images/bag_1.png';
import bag_2 from 'assets/images/bag_2.png';
import bag_3 from 'assets/images/bag_3.png';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, {
  Autoplay,
  Controller,
  FreeMode,
  Navigation,
  Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const GoodsDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const goodsUuid = location.pathname.split('/')[2];
  const userUuid = localStorage.getItem('uuid');
  const { image } = useGetImage({ uuid: goodsUuid });
  const [goods, setGoods] = useState<any>();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const leftRef = useRef<any>();
  const rightRef = useRef<any>();

  const postGoodsHistory = () => {
    commonAxios({
      url: 'post_goods_history.php',
      method: 'POST',
      params: { goods_uuid: goodsUuid, user_uuid: userUuid },
    }).then((res) => {
      if (res.data.type === 'success') {
        window.alert(
          `${goods?.is_enter === '0' ? '교환' : '응모'}가 완료되었습니다.`
        );
        window.location.reload();
      } else {
        window.alert('마일리지가 부족합니다.');
      }
    });
  };

  useEffect(() => {
    const uuid = localStorage.getItem('uuid');
    if (!uuid) {
      alert('로그인이 필요한 페이지입니다.');
      navigate('/login');
    }

    window.scrollTo(0, 0);
    commonAxios({
      url: 'get_goods_details.php',
      method: 'GET',
      params: { goods_uuid: goodsUuid, user_uuid: userUuid },
    }).then((res) => {
      setGoods(res.data.data);
      setIsChecked(res.data.data.check);
    });
  }, []);

  const onBeforeInit = (Swiper: any): void => {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const navigation = Swiper.params.navigation;
      navigation.prevEl = leftRef.current;
      navigation.nextEl = rightRef.current;
    }
  };

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
          {goodsUuid === '22' ? (
            <Swiper
              onBeforeInit={onBeforeInit}
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className='mySwiper'
              style={{ width: '640px', height: '640px' }}
            >
              <SwiperSlide>
                <img src={bag_1} style={{ width: '640px', height: '640px' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bag_2} style={{ width: '640px', height: '640px' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bag_3} style={{ width: '640px', height: '640px' }} />
              </SwiperSlide>
              <SwiperLeftArrowWrapper ref={leftRef}>
                <SwiperLeftArrow />
              </SwiperLeftArrowWrapper>
              <SwiperRightArrowWrapper ref={rightRef}>
                <SwiperRightArrow />
              </SwiperRightArrowWrapper>
            </Swiper>
          ) : (
            <Image imgSrc={image} />
          )}
          <ContentInfoContainer>
            <ContentInfoTitleTypo>{goods?.name}</ContentInfoTitleTypo>
            <ContentInfoPriceContainer>
              <ContentInfoPriceNumberTypo>
                {goods?.price}
              </ContentInfoPriceNumberTypo>
              <ContentInfoPriceTypo>
                니르{' '}
                {goods?.is_enter === '0'
                  ? `(잔여 수량 : ${goods?.number - goods?.history_number} 개)`
                  : `(수량 : ${goods?.number} 개)`}
              </ContentInfoPriceTypo>
            </ContentInfoPriceContainer>
            <ContentDescriptionTypo>
              {goods?.description}
            </ContentDescriptionTypo>
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
