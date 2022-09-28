import React, { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Header from 'systems/Header';
import ItemCard from 'systems/ItemCard';
import MobileMain from './Mobile';
import {
  BannerImg,
  Container,
  ContentCarousel,
  ContentContainer,
  Root,
  SwiperContainer,
  SwiperInnerContainer,
  SwiperTitleTypo,
} from './styled';
import main_banner from 'assets/images/main_banner.png';
import goods_list from 'assets/json/goods.json';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from 'systems/Footer';

const Main = () => {
  const [goodsList, setGoodsList] = useState<any[]>(goods_list.data);
  const carouselRef = useRef<any>();

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
            style={{ width: '1100px', height: '350px' }}
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
            style={{ width: '1100px', height: '350px' }}
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
      <Footer />
    </Root>
  );
};
export default Main;
