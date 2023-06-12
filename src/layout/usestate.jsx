import React, { useState } from "react";
console.log(React);
const DefaultLayouts = (props) => {
  // setXXX不是必须
  // null, undefined,boolean,空字符都不渲染，数组会取元素再拼接
  const [count,setCount] = useState(0);
  const [str] = useState('bmw');
  const [arr] = useState(['aa','bb','cc']);
  const [obj] = useState({a:1,b:2});
  const [un] = useState(undefined);
  const [nu] = useState(null);
  const [tempStr] = useState('');
  const [arrObj] = useState(['aa',12,true,'',undefined]);
  


  const changeCount = () => {
    setCount(0);
  };
  const plus = ()=>{
    setCount((count)=>count+1)
  }
  return (
    <>
      <h3>组件状态</h3>
      <div>{count}</div>
      <button onClick={() => { setCount(count + 1) }}>++</button>
      <button onClick={() => { plus() }}>plus</button>
      <button onClick={() => { setCount(count - 1) }}>--</button>
      <button onClick={changeCount}>0</button>
      <div>{str}</div>
      <div>{arr}</div>
       <div>{obj.a}</div> 
      <div>{un}</div>
      <div>{nu}</div>
      <div>{tempStr}</div>
      <div>{arrObj}</div>
      return
    </>
  )
};

export default DefaultLayouts;
