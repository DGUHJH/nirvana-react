import { Button, Input, Typography } from 'antd';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 100px;
  padding-bottom: 200px;
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

export const FooterWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
