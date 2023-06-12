/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import React from 'react';
import './layout.css';

let id = 0;
// eslint-disable-next-line no-unused-vars
function DefaultLayouts(props) {
  const [list, setList] = useState([]); // [{id,nikename,content},...]
  const [nikename, setNikename] = useState('');
  const [content, setContent] = useState('');
  const [searchIpt, setSearchIpt] = useState('');
  const [searchList, setSearchList] = useState([]);

  const [isCheckFrame, setIsCheckFrame] = useState(false); // modal
  const [now, setNow] = useState(0); // list数据里面要被修改的索引
  const [checkContent, setCheckContent] = useState(''); // 修改是的输入框

  const add = () => {
    // eslint-disable-next-line no-plusplus
    id++;
    setList([...list, { nikename, content, id }]);
    setNikename('');
    setContent('');
  };

  const remove = (index) => {
    // id 操作数据库 ajax
    const tmpArr = [...list];
    tmpArr.splice(index, 1);
    setList(tmpArr);
  };

  const search = () => {
    setSearchList(
      list.filter(
        (item) => item.nikename.includes(searchIpt) || item.content.includes(searchIpt),
      ),
    );
  };

  const select = (index) => {
    setIsCheckFrame(true);
    setNow(index);
    setCheckContent(list[index].content);
  };

  const check = () => {
    const tmpArr = [...list];
    // tmpArr[now].content = checkContent;
    tmpArr.splice(now, 1, { ...list[now], content: checkContent });
    setList(tmpArr);
    setIsCheckFrame(false);

    // list[now].content = checkContent;
    // setList(list);
    // setIsCheckFrame(false);
  };

  return (
    <div class="div">
      <span class="span1">
        <h3>Adding Comment Area</h3>
        <input
          type="text"
          class="ipt1"
          placeholder="nickname"
          value={nikename}
          onChange={(ev) => setNikename(ev.target.value)}
        />
        <br />
        <textarea
          value={content}
          placeholder="Content"
          class="txt"
          onChange={(ev) => setContent(ev.target.value)}
          cols="30"
          rows="10"
        />
        <br />
        <button type="button" class="addbtn" onClick={add}>Add Comment</button>
      </span>
      <span class="span2">
        <h3>CURD Comment Area</h3>
        <div class="list">
          {list.length === 0 && <p>No Data</p>}
          {list.map((item, index) => (
            <div key={item.id}>
              <span class="label1">
                {item.nikename}
                :
              </span>
              <span class="label2">
                <i>{item.content}</i>
                <button type="button" class="chanBtn" onClick={() => select(index)}>Change</button>
                <button type="button" class="canBtn" onClick={() => remove(index, item.id)}>Delete</button>
              </span>
            </div>
          ))}
        </div>
        <input
          type="text"
          class="searchipt"
          value={searchIpt}
          onChange={(ev) => setSearchIpt(ev.target.value)}
        />
        <button type="button" class="searchbtn" onClick={search}>Search</button>
        <ul>
          {searchList.map((item) => (
            <li key={item.id}>
              <span>{item.nikename}</span>
              --
              <i>{item.content}</i>
            </li>
          ))}
        </ul>
        {isCheckFrame && (
        <div>
          <h4>
            You are changing&nbsp;
            {list[now].nikename}
            &apos;&ensp;s commemt.
          </h4>
          <textarea
            class="mtxt"
            value={checkContent}
            onChange={(ev) => setCheckContent(ev.target.value)}
            cols="30"
            rows="10"
          />
          <div class="modal">
            <button type="button" class="confirmbtn" onClick={check}>Confirm</button>
            <button type="button" class="can" onClick={() => setIsCheckFrame(false)}>Cancel</button>
          </div>
        </div>
        )}
      </span>
    </div>
  );
}

export default DefaultLayouts;
