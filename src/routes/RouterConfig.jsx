import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import NoPage from "../pages/NoPage";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import Goods from "../pages/Goods";
import User from "../pages/User";
import Detail from "../pages/Detail";
const RouterConfig = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 需要布局层 */}
          <Route path="home" element={<Home />} />
          <Route path="goods" element={<Goods />}>
            {/* 子路由 */}
            <Route path=":id" element={<Detail />} />
            <Route index element={<Navigate to="1" />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="user" element={<User />} />
          {/* 默认页 */}
          {/* <Route index element={<Home />} /> */}

          {/* 重定向 */}
          <Route index element={<Navigate to="/home" />} />
          <Route path="*" element={<NoPage />} />
        </Route>

        {/* 不需要布局层 */}
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
