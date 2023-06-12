import { useState } from 'react';

function DefaultLayouts(props) { // eslint-disable-line no-unused-vars
  const [ipt, setIput] = useState('bmw');
  return (
    <>
      <h3>受控元素</h3>
      {/*  view->model */}
      <input
        type="text"
        value={ipt}
        name=""
        id=""
        onChange={(ev) => setIput(ev.target.value)}
      />
      <h3>非受控元素</h3>
      {/*  model->view */}
      <input type="text" name="" id="" />
    </>
  );
}

export default DefaultLayouts;
