import { commonAxios } from 'api/commonAxios';
import React, { useEffect, useState } from 'react';
import {
  Container,
  ContentButton,
  ContentContainer,
  ContentDrawer,
  ContentTypo,
  LogoImg,
  MenuButton,
  MenuContainer,
  MenuTypo,
  Root,
  TitleTypo,
} from './styled';
import logo2 from 'assets/images/logo2.png';
import { useNavigate } from 'react-router-dom';
import useLocationLog from 'hooks/useLocationLog';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [score, setScore] = useState<number>();
  const [isLogin, setIsLogin] = useState<boolean>();

  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const onClickMyPage = () => {
    navigate('/mypage');
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

  useLocationLog();

  return (
    <Root>
      <Container>
        <MenuContainer>
          <LogoImg src={logo2} onClick={() => navigate('/')} />
          <div onClick={() => navigate('/food')}>
            <MenuTypo>식품</MenuTypo>
          </div>
          <div onClick={() => navigate('/coupon')}>
            <MenuTypo>상품권</MenuTypo>
          </div>
          <div onClick={() => navigate('/fashion')}>
            <MenuTypo>패션</MenuTypo>
          </div>
          <div onClick={() => navigate('/living')}>
            <MenuTypo>리빙</MenuTypo>
          </div>
          <div onClick={() => navigate('/result')}>
            <MenuTypo>응모 결과</MenuTypo>
          </div>
        </MenuContainer>
        <MenuContainer>
          {isLogin ? (
            <>
              <ContentTypo>
                {name} 님 ({score}점)
              </ContentTypo>
              <ContentButton onClick={onClickMyPage}>마이페이지</ContentButton>
              <ContentButton onClick={onClickLogout}>로그아웃</ContentButton>
            </>
          ) : (
            <ContentButton type='primary' onClick={() => navigate('/login')}>
              로그인
            </ContentButton>
          )}
        </MenuContainer>
      </Container>
    </Root>
  );
};

export default Header;
