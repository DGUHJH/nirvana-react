import { commonAxios } from 'api/commonAxios';
import { useEffect, useState } from 'react';

const useGoods = () => {
  const [enterGoodsList, setEnterGoodsList] = useState<any[]>([]);
  const [goodsList, setGoodsList] = useState<any[]>([]);
  const [allGoodsList, setAllGoodsList] = useState<any[]>([]);

  useEffect(() => {
    commonAxios({ url: 'get_goods_list.php', method: 'GET' }).then((res) => {
      let newEnterGoodsList: any[] = [];
      let newGoodsList: any[] = [];
      res.data.data.forEach((value: any) => {
        if (value.is_enter === '1') {
          newEnterGoodsList.push(value);
        } else {
          newGoodsList.push(value);
        }
      });
      setEnterGoodsList(newEnterGoodsList);
      setGoodsList(newGoodsList);
      setAllGoodsList(res.data.data);
    });
  }, []);

  return { enterGoodsList, goodsList, allGoodsList };
};

export default useGoods;
