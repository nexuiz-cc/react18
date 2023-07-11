import React from "react";
import { Table } from "antd";
import "./Routerr.scss";

const LearnRouter = () => {
  const dataSourceRouter = [
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
      effect:
        "把不是通过路由切换过来的组件中，将 history、location、match 三个对象传入props对象上",
    },
  ];
  const dataSourceBrowserRouter = [
    {
      key: "1",
      props: "basename",
      type: "string",
      effect:
        "所有位置的基本URL。如果您的应用是从服务器上的子目录提供的，则需要将其设置为子目录。格式正确的基本名称应以斜杠开头，但不能以斜杠结尾。",
    },
  ];
  const columns = [
    {
      title: "组件",
      dataIndex: "component",
      key: "component",
      width: 100,
    },
    {
      title: "作用",
      dataIndex: "effect",
      key: "effect",
      width: 800,
    },
  ];
  const columnsRouter = [
    {
      title: "属性",
      dataIndex: "props",
      key: "props",
      width: "20%",
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
      width: "20%",
    },
    {
      title: "作用",
      dataIndex: "effect",
      key: "effect",
      width: "60%",
    },
  ];
  const dataSourceRoute = [
    {
      key: "1",
      props: "path",
      type: "string",
      effect: "路由匹配路径。支持子路径不带/",
    },
    {
      key: "2",
      props: "element",
      type: "React.ReactNode",
      effect: "在地址匹配的时候React的组件才会被渲染",
    },
    {
      key: "3",
      props: "index",
      type: "boolean",
      effect: "当前path是否为默认页",
    },
  ];

  const dataSourceLink = [
    {
      key: "1",
      props: "to",
      type: "string | {pathname,search}",
      effect: "要跳转的路径和查询字符串",
    },
    {
      key: "2",
      props: "replace",
      type: "boolean",
      effect: "是否替换历史记录",
    },
    {
      key: "3",
      props: "reloadDocument",
      type: "boolean",
      effect: "是否刷新页面",
    },
    {
      key: "4",
      props: "state",
      type: "any",
      effect: "其他需要传递个信息",
    },
  ];
  const dataSourceNavLink = [
    {
      key: "1",
      props: "to",
      type: "string object",
      effect: "要跳转的路径和查询字符串",
    },
    {
      key: "2",
      props: "replace",
      type: "boolean",
      effect: "是否替换历史记录",
    },
    {
      key: "3",
      props: "className",
      type: "返回 string",
      effect: "当元素被选中时，设置选中样式",
    },
    {
      key: "4",
      props: "style",
      type: "返回 object",
      effect: "当元素被选中时，设置选中样式",
    },
  ];
  const dataSourceNavigate = [
    {
      key: "1",
      props: "to",
      type: "string object",
      effect: "要跳转的路径和查询字符串",
    },
    {
      key: "2",
      props: "replace",
      type: "boolean",
      effect: "是否替换历史记录",
    },
    {
      key: "3",
      props: "state",
      type: "any",
      effect: "其他需要传递个信息",
    },
  ];

  return (
    <div>
      <h3>提供组件</h3>
      <Table
        className="tableRouter"
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        dataSource={dataSourceRouter}
        columns={columns}
      />
      <h3>结构</h3>
      <p className="lv1">BrowserRouter|HashRouter</p>
      <li className="lv2">Routes</li>
      <li className="lv3">Route&nbsp;→&nbsp;layouts</li>
      <li className="lv4">Route&nbsp;→&nbsp;pages</li>
      <li className="lv4">Route&nbsp;→&nbsp;Navigate</li>
      <li className="lv4">Route&nbsp;→&nbsp;404</li>
      <li className="lv3">Route&nbsp;→&nbsp;pages</li>
      <li className="lv3">Route&nbsp;→&nbsp;Navigate</li>
      <li className="lv3">Route&nbsp;→&nbsp;404</li>
      <h3>●&nbsp;BrowserRouter</h3>
      <Table
        className="tableBrowserRouter"
        rowClassName={(record, index) => index % 2 === 0 ? "table-row-light" : "table-row-dark" }
        dataSource={dataSourceBrowserRouter}
        columns={columnsRouter} >
      </Table>
      <h3>●&nbsp;Route</h3>
      <Table
        className="tableRoute"
        rowClassName={(record, index) =>index % 2 === 0 ? "table-row-light" : "table-row-dark" }
        dataSource={dataSourceRoute}
        columns={columnsRouter}>
      </Table>
      <h3>●&nbsp;Link</h3>
      <Table
        className="tableLink"
        rowClassName={(record, index) =>index % 2 === 0 ? "table-row-light" : "table-row-dark" }
        dataSource={dataSourceLink}
        columns={columnsRouter}>
      </Table>
      <h3>●&nbsp;NavLink</h3>
      <Table
        className="tableNavLink"
        rowClassName={(record, index) => index % 2 === 0 ? "table-row-light" : "table-row-dark" }
        dataSource={dataSourceNavLink}
        columns={columnsRouter}>
      </Table>
      <h3>●&nbsp;Navigate</h3>
      <Table
        className="tableNavigate"
        rowClassName={(record, index) =>index % 2 === 0 ? "table-row-light" : "table-row-dark"  }
        dataSource={dataSourceNavigate}
        columns={columnsRouter}>
      </Table>
      <br/>
    </div>
  );
};

export default LearnRouter;
