import { forwardRef } from 'react';

function A(props, ref) {
  return (
    <>
      <h3>A</h3>
      <input ref={ref} type="text" name="" id="" />
    </>
  );
}

export default forwardRef(A);
