import { Button, Carousel, Input, Typography } from 'antd';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 1280px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 80px;
`;

export const BannerImg = styled.img`
  width: 1280px;
`;

export const TitleTypo = styled(Typography.Title)``;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ContentTypo = styled(Typography)``;
export const ContentInput = styled(Input)``;
export const ContentButton = styled(Button)``;
export const ContentCarousel = styled(Carousel)`
  width: 1280px;
  height: 720px;
`;

export const SwiperContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`;

export const SwiperTitleTypo = styled(Typography.Title)`
  &&& {
    font-family: Jalnan;
    font-weight: bold;
  }
`;

export const SwiperInnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
