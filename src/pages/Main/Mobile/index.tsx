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
  const { enterGoodsList, goodsList, allGoodsList, gengList, nirvanaList } =
    useGoods();

  return (
    <Root>
      <MobileHeader />
      <Container>
        <ContentContainer>
          <BannerImg src={banner} />
          <SwiperContainer>
            <SwiperTitleTypo level={5}>응모 상품 리스트</SwiperTitleTypo>
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
            <SwiperTitleTypo level={5}>
              젠지 선수단 친필 사인 리스트
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
            <SwiperTitleTypo level={5}>
              젠지 선수단 친필 사인 리스트
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
            <SwiperTitleTypo level={5}>니르바나 굿즈 리스트</SwiperTitleTypo>
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
            <SwiperTitleTypo level={5}>교환 상품 리스트</SwiperTitleTypo>
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
        </ContentContainer>
      </Container>
      <FooterWrapper>
        <MobileFooter />
      </FooterWrapper>
    </Root>
  );
};
export default MobileMain;
