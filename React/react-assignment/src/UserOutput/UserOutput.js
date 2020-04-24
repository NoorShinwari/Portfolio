import React from 'react';

import './UserOutput.css';

const userOutput = props => {
  return (
    <div className="UserOutput">
      <h1>UserName: {props.userName} </h1>
    </div>
  );
};

export default userOutput;
