import React from 'react';

import classes from './pizzaImage.module.css';
import PizzaImage from '../../assets/PizzaImage.jpg';
const pizzaImage = (props) => (
  <div className={classes.PizzaImage}>
    <img src={PizzaImage} className={classes.PizzaImg} />
  </div>
);

export default pizzaImage;
