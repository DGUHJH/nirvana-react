import { Skeleton } from 'antd';
import styled from 'styled-components';

export const Root = styled.div``;

export const CardImgContainer = styled.div`
  width: 240px;
  height: 240px;
  position: relative;
`;

export const CardImg = styled.img`
  width: 240px;
  box-sizing: border-box;
  border: 1px #eee solid;
  z-index: 0;
`;

export const CardSkeleton = styled(Skeleton.Image)`
  &&& {
    width: 240px;
    height: 240px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;
