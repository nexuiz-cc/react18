import { useState } from 'react';
import { Table, Input, Button, Space, Modal, Form } from 'antd';
const { TextArea } = Input;
import React from 'react';

let id = 2;
const Curd = (props) => {
  const [list, setList] = useState([
    {
      id: 1,
      nikename: '胡彦斌',
      content: '西湖区湖底公园1号',
    },
    {
      id: 2,
      nikename: '吴彦祖',
      content: '西湖区湖底公园2号',
    },
  ]);

  // const [nikename, setNikename] = useState("");
  // const [content, setContent] = useState("");
  const [searchIpt, setSearchIpt] = useState('');
  const [searchList, setSearchList] = useState([]);

  const [isCheckFrame, setIsCheckFrame] = useState(false); //modal
  const [now, setNow] = useState(0); //list数据里面要被修改的索引
  const [checkContent, setCheckContent] = useState(''); //修改是的输入框
  const [form] = Form.useForm();

  const columns = [
    {
      title: '艾迪',
      dataIndex: 'id',
      key: 'name',
    },
    {
      title: '昵称',
      dataIndex: 'nikename',
    },
    {
      title: '内容',
      dataIndex: 'content',
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
          <Button type="primary" onClick={() => select(index)}>
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

  const add = ({ nikename, content, event }) => {
    id++;
    setList([...list, { nikename, content, id }]);
    form.setFieldsValue({ nikename: '' });
    form.setFieldsValue({ content: '' });
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

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <h3>TO-DO-LIST|curd</h3>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Form
          form={form}
          preserve={true}
          onFinish={add}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="昵称"
            name="nikename"
            rules={[
              {
                required: true,
                message: '昵称为必传参数',
              },
            ]}
          >
            <Input placeholder="输入昵称" />
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[
              {
                required: true,
                min: 15,
              },
            ]}
          >
            <TextArea rows={4}></TextArea>
          </Form.Item>

          <Button type="primary" htmlType="submit">
            增
          </Button>
        </Form>

        <Table
          dataSource={list}
          columns={columns}
          rowKey={(record) => record.id}
        />
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
      {isCheckFrame && (
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
      )}
    </>
  );
};

export default Curd;
