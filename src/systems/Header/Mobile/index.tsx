import { commonAxios } from 'api/commonAxios';
import React, { useEffect, useState } from 'react';
import {
  ContentButton,
  ContentContainer,
  ContentDrawer,
  ContentTypo,
  MenuButton,
  Root,
  TitleTypo,
} from './styled';

const MobileHeader = () => {
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
    <>
      <Root>
        <TitleTypo>
          니르바나 <br /> 마일리지샵
        </TitleTypo>
        <MenuButton onClick={handleOpen('OPEN')} />
      </Root>
      <ContentDrawer title='메뉴' open={open} onClose={handleOpen('CLOSE')}>
        <ContentContainer>
          {isLogin ? (
            <>
              <ContentTypo>이름 : {name}</ContentTypo>
              <ContentTypo>마일리지 점수 : {score}</ContentTypo>
              <ContentButton type='primary' onClick={onClickLogout}>
                로그아웃
              </ContentButton>
            </>
          ) : (
            <ContentButton type='primary' onClick={onClickLogout}>
              로그인
            </ContentButton>
          )}
        </ContentContainer>
      </ContentDrawer>
    </>
  );
};

export default MobileHeader;
