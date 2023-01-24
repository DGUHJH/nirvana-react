import { Typography } from 'antd';
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

export const BannerImg = styled.img`
  width: 100%;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const CardTitleTypo = styled(Typography.Title)`
  &&& {
    font-family: Jalnan;
    font-weight: bold;
    margin-top: 20px;
  }
`;
