import { Typography } from 'antd';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  height: 150px;
  background: #eee;
  display: flex;
  justify-content: center;
  border-top: 1px #c9c9c9 solid;
  margin-top: 100px;
`;

export const Container = styled.div`
  width: 1280px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const TitleTypo = styled(Typography.Title)``;
export const ContentTypo = styled(Typography)``;

export const LogoImg = styled.img`
  width: 80px;
  height: 80px;
`;
