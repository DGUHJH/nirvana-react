import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Button, Carousel, Input, Typography } from 'antd';
import styled from 'styled-components';
import Banner from 'systems/Banner';

export const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 200px;
`;

export const Container = styled.div`
  width: 1280px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 80px;
`;

export const BannerImg = styled(Banner)`
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

export const FooterWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const SwiperWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SwiperLeftArrowWrapper = styled.div`
  width: 90px;
  height: 400px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const SwiperLeftArrow = styled(LeftOutlined)`
  &&& {
    font-size: 36px;
    z-index: 5;
    cursor: pointer;
  }
`;

export const SwiperRightArrowWrapper = styled.div`
  width: 90px;
  height: 400px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
`;

export const SwiperRightArrow = styled(RightOutlined)`
  &&& {
    font-size: 36px;
    z-index: 5;
    cursor: pointer;
  }
`;
