import { commonAxios } from 'api/commonAxios';
import { useEffect, useState } from 'react';

const useGoods = () => {
  const [foodList, setFoodList] = useState<any[]>([]);
  const [couponList, setCouponList] = useState<any[]>([]);
  const [fashionList, setFashionList] = useState<any[]>([]);
  const [livingList, setLivingList] = useState<any[]>([]);
  const [allGoodsList, setAllGoodsList] = useState<any[]>([]);

  useEffect(() => {
    commonAxios({ url: 'get_goods_list.php', method: 'GET' }).then((res) => {
      let newFoodList: any[] = [];
      let newCouponList: any[] = [];
      let newFashionList: any[] = [];
      let newLivingList: any[] = [];
      res.data.data.forEach((value: any) => {
        if (value.is_enter === '4') {
          newFoodList.push(value);
        } else if (value.is_enter === '5') {
          newCouponList.push(value);
        } else if (value.is_enter === '6') {
          newFashionList.push(value);
        } else {
          newLivingList.push(value);
        }
      });
      setFoodList(newFoodList);
      setCouponList(newCouponList);
      setFashionList(newFashionList);
      setLivingList(newLivingList);
      setAllGoodsList(res.data.data);
    });
  }, []);

  return { foodList, couponList, fashionList, livingList, allGoodsList };
};

export default useGoods;
