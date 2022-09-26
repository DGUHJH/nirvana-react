import { message } from 'antd';
import { commonAxios } from 'api/commonAxios';
import React, { useEffect, useState } from 'react';
import {
  Container,
  ContentButton,
  ContentContainer,
  ContentInput,
  Root,
  TitleTypo,
} from './styled';

const Login = () => {
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
        message.error('서버 오류입니다. 관리자에게 문의해주세요.');
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
    </Root>
  );
};

export default Login;
