/* eslint-disable react/prop-types */
import './index.css';
import React from 'react';
import { ConfigProvider } from 'antd-mobile';
import zhCN from 'antd/lib/locale/zh_CN';
import './uc-flexible';

function AntMobileConfig({ children }) {
  return <ConfigProvider locale={zhCN}>{children}</ConfigProvider>;
}

export default AntMobileConfig;
