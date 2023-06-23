import { useEffect, useState } from "react";

const A = ({ dataApp }) => {
  const [dataA, setDataA] = useState("a");
  const [dataB, setDataB] = useState("b");
  const [dataC, setDataC] = useState("c");

  // useEffect(() => {
  //   console.log("挂载完");
  //   return () => {
  //     console.log("卸载前");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("mounted挂载玩|跟新完");
  // });

  // useEffect(() => {
  //   // console.log("mounted挂载玩|跟新完");
  //   return () => {
  //     console.log("卸载前");
  //   };
  // });

  useEffect(() => {
    console.log("mounted挂载玩|跟新完 for dataA");
  }, [dataA]);

  useEffect(() => {
    console.log("mounted挂载玩|跟新完 for dataB");
  }, [dataB]);

  useEffect(() => {
    console.log("mounted挂载玩|跟新完 for dataC");
  }, [dataC]);

  useEffect(() => {
    console.log("mounted挂载玩|跟新完 for dataApp");
  }, [dataApp]);

  return (
    <>
      <h3>A</h3>
      {/* <div>dataA:{dataA}</div> */}
      {/* <div>dataB:{dataB}</div> */}
      {/* <div>dataC:{dataC}</div> */}
      {/* <div>dataApp:{dataApp}</div> */}
      <button onClick={() => setDataA(Math.random())}>跟新数据a</button>
      <button onClick={() => setDataB(Math.random())}>跟新数据b</button>
      <button onClick={() => setDataC(Math.random())}>跟新数据c</button>
    </>
  );
};

export default A;
