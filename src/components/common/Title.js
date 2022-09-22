import React from 'react';

const Title = ({ title, classType }) => {
  return <div className={`title title--${classType}`}>{title}</div>;
};

export default Title;
