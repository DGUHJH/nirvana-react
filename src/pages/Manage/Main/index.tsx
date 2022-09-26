import { message } from 'antd';
import { commonAxios } from 'api/commonAxios';
import React, { useEffect, useState } from 'react';
import {
  Container,
  ContentButton,
  ContentContainer,
  ContentInput,
  ContentTable,
  ContentTypo,
  Root,
  TitleTypo,
} from './styled';

type DataSourceType = {
  name: string;
  phoneNumber: string;
  score: number;
  studentNumber: number;
};

const ManageMain = () => {
  const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
  const [select, setSelect] = useState<number>();
  const [score, setScore] = useState<number>();

  const columns = [
    {
      title: 'uuid',
      dataIndex: 'uuid',
      key: 'uuid',
    },
    {
      title: '이름',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '휴대전화번호',
      dataIndex: 'phone_number',
      key: 'phone_number',
    },
    {
      title: '마일리지 점수',
      dataIndex: 'score',
      key: 'score',
      render: (a: any, b: any) => {
        if (b.uuid === select) {
          return (
            <ContentInput
              value={score}
              onChange={(e) => setScore(+e.target.value)}
            />
          );
        }
        return a;
      },
    },
    {
      title: '학번',
      dataIndex: 'student_number',
      key: 'student_number',
    },
    {
      title: '수정',
      dataIndex: 'edit',
      key: 'edit',
      render: (a: any, b: any) => {
        if (select === b.uuid) {
          return (
            <ContentButton
              onClick={() => {
                commonAxios({
                  url: 'manage/edit_user_data.php',
                  method: 'POST',
                  params: { uuid: b.uuid, score },
                }).then((res) => {
                  if (res.data.type === 'success') {
                    getUserTable();
                    setSelect(undefined);
                    setScore(undefined);
                  }
                });
              }}
            >
              완료
            </ContentButton>
          );
        }
        return (
          <ContentButton
            onClick={() => {
              setSelect(b.uuid);
              setScore(b.score);
            }}
          >
            수정
          </ContentButton>
        );
      },
    },
  ];

  const getUserTable = () => {
    commonAxios({ url: 'manage/get_user_table.php', method: 'GET' }).then(
      (res) => {
        if (res.data.type === 'success') {
          setDataSource(res.data.data);
        } else {
          message.error('네트워크 오류');
        }
      }
    );
  };

  useEffect(() => {
    getUserTable();
  }, []);

  return (
    <Root>
      <Container>
        <TitleTypo level={2}>관리자 메인</TitleTypo>
        <ContentContainer>
          <ContentTable columns={columns} dataSource={dataSource} />
        </ContentContainer>
      </Container>
    </Root>
  );
};
export default ManageMain;
