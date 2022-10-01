import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import { Root } from './styled';
import logo from 'assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { commonAxios } from 'api/commonAxios';

type Props = {
  imgSrc?: any;
  uuid: number;
  name: string;
  price: string;
};

const ItemCard: React.FC<Props> = ({ imgSrc, uuid, name, price }) => {
  const navigate = useNavigate();
  const [image, setImage] = useState<any>();

  useEffect(() => {
    commonAxios({
      url: 'get_goods_image.php',
      method: 'GET',
      params: { id: uuid },
    }).then((res) => {
      setImage(res.data.data);
    });
  }, []);

  console.log(image);

  return (
    <Root onClick={() => navigate('/goods_details')}>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img src={`data:image/jpeg;base64,${image}` ?? logo} />}
      >
        <Meta title={name} description={`${price} 니르`} />
      </Card>
    </Root>
  );
};

export default ItemCard;
