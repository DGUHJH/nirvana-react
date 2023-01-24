import { message } from 'antd';
import { commonAxios } from 'api/commonAxios';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Footer from 'systems/Footer';
import Header from 'systems/Header';
import ItemCard from 'systems/ItemCard';
import MobileMyPage from './Mobile';
import {
  CardContainer,
  CardTitleTypo,
  CardTitleTypoWrapper,
  Container,
  ContentButton,
  ContentContainer,
  ContentInput,
  FooterWrapper,
  Root,
  TitleTypo,
  UserInfoContainer,
  UserInfoScoreTypo,
  UserInfoTypo,
} from './styled';

const MyPage = () => {
  const [name, setName] = useState<string>('');
  const [score, setScore] = useState<number>();
  const [goods, setGoods] = useState<any[]>([]);

  useEffect(() => {
    let uuid = localStorage.getItem('uuid');
    if (!uuid) {
      alert('로그인이 필요한 페이지입니다.');
      window.location.replace('/login');
    }
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
      commonAxios({
        url: 'get_user_goods_history.php',
        params: {
          user_uuid: uuid,
        },
        method: 'GET',
      }).then((res) => {
        setGoods(res.data.data);
      });
    }
  }, []);

  if (isMobile) {
    return <MobileMyPage />;
  }

  return (
    <Root>
      <Header />
      <Container>
        <TitleTypo level={2}>마이페이지</TitleTypo>
        <UserInfoContainer>
          <UserInfoTypo>{name}님 안녕하세요.</UserInfoTypo>
          <UserInfoScoreTypo>잔여 마일리지 : {score} 점</UserInfoScoreTypo>
        </UserInfoContainer>
        <CardTitleTypoWrapper>
          <CardTitleTypo>내가 응모/교환한 상품 리스트</CardTitleTypo>
        </CardTitleTypoWrapper>
        <CardContainer>
          {goods?.filter((value) => value.is_available === "1").map((value) => {
            return <ItemCard {...value} />;
          })}
        </CardContainer>
        <CardTitleTypoWrapper>
          <CardTitleTypo>내가 응모/교환한 상품 리스트(이전)</CardTitleTypo>
        </CardTitleTypoWrapper>
        <CardContainer>
          {goods?.filter((value) => value.is_available === "0").map((value) => {
            return <ItemCard {...value} />;
          })}
        </CardContainer>
      </Container>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Root>
  );
};

export default MyPage;
