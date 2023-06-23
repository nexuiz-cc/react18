import { useState, React } from 'react';
import A from './views/A';

function App() {
  const [bl, setBl] = useState(false);
  const [dataApp, setDataApp] = useState('app数据');
  return (
    <>
      <h3>生命周期</h3>
      {/* <div>{dataApp}</div> */}
      <button type="button" onClick={() => setBl(!bl)}>按钮</button>
      <button type="button" onClick={() => setDataApp(Math.random())}>修改自身数据</button>
      {bl && <A dataApp={dataApp} />}
    </>
  );
}

export default App;
