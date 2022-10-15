import { Table, Typography } from 'antd';
import styled from 'styled-components';

export const Root = styled.div`
  width: 1280px;
  position: relative;
`;

export const BannerImg = styled.img`
  width: 1280px;
`;

export const BannerTypo = styled(Typography)`
  font-family: Jalnan;
  font-size: 18px;
  color: #eee;
  background: #000;
  position: absolute;
  top: 230px;
  left: 383px;
`;
