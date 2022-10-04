import { Button, Image, Typography } from 'antd';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 80px;
`;

export const CardContainer = styled.div`
  width: 100%;
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
    font-size: 15px;
    margin-top: 10px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const ContentImg = styled.img`
  width: 320px;
  height: 320px;
  border: 1px #c9c9c9 solid;
  object-fit: contain;
  border-radius: 8px;
`;

export const ContentInfoContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContentInfoTitleTypo = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  word-break: keep-all;
  margin-top: 20px;
`;

export const ContentInfoPriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  color: #111;
  gap: 10px;
`;

export const ContentInfoPriceNumberTypo = styled(Typography)`
  font-size: 24px;
  font-family: Jalnan;
  font-weight: bold;
  word-break: keep-all;
`;

export const ContentInfoPriceTypo = styled(Typography)`
  font-size: 18px;
  font-family: Jalnan;
  font-weight: bold;
  word-break: keep-all;
  margin-bottom: 8px;
`;

export const ContentInfoButton = styled(Button)`
  margin-top: 20px;
`;
