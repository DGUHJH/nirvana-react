import { message } from 'antd';
import { commonAxios } from 'api/commonAxios';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Footer from 'systems/Footer';
import Header from 'systems/Header';
import MobilePasswordChange from './Mobile';
import MobileLogin from './Mobile';
import {
  Container,
  ContentButton,
  ContentContainer,
  ContentInput,
  FooterWrapper,
  Root,
  TitleTypo,
} from './styled';

const PasswordChange = () => {
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  const uuid = localStorage.getItem('uuid');

  const onClickSubmit = () => {
    if (password === '') {
      message.error('비밀번호를 입력해주세요.');
      return;
    }
    if (password !== passwordConfirm) {
      message.error('비밀번호와 비밀번호 확인이 동일하지 않습니다.');
      return;
    }

    if (uuid) {
      return commonAxios({
        url: 'post_password_change.php',
        method: 'POST',
        params: {
          uuid,
          password,
        },
      }).then((res: any) => {
        if (res.data.type === 'success') {
          window.location.replace('/');
        } else {
          message.error('서버 에러');
        }
      });
    }
  };

  useEffect(() => {
    if (!uuid) {
      window.location.replace('/');
    }
  }, []);

  if (isMobile) {
    return <MobilePasswordChange />;
  }

  return (
    <Root>
      <Container>
        <Header />
        <TitleTypo level={2}>비밀번호 변경</TitleTypo>
        <ContentContainer>
          <ContentInput
            placeholder='새로운 비밀번호'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ContentInput
            placeholder='비밀번호 확인'
            type='password'
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <ContentButton type='primary' onClick={onClickSubmit}>
            변경 완료
          </ContentButton>
        </ContentContainer>
      </Container>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Root>
  );
};

export default PasswordChange;
