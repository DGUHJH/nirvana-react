import { commonAxios } from 'api/commonAxios';
import React, { useEffect, useState } from 'react';
import {
  Container,
  ContentButton,
  ContentContainer,
  ContentTypo,
  Root,
  TitleTypo,
} from './styled';

const Main = () => {
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

  return (
    <Root>
      <Container>
        <TitleTypo level={2}>메인</TitleTypo>
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
      </Container>
    </Root>
  );
};
export default Main;
