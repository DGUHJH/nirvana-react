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
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

export const TitleTypo = styled(Typography.Title)`
  font-family: Jalnan;
`;

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

export const UserInfoContainer = styled.div`
  width: 600px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 40px;
  border: 1px #c9c9c9 solid;
`;

export const UserInfoTypo = styled(Typography)`
  &&& {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const UserInfoScoreTypo = styled(Typography)`
  &&& {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const CardTitleTypoWrapper = styled.div`
  width: 1100px;
  margin-top: 40px;
`;

export const CardTitleTypo = styled(Typography)`
  &&& {
    font-family: Jalnan;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const CardContainer = styled.div`
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;
