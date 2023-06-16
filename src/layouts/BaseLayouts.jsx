import { Button, DatePicker } from "antd";

const BaseLayouts = ({ children }) => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <h3>antd</h3>
      <Button type="primary">Primary Button</Button>
      <DatePicker onChange={onChange} />
    </>
  );
};

export default BaseLayouts;
