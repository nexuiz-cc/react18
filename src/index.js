import { createRoot } from 'react-dom/client';
import DefaultLayouts from './layout/DefaultLayout';
import React from 'react';
const root = createRoot(document.getElementById('root'));
// root.render(jsx | string | number | 组件调用)
root.render(
  <DefaultLayouts
    str="title"
    num={12}
    arr={['a', 'b', 'c']}
    obj={{ a: 1, b: 2 }}
  />
);
