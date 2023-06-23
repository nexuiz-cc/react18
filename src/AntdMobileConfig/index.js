import "./index.css";

import { ConfigProvider } from "antd-mobile";
import zhCN from "antd/lib/locale/zh_CN";
import "./uc-flexible";
const AntMobileConfig = ({ children }) => {
  return <ConfigProvider locale={zhCN}>{children}</ConfigProvider>;
};

export default AntMobileConfig;