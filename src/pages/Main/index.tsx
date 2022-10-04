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
  SwiperTitleTypo,
} from './styled';
import main_banner from 'assets/images/main_banner.png';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from 'systems/Footer';
import useGoods from 'hooks/useGoods';

const Main = () => {
  const { enterGoodsList, goodsList, allGoodsList, gengList, nirvanaList } =
    useGoods();

  if (isMobile) {
    return <MobileMain />;
  }

  return (
    <Root>
      <Header />
      <Container>
        <BannerImg src={main_banner} />
        <SwiperContainer>
          <SwiperTitleTypo level={2}>응모 상품 리스트</SwiperTitleTypo>
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
            {enterGoodsList.map((goods, index) => {
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
          <SwiperTitleTypo level={2}>
            젠지 선수단 친필 사인 리스트
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
            {gengList.map((goods, index) => {
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
          <SwiperTitleTypo level={2}>니르바나 굿즈 리스트</SwiperTitleTypo>
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
            {goodsList.map((goods, index) => {
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
      </Container>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Root>
  );
};
export default Main;
