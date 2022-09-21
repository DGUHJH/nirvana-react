import React from 'react';
import {
  InfoContainer,
  InfoTypo,
  InfoButton,
  LogoImg,
  Root,
  Container,
  LogoContainer,
  LogoTitleTypo,
  LogoTypoContainer,
  LogoDescriptionTypo,
} from './styled';
import logo from 'assets/images/logo.png';

const Header = () => {
  return (
    <Root>
      <Container>
        <LogoContainer>
          <LogoImg src={logo} />
          <LogoTypoContainer>
            <LogoTitleTypo>니르바나 (LIRVANA)</LogoTitleTypo>
            <LogoDescriptionTypo>동국대학교 게임 동아리</LogoDescriptionTypo>
          </LogoTypoContainer>
        </LogoContainer>
        {/* <InfoContainer>
          <InfoButton size='large'>
            <InfoTypo>로그인</InfoTypo>
          </InfoButton>
        </InfoContainer> */}
      </Container>
    </Root>
  );
};

export default Header;
