import React, { useEffect, useRef, useState } from 'react';
import { CardImg, CardImgContainer, CardSkeleton, Root } from './styled';

type Props = {
  imgSrc?: any;
  size?: 'small' | 'large';
};

const Image: React.FC<Props> = ({ imgSrc, size = 'large' }) => {
  const [loading, setLoading] = useState<'INIT' | 'LOAD'>('INIT');

  return (
    <CardImgContainer size={size}>
      <CardImg
        src={`data:image/jpeg;base64,${imgSrc}`}
        onLoad={(e) => {
          setLoading('LOAD');
        }}
      />
      {loading === 'INIT' && <CardSkeleton active={true} />}
    </CardImgContainer>
  );
};

export default Image;
