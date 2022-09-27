import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Input, Table, Typography } from 'antd';
import styled from 'styled-components';

export const Root = styled.div`
  width: 320px;
  height: 80px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 1px #c9c9c9 solid;
  position: fixed;
  top: 0;
  left: calc(50% - 160px);
  z-index: 10;
`;

export const TitleTypo = styled(Typography)`
  &&& {
    font-size: 16px;
    font-weight: 700;
  }
`;

export const MenuButton = styled(MenuOutlined)`
  font-size: 24px;
  cursor: pointer;
`;

export const ContentDrawer = styled(Drawer)``;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContentTypo = styled(Typography)``;

export const ContentInput = styled(Input)`
  &&& {
    width: 200px;
  }
`;

export const ContentButton = styled(Button)``;

export const ContentTable = styled(Table)``;
