import React from 'react';
import { InfoContainer, InfoTypo, InfoButton, LogoImg, Root } from './styled';
import logo from 'assets/images/logo.png';

const Header = () => {
  return (
    <Root>
      <LogoImg src={logo} />
      <InfoContainer>
        <InfoButton type='link'>
          <InfoTypo>로그인</InfoTypo>
        </InfoButton>
      </InfoContainer>
    </Root>
  );
};

export default Header;
