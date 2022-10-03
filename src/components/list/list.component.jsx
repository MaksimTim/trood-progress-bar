import React from 'react';
import ListItem from "../list-item/list-item";

const List = ({items, onePercent}) => {

  const listStyles = {
    display: 'flex',
  };

  return (
    <div style={listStyles}>
      {items.map(item => (
        <ListItem item={item} onePercent={onePercent} key={item.name}/>
      ))}
    </div>
  );
};

export default List;