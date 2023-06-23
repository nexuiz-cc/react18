import "./index.css";

import { ConfigProvider } from "antd-mobile";
import { zhCN } from "antd/es/locale/zh_CN";

const AntdMobileConfig = ({ children }) => {
  return <ConfigProvider locale={zhCN}>{children}</ConfigProvider>;
};

export default AntdMobileConfig;
