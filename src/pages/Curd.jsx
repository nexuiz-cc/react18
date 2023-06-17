import React from 'react';
import './curd.scss';
import { useState } from 'react';
import { Table, Input, Button, Space, Modal, Form } from 'antd';
const { TextArea } = Input;


const Curd = (props) => {
  const [list, setList] = useState([
    {
      id: 1,
      name: 'Carrie Carter',
      address: '607 Rothesay Ave',
      country:'USA',
      tel:'012-3456-7890'
    },
    {
      id: 2,
      name: 'Larue Morissette',
      address: '1348 Weber St E',
      country:'UK',
      tel:'031-7643-4567'
    },
  ]);

  const [searchIpt, setSearchIpt] = useState('');
  const [searchList, setSearchList] = useState([]);

  const [isCheckFrame, setIsCheckFrame] = useState(false); //modal
  const [now, setNow] = useState(0); //list数据里面要被修改的索引
  const [checkContent, setCheckContent] = useState(''); //修改是的输入框
  const [form] = Form.useForm();
  let id =2;
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: '5%',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: '17%',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      width: '10%',
    },
    {
      title: 'Phone Number',
      dataIndex: 'tel',
      width: '20%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: '20%',
    },
    {
      title: () => (
        <Space>
          <Input
            type="text"
            value={searchIpt}
            style={{ width: 200 }}
            onChange={(ev) => setSearchIpt(ev.target.value)}
          />
          <Button type="primary" onClick={search}>
            Search
          </Button>
        </Space>
       
      ),
      render: (text, record, index) => (
        <Space>
          <Button type="primary" onClick={() => select(index)}>
            Change
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => remove(index, record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
      width: '25%',
    },
  ];

  const add = ({ name, address,country,tel }) => {
    id++;
    setList([...list, { name, address,country,tel, id }]);
    form.setFieldsValue({ name: '' });
    form.setFieldsValue({ address: '' });
    form.setFieldsValue({ country: '' });
    form.setFieldsValue({ tel: '' });
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
          item.name.includes(searchIpt) || 
          item.address.includes(searchIpt)||
          item.country.includes(searchIpt)||
          item.tel.includes(searchIpt)
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
          <table className='gry'>
            <tr >
              <th>Name</th>
              <th>Country</th>
              <th>Phone Number</th>
              <th>Address</th>
              </tr>
            <tr>
              <td>
                <Form.Item name="name" rules={[ {  required: true,  message: 'Name is required.', }, ]}>
                  <Input placeholder='Enter your name'  className='ipt'/>
                </Form.Item>
              </td>
              <td >
                <Form.Item   name="country" rules={[{ required: true, message: 'Country is required.', },]} >
                  <Input placeholder='Enter your country'  className='ipt'/>
                </Form.Item>
              </td>
              <td >
                <Form.Item name="tel"rules={[{ required: true, message: 'Phone Number is required.', },]} >
                  <Input placeholder='Enter your tel'  className='ipt2'/>
                </Form.Item>
              </td>
              <td >
                <Form.Item name="address" rules={[{ required: true, message: 'Address is required.',},]}>
                  <Input  className='address' placeholder='Enter your address'/> 
                </Form.Item>
              </td>
            </tr>
          </table>

          <Button type="primary"  className="confirmbtn" htmlType="submit">
            Confirm
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
          title={`正在修改 ${list[now].name} 的留言`}
          open={isCheckFrame}
          onCancel={() => setIsCheckFrame(false)}
          onOk={check}
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
