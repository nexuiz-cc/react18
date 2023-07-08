import React from "react";
import { Table } from "antd";
import './Routerr.scss';

const Routerr = () => {
  const dataSource = [
    {
      key: "1",
      component: "BrowserRouter",
      effect:
        "约定模式 为 history，使用 HTML5 提供的 history API 来保持 UI 和 URL 的同步",
    },
    {
      key: "2",
      component: "HashRouter",

      effect:
        "约定模式 为 hash，使用 URL 的 hash (例如：window.location.hash) 来保持 UI 和URL 的同步",
    },
    {
      key: "3",
      component: "NavLink",

      effect: "声明式跳转 还可以约定 路由激活状态",
    },
    {
      key: "4",
      component: "Link",
      effect: "声明式跳转    ~~ push 无激活状态",
    },
    {
      key: "5",
      component: "Redirect",

      effect: "重定向    ~~ replace",
    },
    {
      key: "6",
      component: "Route",
      effect: "匹配、展示",
    },
    {
      key: "7",
      component: "Switch",
      effect: "排他性匹配",
    },
    {
      key: "8",
      component: "Prompt",
      effect: "后置守卫",
    },
    {
      key: "9",
      component: "withRouter",
      effect: "把不是通过路由切换过来的组件中，将 history、location、match 三个对象传入props对象上",
    },
  ];
  const columns = [
    {
      title: "组件",
      dataIndex: "component",
      key: "component",
      width:100
    },
    {
      title: "作用",
      dataIndex: "effect",
      key: "effect",
      width:800
    },
  ];

  return <div><Table dataSource={dataSource} columns={columns} />;</div>;
};

export default Routerr;
