import { Button, Image, Typography } from 'antd';
import styled from 'styled-components';

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
  align-items: center;
  gap: 20px;
  padding-top: 80px;
`;

export const BannerImg = styled.img`
  width: 1280px;
  margin-top: -140px;
`;

export const CardContainer = styled.div`
  width: 1100px;
  display: flex;
  gap: 42px;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const ContentTitleTypo = styled(Typography.Title)`
  &&& {
    font-family: Jalnan;
    font-weight: bold;
    margin-top: 40px;
  }
`;

export const ContentDescriptionTypo = styled(Typography)`
  &&& {
    font-family: Jalnan;
    font-weight: 400;
    font-size: 18px;
    margin-top: 10px;
  }
`;

export const ContentContainer = styled.div`
  width: 1280px;
  display: flex;
  margin-top: 50px;
`;

export const ContentImg = styled.img`
  width: 640px;
  height: 640px;
  border: 1px #c9c9c9 solid;
  object-fit: contain;
  border-radius: 8px;
`;

export const ContentInfoContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 100px;
`;

export const ContentInfoTitleTypo = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  word-break: keep-all;
`;

export const ContentInfoPriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  color: #111;
  gap: 10px;
`;

export const ContentInfoPriceNumberTypo = styled(Typography)`
  font-size: 36px;
  font-family: Jalnan;
  font-weight: bold;
  word-break: keep-all;
`;

export const ContentInfoPriceTypo = styled(Typography)`
  font-size: 24px;
  font-family: Jalnan;
  font-weight: bold;
  word-break: keep-all;
  margin-bottom: 8px;
`;

export const ContentInfoButton = styled(Button)`
  margin-top: 20px;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
