import { Skeleton, Typography } from 'antd';
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

export const CardImgNumberTypo = styled(Typography)`
  &&& {
    font-family: Jalnan;
    font-size: 12px;
    font-weight: bold;
    /* text-shadow: 2px 2px 2px gray; */
    background: #1115;
    color: white;
    padding: 2px 4px;
    box-sizing: border-box;
    border-radius: 4px;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
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
