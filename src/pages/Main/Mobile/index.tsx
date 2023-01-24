import React, { useEffect, useState } from 'react';
import MobileFooter from 'systems/Footer/Mobile';
import MobileHeader from 'systems/Header/Mobile';
import ItemCard from 'systems/ItemCard';
import {
  BannerImg,
  Container,
  ContentContainer,
  FooterWrapper,
  Root,
  SwiperContainer,
  SwiperInnerContainer,
  SwiperTitleTypo,
} from './styled';
import banner from 'assets/images/main_banner.png';
import useGoods from 'hooks/useGoods';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const MobileMain = () => {
  const { allGoodsList,couponList,fashionList,foodList,livingList } =
    useGoods();

  return (
    <Root>
      <MobileHeader />
      <Container>
        <ContentContainer>
          <BannerImg src={banner} />
          <SwiperContainer>
            <SwiperTitleTypo level={5}>식품 상품 리스트 (응모)</SwiperTitleTypo>
            <Swiper
              slidesPerView={1}
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
              style={{ width: '320px', height: '400px' }}
            >
              {foodList.map((goods, index) => {
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
            <SwiperTitleTypo level={5}>
              상품권 상품 리스트 (응모)
            </SwiperTitleTypo>
            <Swiper
              slidesPerView={1}
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
              style={{ width: '320px', height: '400px' }}
            >
              {couponList.map((goods, index) => {
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
            <SwiperTitleTypo level={5}>
              패션 상품 리스트 (응모)
            </SwiperTitleTypo>
            <Swiper
              slidesPerView={1}
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
              style={{ width: '320px', height: '400px' }}
            >
              {fashionList.map((goods, index) => {
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
            <SwiperTitleTypo level={5}>리빙 상품 리스트 (응모)</SwiperTitleTypo>
            <Swiper
              slidesPerView={1}
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
              style={{ width: '320px', height: '400px' }}
            >
              {livingList.map((goods, index) => {
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
        </ContentContainer>
      </Container>
      <FooterWrapper>
        <MobileFooter />
      </FooterWrapper>
    </Root>
  );
};
export default MobileMain;
