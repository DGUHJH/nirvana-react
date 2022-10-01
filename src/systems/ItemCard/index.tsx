import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useRef, useState } from 'react';
import { Root } from './styled';
import logo from 'assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { commonAxios } from 'api/commonAxios';

type Props = {
  imgSrc?: any;
  uuid: number;
  name: string;
  price: string;
  is_enter: '1' | '0';
};

const ItemCard: React.FC<Props> = ({ imgSrc, uuid, name, price, is_enter }) => {
  const navigate = useNavigate();
  const [image, setImage] = useState<any>();
  const [loading, setLoading] = useState<'INIT' | 'LOAD'>('INIT');

  useEffect(() => {
    commonAxios({
      url: 'get_goods_image.php',
      method: 'GET',
      params: { id: uuid },
    }).then((res) => {
      setImage(res.data.data);
    });
  }, []);

  return (
    <Root
      onClick={() =>
        navigate(
          is_enter === '1'
            ? `/exchange_details/${uuid}`
            : `/goods_details/${uuid}`
        )
      }
    >
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <img
            src={image ? `data:image/jpeg;base64,${image}` : logo}
            onLoad={(e) => {
              setLoading('LOAD');
            }}
          />
        }
      >
        <Meta title={name} description={`${price} 니르`} />
      </Card>
    </Root>
  );
};

export default ItemCard;
