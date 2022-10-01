import { commonAxios } from 'api/commonAxios';
import React, { useEffect, useState } from 'react';
import {
  Container,
  ContentButton,
  ContentContainer,
  ContentDrawer,
  ContentTypo,
  DrawerContainer,
  DrawerLinkImg,
  DrawerTypo,
  DrawerTypoContainer,
  LogoImg,
  MenuButton,
  MenuTypo,
  Root,
  TitleTypo,
} from './styled';
import logo2 from 'assets/images/logo2.png';
import { useNavigate } from 'react-router-dom';

const MobileHeader = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [score, setScore] = useState<number>();
  const [isLogin, setIsLogin] = useState<boolean>();

  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.clear();
    window.location.replace('/login');
  };

  useEffect(() => {
    let uuid = localStorage.getItem('uuid');
    setIsLogin(!!uuid);
    if (uuid) {
      commonAxios({
        url: 'get_user_info.php',
        params: {
          uuid,
        },
        method: 'GET',
      }).then((res) => {
        if (res.data.type === 'success') {
          setName(res.data.data.name);
          setScore(res.data.data.score);
        }
      });
    }
  }, []);

  const handleOpen = (type: 'OPEN' | 'CLOSE' | 'TOGGLE') => () => {
    if (type === 'OPEN') {
      setOpen(true);
      return;
    }
    if (type === 'CLOSE') {
      setOpen(false);
      return;
    }
    setOpen((prev) => !prev);
  };

  return (
    <Root>
      <Container>
        <LogoImg src={logo2} onClick={() => navigate('/')} />
        <MenuButton onClick={handleOpen('OPEN')} />
      </Container>
      <ContentDrawer title='메뉴' open={open} onClose={handleOpen('CLOSE')}>
        <DrawerContainer>
          {isLogin ? (
            <>
              <ContentTypo>
                {name} 님 ({score}점)
              </ContentTypo>
              <ContentButton onClick={onClickLogout}>로그아웃</ContentButton>
            </>
          ) : (
            <ContentButton type='primary' onClick={onClickLogout}>
              로그인
            </ContentButton>
          )}
          <DrawerTypoContainer onClick={() => navigate('/goods')}>
            <DrawerLinkImg />
            <DrawerTypo>응모 상품 리스트</DrawerTypo>
          </DrawerTypoContainer>
          <DrawerTypoContainer onClick={() => navigate('/exchange')}>
            <DrawerLinkImg />
            <DrawerTypo>교환 상품 리스트</DrawerTypo>
          </DrawerTypoContainer>
        </DrawerContainer>
      </ContentDrawer>
    </Root>
  );
};

export default MobileHeader;
