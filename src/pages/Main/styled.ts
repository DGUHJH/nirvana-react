import { Collapse, Typography } from 'antd';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  position: relative;
`;

export const BannerImg = styled.img`
  width: 2558px;
  height: 450px;
  z-index: -1;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
`;

export const BannerContainer = styled.div`
  width: 1280px;
  height: 450px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 100px;
  box-sizing: border-box;
`;

export const BannerTitleTypo = styled(Typography)`
  color: #fff;
  display: block;
  font-family: Jalnan;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 150%;
  text-align: left;
  text-shadow: 2px 2px 0 #170749, 2px -2px 0 #170749, -2px 2px 0 #170749,
    -2px -2px 0 #170749, 2px 0 0 #170749, 0 2px 0 #170749, -2px 0 0 #170749,
    0 -2px 0 #170749;
`;

export const BannerContentTypo = styled(Typography)`
  color: #fef3da;
  font-family: Jalnan;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 30px;
  text-align: left;
  text-shadow: 2px 2px 0 #170749, 2px -2px 0 #170749, -2px 2px 0 #170749,
    -2px -2px 0 #170749, 2px 0 0 #170749, 0 2px 0 #170749, -2px 0 0 #170749,
    0 -2px 0 #170749;
`;

type TypoColorProps = {
  color: string;
};

export const TypoColor = styled.span<TypoColorProps>`
  &&& {
    color: ${(props) => props.color};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #c9c9c9;
`;

export const IntroContainer = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin-top: 40px;
`;

export const IntroTitleTypo = styled(Typography.Title)`
  &&& {
    margin-top: 40px;
  }
`;

export const IntroContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const IntroSubTitleTypo = styled(Typography.Title)`
  &&& {
    margin-top: 20px;
  }
`;

export const IntroDescriptionTypo = styled(Typography)`
  &&& {
    font-size: 18px;
    word-break: keep-all;
  }
`;

export const IntroCollapse = styled(Collapse)``;
export const IntroPanel = styled(Collapse.Panel)`
  &&& {
    width: 1280px;
  }
`;

export const EventContainer = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin-top: 40px;
`;

export const EventTitleTypo = styled(Typography.Title)`
  &&& {
    margin-top: 40px;
  }
`;
