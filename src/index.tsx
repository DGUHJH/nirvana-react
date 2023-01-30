import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Login from 'pages/Login';
import 'antd/dist/antd.css';
import 'default.css';
import ManageMain from 'pages/Manage/Main';
import GoodsDetails from 'pages/GoodsDetails';
import Goods from 'pages/Goods';
import ManageGoods from 'pages/Manage/Goods';
import ManageMember from 'pages/Manage/Member';
import MyPage from 'pages/MyPage';
import PasswordChange from 'pages/PasswordChange';
import FoodPage from 'pages/Food';
import CouponPage from 'pages/Coupon';
import LivingPage from 'pages/Living';
import FashionPage from 'pages/Fashion';
import Result from 'pages/Result';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Root = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/password_change' element={<PasswordChange />} />
      <Route path='/goods' element={<Goods />} />
      <Route path='/goods_details/:id' element={<GoodsDetails />} />
      <Route path='/food' element={<FoodPage />} />
      <Route path='/coupon' element={<CouponPage />} />
      <Route path='/living' element={<LivingPage />} />
      <Route path='/fashion' element={<FashionPage />} />
      <Route path='/mypage' element={<MyPage />} />
      <Route path='/result' element={<Result />} />
      <Route path='/manage/main' element={<ManageMain />} />
      <Route path='/manage/goods' element={<ManageGoods />} />
      <Route path='/manage/member' element={<ManageMember />} />
    </Routes>
  );
};

root.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
