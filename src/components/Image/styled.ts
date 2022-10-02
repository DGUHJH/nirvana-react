import { Skeleton } from 'antd';
import styled from 'styled-components';

export const Root = styled.div``;

export const CardImgContainer = styled.div`
  width: 640px;
  height: 640px;
  position: relative;
  border: 1px #eee solid;
`;

export const CardImg = styled.img`
  width: 640px;
  z-index: 0;
`;

export const CardSkeleton = styled(Skeleton.Image)`
  &&& {
    width: 640px;
    height: 640px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;
