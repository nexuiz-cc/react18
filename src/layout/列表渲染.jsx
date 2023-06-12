import React, { useState } from "react";
console.log(React);
const DefaultLayouts = (props) => {
  const [arr] = useState(["aa", "bb", "cc"]);
  const [arr2] = useState([
    { id: 1, name: "alex", like: "吃饭" },
    { id: 2, name: "jack", like: "睡觉" },
  ]);
  const [arr3] = useState([
    { id: 1, name: "alex", like: "吃饭" },
    {
      id: 2,
      name: "alex",
      children: [
        { id: 1, name: "alex", like: "吃饭" },
        { id: 2, name: "alex", like: "吃饭" },
      ],
      like: "吃饭睡觉",
    },
  ]);

  // 语句，表达式
  // undefined 不能map

  let el = [];
  for (let i = 0; i < arr.length; i++) {
    el.push(<li key={i}>{arr[i]}</li>);
  }

  return (
    <>
      <h3>列表渲染</h3>
      {/*表达式*/}
      <ul>{el}</ul>
      <hr />
      <ul>
        {arr.map((val, index) => {
          return <li key={index}>{val}</li>;
        })}
      </ul>
      <hr />
      <ul>
        {arr2.map((item) => (
          <li key={item.id}>
            {item.name}/{item.like}
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        {arr2.map((item) => (
          <li key={item.id}>
            {item.name}/{item.like}
            <ul>
              {item.children &&
                item.children.map((item) => (
                  <li key={item.id}>
                    {item.name}/{item.like}
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        {arr3.map((item) => (
          <li key={item.id}>
            {item.name}/{item.like}
            <ul>
              {item.children?.map((item) => (
                <li key={item.id}>
                  {item.name}/{item.like}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DefaultLayouts;
