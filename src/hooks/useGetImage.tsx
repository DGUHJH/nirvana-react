import { commonAxios } from 'api/commonAxios';
import { useEffect, useState } from 'react';

type Props = {
  uuid: string;
};

const useGetImage = ({ uuid }: Props) => {
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
  return { image };
};

export default useGetImage;
