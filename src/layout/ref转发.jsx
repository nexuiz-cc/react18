import { useRef } from 'react';
import A from './A';

function DefaultLayouts(props) { // eslint-disable-line no-unused-vars
  const r1 = useRef(null);
  return (
    <>
      <h3>ref转发</h3>
      <A ref={r1} />
      <button
        type="button"
        onClick={() => {
          console.log(r1.current);
        }}
      >
        Button
      </button>
    </>
  );
}

export default DefaultLayouts;
