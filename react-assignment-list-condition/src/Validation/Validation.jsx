import React from 'react';
const validation = props => {
  let validationMessage = <p>Test long enough</p>;

  if (props.inputLength <= 5) {
    validationMessage = <p>Text too short!</p>;
  }
  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default validation;

// {props.inputLength > 5 ? <p>Test long enough</p> : <p>Text too short!</p>}
//Another method
