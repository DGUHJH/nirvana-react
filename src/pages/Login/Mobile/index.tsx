import { message } from 'antd';
import { commonAxios } from 'api/commonAxios';
import React, { useEffect, useState } from 'react';
import Footer from 'systems/Footer';
import MobileFooter from 'systems/Footer/Mobile';
import Header from 'systems/Header';
import MobileHeader from 'systems/Header/Mobile';
import {
  Container,
  ContentButton,
  ContentContainer,
  ContentInput,
  FooterWrapper,
  Root,
  TitleTypo,
} from './styled';

const MobileLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLogin = () => {
    return commonAxios({
      url: 'login.php',
      method: 'GET',
      params: {
        phone_number: phoneNumber,
        password,
      },
    });
  };

  const onClickLogin = () => {
    if (phoneNumber === '') {
      message.error('휴대전화번호를 입력해주세요.');
      return;
    }
    if (password === '') {
      message.error('비밀번호를 입력해주세요.');
      return;
    }
    onLogin().then((res: any) => {
      if (res.data.type === 'success') {
        localStorage.setItem('uuid', res.data.data.uuid);
        window.location.replace('/');
      } else {
        message.error('아이디와 비밀번호를 확인해주세요.');
      }
    });
  };

  const onKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      onClickLogin();
    }
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Root>
      <Container>
        <MobileHeader />
        <TitleTypo level={2}>로그인</TitleTypo>
        <ContentContainer>
          <ContentInput
            placeholder='휴대전화번호 ( - 제외 )'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onKeyDown={onKeyPress}
          />
          <ContentInput
            placeholder='비밀번호'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={onKeyPress}
          />
          <ContentButton type='primary' onClick={onClickLogin}>
            로그인
          </ContentButton>
        </ContentContainer>
      </Container>
      <FooterWrapper>
        <MobileFooter />
      </FooterWrapper>
    </Root>
  );
};

export default MobileLogin;
