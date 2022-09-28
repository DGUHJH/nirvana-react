import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { Root } from './styled';
import logo from 'assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

type Props = {
  imgSrc?: any;
  title: string;
  description: string;
};

const ItemCard: React.FC<Props> = ({ imgSrc, title, description }) => {
  const navigate = useNavigate();

  return (
    <Root onClick={() => navigate('/goods_details')}>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt='' src={imgSrc ?? logo} />}
      >
        <Meta title={title} description={description} />
      </Card>
    </Root>
  );
};

export default ItemCard;
