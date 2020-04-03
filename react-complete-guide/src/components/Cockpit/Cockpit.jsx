import React from 'react';

import classes from './Cockpit.module.css';

const cockpit = props => {
  const assignClasses = [];
  let btnClasses = '';
  if (props.showPersons) {
    btnClasses = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignClasses.join(' ')}>This is really working!</p>
      <button className={btnClasses} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
