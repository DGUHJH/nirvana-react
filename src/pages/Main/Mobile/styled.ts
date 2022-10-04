import { Button, Input, Typography } from 'antd';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 80px;
  padding-bottom: 200px;
`;

export const Container = styled.div`
  min-width: 320px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleTypo = styled(Typography.Title)``;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const BannerImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-top: -100px;
  margin-bottom: 50px;
`;

export const ContentTypo = styled(Typography)``;

export const ContentInput = styled(Input)``;

export const ContentButton = styled(Button)``;

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

export const SwiperWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
