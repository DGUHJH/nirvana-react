import React, { useState } from 'react';
import Header from 'systems/Header';
import {
  BannerImg,
  BannerContainer,
  BannerContentTypo,
  Root,
  BannerTitleTypo,
  TypoColor,
  IntroContainer,
  Divider,
  IntroTitleTypo,
  IntroContentContainer,
  IntroSubTitleTypo,
  IntroDescriptionTypo,
  IntroCollapse,
  IntroPanel,
  EventContainer,
  EventTitleTypo,
  PriceContainer,
  PriceTitleTypo,
  ContactContainer,
  ContactTitleTypo,
  ModalPosterImg,
  ContentModal,
  PriceList,
  EventCarousel,
  EventCarouselItemContainer,
  ContactContentContainer,
  ContentButton,
  ContactButtonTypo,
} from './styled';
import bannerImg from 'assets/images/banner.png';
import Footer from 'systems/Footer';
import poster1Img from 'assets/images/poster_1.png';
import { InstagramFilled, YoutubeFilled } from '@ant-design/icons';

const data = [
  '▪ 동국대 총학생회 주최 ‘비D면 데이트 - 게임 한 판 할래요?’ 리그 오브 레전드 1대1 대회 우승자, 준우승자 배출',
  '▪ 동국대 총학생회 주최 ‘백상 컵’(리그오브레전드) 대회 동아리 부원으로만 구성된 팀으로 출전, 예선 본선 전승 우승',
  '▪ 라이엇 게임즈 주최 2021 배틀 아카데미아 전국 대학리그 동국대 대표팀 출전',
  '▪ 문화체육관광부 주최 2021 Esports 대학리그 리그오브레전드 동국대 대표팀 출전',
  '▪ 학생회 주최 경영대 vs 공과대 남산올림픽 전승 우승',
  "▪ 동국대학교 Esports 동아리 NIRVANA & 경희대학교 Esports 동아리 ESPERS 협동 주최 교류전 '동경전' 2연패",
  '▪ 전국 Esports 대회 청춘전 8강 진출',
  '▪ 문화체육관광부 주최 2022 Esports 대학리그 리그오브레전드 동국대 대표팀 출전',
  "▪ 동국대 x 건국대 x 단국대 3개 대학 교류전 '삼국전' 진행 중",
];

