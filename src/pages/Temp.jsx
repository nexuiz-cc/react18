import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import { Button, Input, Space, Table ,Form,Modal} from 'antd';
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import "./curd.scss";

const Temp = (props) => {
  const [data, setData] = useState([
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

  let id=2;
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [checkName, setCheckName] = useState(''); 
  const [checkCountry, setCheckCountry] = useState(''); 
  const [checkTel, setCheckTel] = useState(''); 
  const [checkAddress, setCheckAddress] = useState(''); 
  const [isCheckFrame, setIsCheckFrame] = useState(false); //modal
  const [now, setNow] = useState(0); //list数据里面要被修改的索引
  const select = (index) => {
    setIsCheckFrame(true);
    setNow(index);
    setCheckName(data[index].name);
    setCheckCountry(data[index].country);
    setCheckTel(data[index].tel);
    setCheckAddress(data[index].address);
  };
  const check = () => {
    let tmpArr = [...data];
    tmpArr.splice(now, 1, { ...data[now], name: checkName,country:checkCountry,tel:checkTel,address:checkAddress });
    setData(tmpArr);
    setIsCheckFrame(false);
  };

  const remove = (index, id) => {
    //id 操作数据库 ajax
    let tmpArr = [...data];
    tmpArr.splice(index, 1);
    setData(tmpArr);
  };
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '14%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      width: '15%',
      ...getColumnSearchProps('age'),
    },
    {
      title: 'Tel',
      dataIndex: 'tel',
      key: 'tel',
      ...getColumnSearchProps('tel'),
      width: '20%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      width: '20%',
    },
    {
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
    setData([...data, { name, address,country,tel, id }]);
    form.setFieldsValue({ name: '' });
    form.setFieldsValue({ address: '' });
    form.setFieldsValue({ country: '' });
    form.setFieldsValue({ tel: '' });
  };
  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
  <Form
    form={form}
    preserve={true}
    onFinish={add}
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
    dataSource={data}
    columns={columns}
    rowKey={(record) => record.id}
  />
  
</Space>
  return (
    <>
      <h3>TO-DO-LIST|curd</h3>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Form
          form={form}
          preserve={true}
          onFinish={add}
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
            Add Data
          </Button>
        </Form>

   
      </Space>
      <Table columns={columns} dataSource={data} />
     
      {isCheckFrame && (
        <Modal
     //${data[now].name}
          open={isCheckFrame}
          okButtonProps={{ className: 'okbtn' }}
          onCancel={() => setIsCheckFrame(false)}
          onOk={check}
        >
          <table>
            <tr>
              <td colSpan={2}>You are changing <span className='modalspan'>&nbsp;{data[now].name}&nbsp;</span>'s info.</td>
            </tr>
            <tr>
              <td>&nbsp;Name</td>
              <td>&nbsp;Country</td>
            </tr>
            <tr>
              <td><input type="text" className='modalIpt' onChange={(ev) => setCheckName(ev.target.value)} placeholder={checkName}/></td>
              <td><input type="text" className='modalIpt' onChange={(ev) => setCheckCountry(ev.target.value)} placeholder={checkCountry}/></td>
            </tr>
            <tr>
              <td>&nbsp;Phone Number</td>
              <td>&nbsp;Address</td>
            </tr>
            <tr>
            <td><input type="text" className='modalIpt' onChange={(ev) => setCheckTel(ev.target.value)} placeholder={checkTel}/></td>
              <td><input type="text" className='modalIpt' onChange={(ev) => setCheckAddress(ev.target.value)} placeholder={checkAddress}/></td>
            </tr>
          </table>
        </Modal>
      )}
    </>
  );
  // return ;
  
};
export default Temp;