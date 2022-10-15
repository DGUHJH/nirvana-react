import React, { useEffect, useState } from 'react';
import Header from 'systems/Header';
import {
  BannerImg,
  CardContainer,
  CardTitleTypo,
  Container,
  ContentTable,
  FooterWrapper,
  Root,
} from './styled';
import Footer from 'systems/Footer';
import { commonAxios } from 'api/commonAxios';
import { message } from 'antd';
import { isMobile } from 'react-device-detect';
import MobileResult from './Mobile';

const Result = () => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [select, setSelect] = useState<number>();
  const [score, setScore] = useState<number>();

  const columns = [
    {
      title: 'no',
      dataIndex: 'uuid',
      key: 'uuid',
    },
    {
      title: '상품명',
      dataIndex: 'goodsName',
      key: 'goodsName',
    },
    {
      title: '당첨자',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '학번',
      dataIndex: 'userStudentNumber',
      key: 'userStudentNumber',
    },
  ];

  const getUserTable = () => {
    commonAxios({
      url: 'get_selected_goods_list.php',
      method: 'GET',
    }).then((res) => {
      if (res.data.type === 'success') {
        setDataSource(
          res.data.data.map((value: any) => {
            return {
              uuid: value.uuid,
              goodsName: value.goods.name,
              userName: value.user.name,
              userStudentNumber: value.user.student_number,
            };
          })
        );
      } else {
        message.error('네트워크 오류');
      }
    });
  };

  useEffect(() => {
    getUserTable();
  }, []);

  if (isMobile) {
    return <MobileResult />;
  }

  return (
    <Root>
      <Header />
      <Container>
        <BannerImg />
        <CardTitleTypo>응모 결과</CardTitleTypo>
        <ContentTable columns={columns} dataSource={dataSource} />
      </Container>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Root>
  );
};

export default Result;
