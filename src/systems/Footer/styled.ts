import { Typography } from 'antd';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  height: 100px;
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
  align-items: center;
`;

export const TitleTypo = styled(Typography.Title)``;
