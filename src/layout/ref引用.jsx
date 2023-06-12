/*
    useRef作用
      ● 组件每次渲染都指向同一个ref，useRef指向的是一个引用
      ● useRef用于返回一个可变的ref对象。这个ref对象的current属性被初始化为useRef传入的参数initialValue。
      ● useRef返回的ref对象在整个生命周期中保持不变。（意思是这个ref对象的地址一直不会变）。
      ● ref对象变化不会触发视图更新。（但是当有state改变时，ref对象的变化也会显示在视图上）。
      ● 获取的DOM实例将会储存在current属性。（current属性指向DOM实例）
   */

import { createRef, useRef, useState } from 'react';

function DefaultLayouts(props) { // eslint-disable-line no-unused-vars
  const [count, setCount] = useState(0);

  const r1 = createRef(null);
  const r2 = useRef(null);
  let r3 = null;
  const dom = () => {
    console.log('r1', r1);
    console.log('r2', r2);
    console.log('r3', r3);
    r1.current.style.background = 'red';
    r2.current.style.background = 'blue';
    r3.style.background = 'yellow';
  };
  // callback
  // 组件每次渲染都会重新创建
  // 回调会在 挂载完毕和更新完毕之前调用
  // 当组件挂载时，将 DOM el元素传递给 ref 的回调
  // 当组件卸载时，则会传递 null。

  console.log(
    'createRef',
    r1.current?.innerHTML,
    'useRef',
    r2.current?.innerHTML,
  );

  return (
    <>
      <h3>ref</h3>
      <div ref={r1}>box1</div>
      <div ref={r2}>box2</div>
      <div ref={(el) => (r3 = el)}>box3</div>

      <div>{count}</div>

      <button type="button" onClick={dom}>dom操作</button>
      <button type="button" onClick={() => setCount(count + 1)}>操作数据</button>
    </>
  );
}

export default DefaultLayouts;
