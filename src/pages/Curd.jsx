import { useState } from "react";
import { Table, Input, Button, Space, Modal } from "antd";
const { TextArea } = Input;

let id = 2;
const Curd = (props) => {
  const [list, setList] = useState([
    {
      id: 1,
      nikename: "胡彦斌",
      content: "西湖区湖底公园1号",
    },
    {
      id: 2,
      nikename: "吴彦祖",
      content: "西湖区湖底公园2号",
    },
  ]);

  const [nikename, setNikename] = useState("");
  const [content, setContent] = useState("");
  const [searchIpt, setSearchIpt] = useState("");
  const [searchList, setSearchList] = useState([]);

  const [isCheckFrame, setIsCheckFrame] = useState(false); //modal
  const [now, setNow] = useState(0); //list数据里面要被修改的索引
  const [checkContent, setCheckContent] = useState(""); //修改是的输入框

  const columns = [
    {
      title: "艾迪",
      dataIndex: "id",
      key: "name",
    },
    {
      title: "昵称",
      dataIndex: "nikename",
    },
    {
      title: "内容",
      dataIndex: "content",
    },
    {
      title: () => (
        <Space>
          <Input
            type="text"
            value={searchIpt}
            style={{ width: 150 }}
            onChange={(ev) => setSearchIpt(ev.target.value)}
          />
          <Button type="primary" onClick={search}>
            查
          </Button>
        </Space>
      ),
      render: (text, record, index) => (
        <Space>
          <Button type="primary" warning onClick={() => select(index)}>
            改
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => remove(index, record.id)}
          >
            删
          </Button>
        </Space>
      ),
    },
  ];

  const add = () => {
    id++;
    setList([...list, { nikename, content, id }]);
    setNikename("");
    setContent("");
  };

  const remove = (index, id) => {
    //id 操作数据库 ajax
    let tmpArr = [...list];
    tmpArr.splice(index, 1);
    setList(tmpArr);
  };

  const search = () => {
    setSearchList(
      list.filter(
        (item) =>
          item.nikename.includes(searchIpt) || item.content.includes(searchIpt)
      )
    );
  };

  const select = (index) => {
    setIsCheckFrame(true);
    setNow(index);
    setCheckContent(list[index].content);
  };

  const check = () => {
    let tmpArr = [...list];
    tmpArr.splice(now, 1, { ...list[now], content: checkContent });
    setList(tmpArr);
    setIsCheckFrame(false);
  };

  return (
    <>
      <h3>TO-DO-LIST|curd</h3>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Input
          placeholder="输入昵称"
          value={nikename}
          onChange={(ev) => setNikename(ev.target.value)}
        />
        <TextArea
          rows={4}
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
        ></TextArea>
        <Button type="primary" onClick={add}>
          增
        </Button>

        <Table dataSource={list} columns={columns} />
      </Space>

      <ul>
        {searchList.map((item) => (
          <li key={item.id}>
            <span>{item.nikename}</span>
            --
            <i>{item.content}</i>
          </li>
        ))}
      </ul>

      <Modal
        title={`正在修改${list[now].nikename}的留言`}
        open={isCheckFrame}
        onOk={check}
        onCancel={() => setIsCheckFrame(false)}
      >
        <TextArea
          rows={4}
          value={checkContent}
          onChange={(ev) => setCheckContent(ev.target.value)}
        ></TextArea>
      </Modal>
    </>
  );
};

export default Curd;
