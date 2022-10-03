import React from 'react';
import List from "../list/list.component";
import Bar from "../bar/bar.component";

const ProgressBar = ({items}) => {
  const style = {
    display: 'flex'
  };

  const totalSum = items.reduce((acc, item) => acc + item.value, 0);
  const onePercent = totalSum / 100;

  return (
    <div>
      <div style={style}>
        {items.map(item => {
          const percent = Math.ceil(item.value / onePercent);
          const newArr = []
          for (let i = 0; i < percent; i++) {
            newArr.push(i)
          }
          return newArr.map(val => <Bar color={item.color} key={item.value + val}/>)
        })}
      </div>
      <List items={items} onePercent={onePercent}/>
    </div>
  );
};

export default ProgressBar;