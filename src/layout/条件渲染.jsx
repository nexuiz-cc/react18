import React, { createRef, useRef } from 'react';

function DefaultLayouts() {
  const r1 = createRef(null);
  const r2 = useRef(null);
  const r3 = null;
  const dom = () => {

  };

  return (
    <>
      <h3>ref</h3>
      <div ref={r1}>box1</div>
      <div ref={r2}>box2</div>
      <div ref={(el) = r3 >= el}>box3</div>
      <button onClick={dom} />
    </>
  );
}

export default DefaultLayouts;
