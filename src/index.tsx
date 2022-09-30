import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Login from 'pages/Login';
import 'antd/dist/antd.css';
import 'default.css';
import ManageMain from 'pages/Manage/Main';
import GoodsDetails from 'pages/Goods/GoodsDetails';
import Goods from 'pages/Goods';
import ExchangeDetails from 'pages/Exchange/ExchangeDetails';
import Exchange from 'pages/Exchange';
import ManageGoods from 'pages/Manage/Goods';
import ManageMember from 'pages/Manage/Member';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/goods' element={<Goods />} />
      <Route path='/goods_details' element={<GoodsDetails />} />
      <Route path='/exchange' element={<Exchange />} />
      <Route path='/exchange_details' element={<ExchangeDetails />} />
      <Route path='/manage/main' element={<ManageMain />} />
      <Route path='/manage/goods' element={<ManageGoods />} />
      <Route path='/manage/member' element={<ManageMember />} />
    </Routes>
  </BrowserRouter>
);
