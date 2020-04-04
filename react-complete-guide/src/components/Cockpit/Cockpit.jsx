import React, { useEffect } from 'react';

import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.jsx] useEffect');
    //Http request
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
  }, []); //[props.persons] if we want to run this when only something changes in persons
  //an Empty array says react that this no dependency and it should rerun when dependency changes
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

export default Cockpit;
