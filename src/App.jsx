/* eslint-disable no-undef */
import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

function App() {
  const r1 = useRef(null);

  const initEcharts = () => {
    // 实例化
    const instance = echarts.init(r1.current);

    // 显示loading
    instance.showLoading();
    // 加载空坐标轴
    instance.setOption({
      xAxis: {
        type: 'category',
        data: [],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [],
          type: 'bar',
        },
      ],
    });

    // 模拟加载数据
    let res = {};
    setTimeout(() => {
      res = {
        data1: [
          '衬衫',
          '羊毛衫',
          '雪纺衫',
          '裤子',
          '高跟鞋',
          '袜子',
          '原味袜子',
        ],
        data2: [120, 200, 150, 80, 70, 110, 1130],
      };

      instance.hideLoading();

      // 渲染
      instance.setOption({
        xAxis: {
          type: 'category',
          data: res.data1,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: res.data2,
            type: 'bar',
          },
        ],
      });

      // 添加事件

      instance.on('click', (params) => {
        console.log('click', params);
      });
    }, 2000);
  };

  useEffect(() => {
    initEcharts();
  }, []);

  return (
    <>
      <h3>大屏可视化-ehcarts</h3>
      <div ref={r1} style={{ height: 300 }} />
    </>
  );
}
export default App;
