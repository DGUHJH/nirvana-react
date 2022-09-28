import { commonAxios } from 'api/commonAxios';
import React, { useEffect, useState } from 'react';
import {
  Container,
  ContentButton,
  ContentContainer,
  ContentDrawer,
  ContentTypo,
  MenuButton,
  MenuContainer,
  Root,
  TitleTypo,
} from './styled';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [score, setScore] = useState<number>();
  const [isLogin, setIsLogin] = useState<boolean>();

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
        <TitleTypo>
          니르바나 <br /> 마일리지샵
        </TitleTypo>
        <MenuContainer>
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
        </MenuContainer>
      </Container>
    </Root>
  );
};

export default Header;
