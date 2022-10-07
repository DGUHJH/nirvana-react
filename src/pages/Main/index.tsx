import React, { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Header from 'systems/Header';
import ItemCard from 'systems/ItemCard';
import MobileMain from './Mobile';
import {
  BannerImg,
  Container,
  FooterWrapper,
  Root,
  SwiperContainer,
  SwiperInnerContainer,
  SwiperLeftArrow,
  SwiperLeftArrowWrapper,
  SwiperRightArrow,
  SwiperRightArrowWrapper,
  SwiperTitleTypo,
  SwiperWrapper,
} from './styled';
import main_banner from 'assets/images/main_banner.png';
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
import Footer from 'systems/Footer';
import useGoods from 'hooks/useGoods';

SwiperCore.use([Navigation]);

const Main = () => {
  const { enterGoodsList, goodsList, allGoodsList, gengList, nirvanaList } =
    useGoods();
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef2 = useRef(null);
  const rightRef2 = useRef(null);
  const leftRef3 = useRef(null);
  const rightRef3 = useRef(null);
  const leftRef4 = useRef(null);
  const rightRef4 = useRef(null);

  if (isMobile) {
    return <MobileMain />;
  }

  const onBeforeInit = (Swiper: any): void => {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const navigation = Swiper.params.navigation;
      navigation.prevEl = leftRef.current;
      navigation.nextEl = rightRef.current;
    }
  };

  const onBeforeInit2 = (Swiper: any): void => {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const navigation = Swiper.params.navigation;
      navigation.prevEl = leftRef2.current;
      navigation.nextEl = rightRef2.current;
    }
  };

  const onBeforeInit3 = (Swiper: any): void => {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const navigation = Swiper.params.navigation;
      navigation.prevEl = leftRef3.current;
      navigation.nextEl = rightRef3.current;
    }
  };

  const onBeforeInit4 = (Swiper: any): void => {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const navigation = Swiper.params.navigation;
      navigation.prevEl = leftRef4.current;
      navigation.nextEl = rightRef4.current;
    }
  };

  return (
    <Root>
      <Header />
      <Container>
        <BannerImg src={main_banner} />
        <SwiperContainer>
          <SwiperTitleTypo level={2}>응모 상품 리스트</SwiperTitleTypo>
          <SwiperWrapper>
            <Swiper
              onBeforeInit={onBeforeInit}
              slidesPerView={4}
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
              style={{ width: '1280px', height: '400px', padding: '0 90px' }}
            >
              {enterGoodsList.map((goods, index) => {
                return (
                  <SwiperSlide>
                    <SwiperInnerContainer>
                      <ItemCard {...goods} key={`goods_${index}`} />
                    </SwiperInnerContainer>
                  </SwiperSlide>
                );
              })}
              <SwiperLeftArrowWrapper ref={leftRef}>
                <SwiperLeftArrow />
              </SwiperLeftArrowWrapper>
              <SwiperRightArrowWrapper ref={rightRef}>
                <SwiperRightArrow />
              </SwiperRightArrowWrapper>
            </Swiper>
          </SwiperWrapper>
        </SwiperContainer>
        <SwiperContainer>
          <SwiperTitleTypo level={2}>
            젠지 선수단 친필 사인 리스트 (응모)
          </SwiperTitleTypo>
          <Swiper
            onBeforeInit={onBeforeInit2}
            slidesPerView={4}
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
            style={{ width: '1280px', height: '400px', padding: '0 90px' }}
          >
            {gengList.map((goods, index) => {
              return (
                <SwiperSlide>
                  <SwiperInnerContainer>
                    <ItemCard {...goods} key={`goods_${index}`} />
                  </SwiperInnerContainer>
                </SwiperSlide>
              );
            })}
            <SwiperLeftArrowWrapper ref={leftRef2}>
              <SwiperLeftArrow />
            </SwiperLeftArrowWrapper>
            <SwiperRightArrowWrapper ref={rightRef2}>
              <SwiperRightArrow />
            </SwiperRightArrowWrapper>
          </Swiper>
        </SwiperContainer>
        <SwiperContainer>
          <SwiperTitleTypo level={2}>
            니르바나 굿즈 리스트 (응모)
          </SwiperTitleTypo>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, FreeMode, Pagination]}
            className='mySwiper'
            style={{ width: '1100px', height: '400px' }}
          >
            {nirvanaList.map((goods, index) => {
              return (
                <SwiperSlide>
                  <SwiperInnerContainer>
                    <ItemCard {...goods} key={`goods_${index}`} />
                  </SwiperInnerContainer>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </SwiperContainer>
        <SwiperContainer>
          <SwiperTitleTypo level={2}>교환 상품 리스트</SwiperTitleTypo>
          <Swiper
            onBeforeInit={onBeforeInit4}
            slidesPerView={4}
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
            style={{ width: '1280px', height: '400px', padding: '0 90px' }}
          >
            {goodsList.map((goods, index) => {
              return (
                <SwiperSlide>
                  <SwiperInnerContainer>
                    <ItemCard {...goods} key={`goods_${index}`} />
                  </SwiperInnerContainer>
                </SwiperSlide>
              );
            })}
            <SwiperLeftArrowWrapper ref={leftRef4}>
              <SwiperLeftArrow />
            </SwiperLeftArrowWrapper>
            <SwiperRightArrowWrapper ref={rightRef4}>
              <SwiperRightArrow />
            </SwiperRightArrowWrapper>
          </Swiper>
        </SwiperContainer>
      </Container>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Root>
  );
};
export default Main;
