import React from 'react';

const Bar = ({color}) => {

  const circleStyles = {
    height: '15px',
    width: '7px',
    borderRadius: '7px',
    backgroundColor: color,
    margin: '1px'
  }

  return (
    <div style={circleStyles}></div>
  );
};

export default Bar;