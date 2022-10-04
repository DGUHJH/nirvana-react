import React from 'react';
import { Container, ContentTypo, LogoImg, Root, TitleTypo } from './styled';
import logo from 'assets/images/logo2.png';

const MobileFooter = () => {
  return (
    <Root>
      <Container>
        <ContentTypo>
          Dongguk University Esports Club NIRVANA
          <br />
          대표자 : 신인동, 부대표 : 강명구, 담당자 : 정승미
          <br />
          서울특별시 중구 필동로 1길30
          <br />
          대표자 연락처 / 010-6581-6380 <br />
          마일리지샵 문의 / 010-4920-0567
          <br />
          NIRVANA 콘텐츠의 저작권은 저작권자 또는 제공처에 있으며, 이를 무단
          사용 및 도용하는 경우 저작권법 등에 따라 법적 책임을 질 수 있음을
          알려드립니다.
          <br />
          2022 NIRVANA. All rights reserved.
        </ContentTypo>

        <LogoImg src={logo} />
      </Container>
    </Root>
  );
};

export default MobileFooter;
