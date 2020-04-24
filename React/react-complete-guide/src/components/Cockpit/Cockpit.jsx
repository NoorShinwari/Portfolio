import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';
import authContext from '../../context/auth-context';
const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    console.log('[Cockpit.jsx] useEffect');
    //Http request
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.jsx] cleanup work in useEffect');
    };
  }, []); //[props.persons] if we want to run this when only something changes in persons
  //an Empty array says react that this no dependency and it should rerun when dependency changes
  console.log(authContext.authenticated);
  useEffect(() => {
    console.log('[Cockpit.jsx] 2nd useEffect');
    return () => {
      console.log('[Cockpit.jsx] cleanup work in 2nd useEffect');
    };
  });
  const assignClasses = [];
  let btnClasses = '';
  if (props.showPersons) {
    btnClasses = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignClasses.join(' ')}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClasses} onClick={props.clicked}>
        Toggle Persons
      </button>

      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);
