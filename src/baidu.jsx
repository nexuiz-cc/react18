/* eslint-disable react/button-has-type */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';

let map = null; // 地图实例
let point = null; // 点坐标

function App(props) {
  const [searchIpt, setSearchIpt] = useState('银行');
  const [start, setStart] = useState('上海 智慧七立方');
  const [end, setEnd] = useState('人民广场');

  const r1 = useRef(null); // map地图注入点

  const drawMap = () => {
    // 绘制一次地图
    // react把全局变量和模块变量隔离开来，直接访问BMapGl变量，会认为是模块变量，找不到，就报错，不会找全局
    map = new window.BMapGL.Map(r1.current); // 创建Map实例
    point = new window.BMapGL.Point(121.52305562988282, 31.319667142440014);
    map.centerAndZoom(point, 14); // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

    createMyPos();
  };

  useEffect(drawMap, []);

  // 绘制一个覆盖物，作为当前我的位置
  const createMyPos = () => {
    // 创建点
    const marker = new window.BMapGL.Marker(point);
    map.addOverlay(marker); // 增加点
  };

  // 清除覆盖物
  const clearOverLay = () => map.clearOverlays();

  const search = () => {
    clearOverLay();
    const local = new window.BMapGL.LocalSearch(map, {
      renderOptions: { map, autoViewport: false },
    });
    local.searchNearby(searchIpt, point, 1000);
    createMyPos();
  };
  const walk = () => {
    clearOverLay();
    const walking = new window.BMapGL.WalkingRoute(map, {
      renderOptions: { map, autoViewport: true },
    });
    walking.search(start, end);
    createMyPos();
  };

  return (
    <>
      <h3>百度地图</h3>
      <div ref={r1} style={{ height: 500 }} />
      <input
        type="text"
        value={searchIpt}
        onChange={(ev) => setSearchIpt(ev.target.value)}
      />
      <button onClick={search}>搜索</button>
      <input
        type="text"
        value={start}
        onChange={(ev) => setStart(ev.target.value)}
      />
      <input
        type="text"
        value={end}
        onChange={(ev) => setEnd(ev.target.value)}
      />
      <button onClick={walk}>查询路线</button>
    </>
  );
}

export default App;
