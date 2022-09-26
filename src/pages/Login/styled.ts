import { Button, Input, Typography } from 'antd';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const TitleTypo = styled(Typography.Title)``;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContentInput = styled(Input)``;

export const ContentButton = styled(Button)``;
