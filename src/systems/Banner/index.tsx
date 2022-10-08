import React from 'react';
import { BannerImg, BannerTypo, Root } from './styled';
import banner_img from 'assets/images/main_banner.png';

const Banner = () => {
  return (
    <Root>
      <BannerImg src={banner_img} />
      <BannerTypo>
        과도한 일상 생활은 정상적인 게임 이용에 지장을 줄 수 있습니다
      </BannerTypo>
    </Root>
  );
};

export default Banner;
