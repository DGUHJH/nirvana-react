import { Button, Typography } from 'antd';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  height: 100px;
  background: #111;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
`;

export const LogoImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const InfoButton = styled(Button)`
  background: #0ff3;
  border: 0;
  border-radius: 10px;
`;

export const InfoTypo = styled(Typography)`
  &&& {
    font-size: 18px;
    color: white;
  }
`;
