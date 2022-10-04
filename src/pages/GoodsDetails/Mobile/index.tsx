import React, { useEffect, useState } from 'react';
import {
  Container,
  ContentContainer,
  ContentImg,
  ContentInfoButton,
  ContentInfoContainer,
  ContentInfoPriceContainer,
  ContentInfoPriceNumberTypo,
  ContentInfoPriceTypo,
  ContentInfoTitleTypo,
  ContentTitleTypo,
  Root,
} from './styled';
import Footer from 'systems/Footer';
import useGoods from 'hooks/useGoods';
import { useLocation } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import useGetImage from 'hooks/useGetImage';
import MobileHeader from 'systems/Header/Mobile';
import Image from 'components/Image';
import MobileFooter from 'systems/Footer/Mobile';
import { commonAxios } from 'api/commonAxios';

const MobileGoodsDetails = () => {
  const location = useLocation();
  const uuid = location.pathname.split('/')[2];
  const userUuid = localStorage.getItem('uuid');
  const { allGoodsList } = useGoods();
  const { image } = useGetImage({ uuid });
  const [goods, setGoods] = useState<any>();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const postGoodsHistory = () => {
    commonAxios({
      url: 'post_goods_history.php',
      method: 'POST',
      params: { goods_uuid: uuid, user_uuid: userUuid },
    }).then((res) => {
      window.location.reload();
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    commonAxios({
      url: 'get_goods_details.php',
      method: 'GET',
      params: { goods_uuid: uuid, user_uuid: userUuid },
    }).then((res) => {
      setGoods(res.data.data);
      setIsChecked(res.data.data.check);
    });
  }, []);

  return (
    <Root>
      <MobileHeader />
      <Container>
        <ContentTitleTypo level={4}>응모 상품 상세</ContentTitleTypo>
        <ContentContainer>
          <Image imgSrc={image} size='small' />
          <ContentInfoContainer>
            <ContentInfoTitleTypo>{goods?.name}</ContentInfoTitleTypo>
            <ContentInfoPriceContainer>
              <ContentInfoPriceNumberTypo>
                {goods?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </ContentInfoPriceNumberTypo>
              <ContentInfoPriceTypo>
                니르{' '}
                {goods?.is_enter === '0' &&
                  `(잔여 수량 : ${goods?.number - goods?.history_number} 개)`}
              </ContentInfoPriceTypo>
            </ContentInfoPriceContainer>
            {(goods?.is_enter !== '0' ||
              (goods?.is_enter === '0' &&
                goods?.number - goods?.history_number > 0)) &&
            !isChecked ? (
              <ContentInfoButton
                onClick={() => {
                  if (window.confirm('정말로 응모하시겠습니까?')) {
                    postGoodsHistory();
                    window.alert('응모가 완료되었습니다.');
                  }
                }}
              >
                응모하기
              </ContentInfoButton>
            ) : (
              <ContentInfoButton disabled={true}>응모완료</ContentInfoButton>
            )}
          </ContentInfoContainer>
        </ContentContainer>
      </Container>
      <MobileFooter />
    </Root>
  );
};

export default MobileGoodsDetails;
