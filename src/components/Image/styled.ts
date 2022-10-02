import { Skeleton } from 'antd';
import styled from 'styled-components';

export const Root = styled.div``;

type CardImgContainerProps = {
  size: 'small' | 'large';
};

export const CardImgContainer = styled.div<CardImgContainerProps>`
  ${(props) =>
    props.size === 'large'
      ? `
  width: 640px;
  height: 640px;`
      : `
  width: 320px;
  height: 320px;`}
  position: relative;
  box-sizing: border-box;
  border: 1px #eee solid;
`;

export const CardImg = styled.img`
  width: 100%;
  z-index: 0;
`;

export const CardSkeleton = styled(Skeleton.Image)`
  &&& {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;
