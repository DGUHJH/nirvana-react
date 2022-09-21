import { Button, Typography } from 'antd';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  background: #fff;
  border-bottom: 1px #111 solid;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Container = styled.div`
  width: 1280px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const LogoImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 20px;
`;

export const LogoTypoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LogoTitleTypo = styled(Typography)`
  &&& {
    font-weight: 900;
    font-size: 24px;
  }
`;

export const LogoDescriptionTypo = styled(Typography)`
  &&& {
    font-weight: 350;
    font-size: 16px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const InfoButton = styled(Button)``;

export const InfoTypo = styled(Typography)`
  &&& {
  }
`;
