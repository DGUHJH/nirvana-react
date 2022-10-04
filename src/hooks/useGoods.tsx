import { commonAxios } from 'api/commonAxios';
import { useEffect, useState } from 'react';

const useGoods = () => {
  const [enterGoodsList, setEnterGoodsList] = useState<any[]>([]);
  const [gengList, setGengList] = useState<any[]>([]);
  const [nirvanaList, setNirvanaList] = useState<any[]>([]);
  const [goodsList, setGoodsList] = useState<any[]>([]);
  const [allGoodsList, setAllGoodsList] = useState<any[]>([]);

  useEffect(() => {
    commonAxios({ url: 'get_goods_list.php', method: 'GET' }).then((res) => {
      let newEnterGoodsList: any[] = [];
      let newGengList: any[] = [];
      let newNirvanaList: any[] = [];
      let newGoodsList: any[] = [];
      res.data.data.forEach((value: any) => {
        if (value.is_enter === '1') {
          newEnterGoodsList.push(value);
        } else if (value.is_enter === '2') {
          newGengList.push(value);
        } else if (value.is_enter === '3') {
          newNirvanaList.push(value);
        } else {
          newGoodsList.push(value);
        }
      });
      setEnterGoodsList(newEnterGoodsList);
      setGoodsList(newGoodsList);
      setGengList(newGengList);
      setNirvanaList(newNirvanaList);
      setAllGoodsList(res.data.data);
    });
  }, []);

  return { enterGoodsList, goodsList, gengList, nirvanaList, allGoodsList };
};

export default useGoods;
