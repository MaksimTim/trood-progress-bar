import React from 'react';
import Bar from "../bar/bar.component";

const ListItem = ({item, onePercent}) => {
  const {name, value, color} = item;
  const percent = Math.ceil((value / onePercent)*100)/100 ;

  const valueStyles = {
    marginRight: '10px'
  };

  const listItemStyles = {
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <div style={listItemStyles}>
      <Bar color={color}/>
      <span style={valueStyles}>{name}: {value} ({percent}%)</span>
    </div>
  );
};

export default ListItem;