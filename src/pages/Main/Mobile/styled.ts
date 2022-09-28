import { Button, Input, Typography } from 'antd';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  min-width: 320px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 100px;
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
