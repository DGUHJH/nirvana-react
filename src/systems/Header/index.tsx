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
  InfoTypoWrapper,
} from './styled';
import logo from 'assets/images/logo.png';

type Props = {
  onClickMenu: (id: 1 | 2 | 3 | 4) => () => void;
};

const Header: React.FC<Props> = ({ onClickMenu }) => {
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
        <InfoContainer>
          <InfoTypoWrapper onClick={onClickMenu(1)}>
            <InfoTypo>동아리 활동</InfoTypo>
          </InfoTypoWrapper>
          <InfoTypoWrapper onClick={onClickMenu(2)}>
            <InfoTypo>예정 행사</InfoTypo>
          </InfoTypoWrapper>
          <InfoTypoWrapper onClick={onClickMenu(3)}>
            <InfoTypo>활동 내역</InfoTypo>
          </InfoTypoWrapper>
          <InfoTypoWrapper onClick={onClickMenu(4)}>
            <InfoTypo>SNS 및 문의</InfoTypo>
          </InfoTypoWrapper>
        </InfoContainer>
      </Container>
    </Root>
  );
};

export default Header;
