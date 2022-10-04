import React, { useEffect, useState } from 'react';
import {
  Container,
  ContentContainer,
  ContentDescriptionTypo,
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
import useGoods from 'hooks/useGoods';
import { useLocation } from 'react-router-dom';
import useGetImage from 'hooks/useGetImage';
import MobileHeader from 'systems/Header/Mobile';
import Image from 'components/Image';
import MobileFooter from 'systems/Footer/Mobile';
import { commonAxios } from 'api/commonAxios';
import bag_1 from 'assets/images/bag_1.png';
import bag_2 from 'assets/images/bag_2.png';
import bag_3 from 'assets/images/bag_3.png';
import { Carousel } from 'antd';

const MobileGoodsDetails = () => {
  const location = useLocation();
  const goodsUuid = location.pathname.split('/')[2];
  const userUuid = localStorage.getItem('uuid');
  const { allGoodsList } = useGoods();
  const { image } = useGetImage({ uuid: goodsUuid });
  const [goods, setGoods] = useState<any>();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const postGoodsHistory = () => {
    commonAxios({
      url: 'post_goods_history.php',
      method: 'POST',
      params: { goods_uuid: goodsUuid, user_uuid: userUuid },
    }).then((res) => {
      window.location.reload();
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    commonAxios({
      url: 'get_goods_details.php',
      method: 'GET',
      params: { goods_uuid: goodsUuid, user_uuid: userUuid },
    }).then((res) => {
      setGoods(res.data.data);
      setIsChecked(res.data.data.check);
    });
  }, []);

  return (
    <Root>
      <MobileHeader />
      <Container>
        <ContentTitleTypo level={4}>
          {goods?.is_enter === '0' ? '교환' : '응모'} 상품 상세
        </ContentTitleTypo>
        <ContentContainer>
          {goodsUuid === '22' ? (
            <Carousel
              autoplay
              dots
              arrows
              style={{ width: '320px', height: '320px' }}
            >
              <div>
                <img src={bag_1} style={{ width: '320px', height: '320px' }} />
              </div>
              <div>
                <img src={bag_2} style={{ width: '320px', height: '320px' }} />
              </div>
              <div>
                <img src={bag_3} style={{ width: '320px', height: '320px' }} />
              </div>
            </Carousel>
          ) : (
            <Image imgSrc={image} size='small' />
          )}
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
            <ContentDescriptionTypo>
              {goods?.description}
            </ContentDescriptionTypo>
            {(goods?.is_enter !== '0' ||
              (goods?.is_enter === '0' &&
                goods?.number - goods?.history_number > 0)) &&
            !isChecked ? (
              <ContentInfoButton
                onClick={() => {
                  if (
                    window.confirm(
                      `정말로 ${
                        goods?.is_enter === '0' ? '교환' : '응모'
                      }하시겠습니까?`
                    )
                  ) {
                    postGoodsHistory();
                    window.alert(
                      `${
                        goods?.is_enter === '0' ? '교환' : '응모'
                      }가 완료되었습니다.`
                    );
                  }
                }}
              >
                {goods?.is_enter === '0' ? '교환' : '응모'}하기
              </ContentInfoButton>
            ) : (
              <ContentInfoButton disabled={true}>
                {goods?.is_enter === '0' ? '교환' : '응모'}완료
              </ContentInfoButton>
            )}
          </ContentInfoContainer>
        </ContentContainer>
      </Container>
      <MobileFooter />
    </Root>
  );
};

export default MobileGoodsDetails;
