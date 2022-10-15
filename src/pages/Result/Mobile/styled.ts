import { Table, Typography } from 'antd';
import styled from 'styled-components';
import Banner from 'systems/Banner';

export const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 80px;
  padding-bottom: 100px;
`;

export const CardContainer = styled.div`
  width: 1100px;
  display: flex;
  gap: 42px;
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

export const FooterWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const ContentTable = styled(Table)`
  &&& {
    width: 320px;
  }
`;