const Main = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(true);

  return (
    <Root>
      <ContentModal
        title='공지사항'
        visible={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
      >
        <ModalPosterImg src={poster1Img} />
      </ContentModal>
      <Header />
      <BannerImg src={bannerImg} />
      <BannerContainer>
        <BannerTitleTypo>니르바나는 현재 신입 부원 모집중!</BannerTitleTypo>
        <BannerContentTypo>
          동국대학교 최초이자 유일한 Esports & 게임 중앙동아리{' '}
          <TypoColor color='#fff'> NIRVANA </TypoColor> <br />
          언제 어디서든 같이 게임을 즐길 수 있는 학우들이 넘쳐나는 곳, <br />
          LCK 1위팀 Gen.G 와 함께하는 NIRVANA로 오세요!
        </BannerContentTypo>
      </BannerContainer>
      <IntroContainer>
        <Divider />
        <IntroTitleTypo level={1}>
          🚩 동아리 활동 및 기획 소개 🚩
        </IntroTitleTypo>
        <IntroContentContainer>
          <IntroCollapse defaultActiveKey={'1'} expandIcon={() => <></>}>
            <IntroPanel
              header={
                <IntroSubTitleTypo level={3}>
                  📣 Gen.G Esports 와의 공식 파트너십 계약 체결 발표‼
                </IntroSubTitleTypo>
              }
              key='1'
            >
              <IntroDescriptionTypo>
                NIRVANA는 빠르게 성장하고 있는 Esports 산업의 최고 기업 중
                하나인 Gen.G Esports 와 공식 파트너십 계약을 체결하였으며 2022년
                8월 5일 부로 공식 파트너로 활동하게 되었습니다!
                <br />
                이는 Esports 구단에서 대학 동아리를 지원하는 계약을 맺은 최초의
                사례이며 공식 파트너십에 힘입어 NIRVANA 부원들께 정말 다양한
                혜택이 돌아갈 예정입니다!!
                <br />
                이번학기 Gen.G Esports 와 함께 Eternal Return 관련 행사를 통해
                다양한 상품을 마구 뿌릴 예정이니 이터널 리턴 행사 참여하시고
                마일리지도 받아서 상품도 받아가세요!
                <br />
                마일리지 샵에 Gen.G Esports와 관련된 상품이 있을 예정이니 특히
                Gen.G 팬이라면? 지금 당장 NIRVANA로 ❤~
              </IntroDescriptionTypo>
            </IntroPanel>
            <IntroPanel
              header={
                <IntroSubTitleTypo level={3}>
                  📣동국대 x 건국대 x 단국대 "삼국전" 진행 중!!
                </IntroSubTitleTypo>
              }
              key='2'
            >
              <IntroDescriptionTypo>
                NIRVANA는 매 학기마다 다른 대학교와의 다양한 교류전을 추진하고
                있으며 지난 학기 경희대 ESPERS와의 '동경전' 에 이어 현재
                건국대와 단국대 게임동아리와 함께 '삼국전'을 진행하고 있습니다!!
                <br />
                부원들끼리 자유롭게 팀을 결성하며 탕치기와 하이재킹 등을 통해
                재밌는 상황도 연출되는 중입니다!
                <br />
                9월 8일에 팀 구성을 마감한다고 하니, 관심 있으신 분들은 얼른
                NIRVANA에 들어오셔서 삼국전의 전사가 되어보세요!
                <br />
                (참고로 NIRVANA는 지금까지의 모든 교류전을 이겼답니다 ㅎㅎ)
              </IntroDescriptionTypo>
            </IntroPanel>
            <IntroPanel
              header={
                <IntroSubTitleTypo level={3}>
                  📣 마일리지 제도 🪙"니르"🪙
                </IntroSubTitleTypo>
              }
              key='3'
            >
              <IntroDescriptionTypo>
                "행사 참가만 해도 '니르'를 받을 수 있다고❓" <br />
                상품은 우승/준우승 팀만 가져가고 행사에 참여해도 남는 게 없었던
                참가자 분들을 위해 마일리지 제도를 도입했습니다. "행사 참가"만
                해도 이제는 상품 응모/교환 기회를 얻을 수 있습니다 ! 분기별로 한
                번씩 열리는 마일리지 샵에서 당신의 상품에 ❗투자 ❗하세요 <br />
                *세부 사항은 NIRVANA 인스타그램 게시글 참고
              </IntroDescriptionTypo>
            </IntroPanel>
            <IntroPanel
              header={
                <IntroSubTitleTypo level={3}>
                  📣 NIRVANA x PC방
                </IntroSubTitleTypo>
              }
              key='4'
            >
              <IntroDescriptionTypo>
                NIRVANA는 대학생 최고의 모임장소이자 수요가 높은 여가공간인 학교
                주변 PC방 프랜차이즈와 MOU 계약을 추진중에 있습니다. 보다
                발전되고 특화되어 있는 NIRVANA만의 Esports 환경을 조성하기 위해
                노력하고 있습니다.
              </IntroDescriptionTypo>
            </IntroPanel>
          </IntroCollapse>
        </IntroContentContainer>
      </IntroContainer>
      <EventContainer>
        <Divider />
        <EventTitleTypo>🚩 진행 예정 행사 🚩</EventTitleTypo>
        <EventCarousel afterChange={() => {}} autoplay={true}>
          <div>
            <EventCarouselItemContainer style={{ background: '#f003' }}>
              1
            </EventCarouselItemContainer>
          </div>
          <div>
            <EventCarouselItemContainer style={{ background: '#0f03' }}>
              2
            </EventCarouselItemContainer>
          </div>
          <div>
            <EventCarouselItemContainer style={{ background: '#00f3' }}>
              3
            </EventCarouselItemContainer>
          </div>
        </EventCarousel>
      </EventContainer>
      <PriceContainer>
        <Divider />
        <PriceTitleTypo>
          🚩NIRVANA 21, 22학년도 외부 수상 및 활동내역🚩
        </PriceTitleTypo>
        <PriceList
          size='large'
          bordered
          dataSource={data}
          renderItem={(item: any) => <PriceList.Item>{item}</PriceList.Item>}
        />
      </PriceContainer>
      <ContactContainer>
        <Divider />
        <ContactTitleTypo>🚩동아리 공식 SNS 및 문의 🚩</ContactTitleTypo>
        <ContactContentContainer>
          <ContentButton type='primary' size='large' icon={<InstagramFilled />}>
            인스타그램
          </ContentButton>
          <ContentButton type='primary' size='large' icon={<InstagramFilled />}>
            유튜브
          </ContentButton>
          <ContentButton type='primary' size='large'>
            카카오톡 오픈 채팅방
          </ContentButton>
        </ContactContentContainer>
      </ContactContainer>
      <Footer />
    </Root>
  );
};

export default Main;
