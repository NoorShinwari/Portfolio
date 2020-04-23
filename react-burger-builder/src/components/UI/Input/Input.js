import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
  let inputElement = null;
  switch (props.elementtype) {
    case 'input':
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementconfig}
          value={props.value}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={classes.InputElement}
          {...props}
          value={props.value}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select className={classes.InputElement} value={props.value}>
          {props.elementconfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementconfig}
          value={props.value}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.lable}</label>
      {inputElement}
    </div>
  );
};

export default input;
