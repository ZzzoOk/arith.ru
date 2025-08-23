import React from 'react';

const Input = (props) => {
  return <input onChange={(e) => props.setValue(e.target.value)} {...props} />;
};

export default Input;
