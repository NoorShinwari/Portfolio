import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/WithClass';
import classes from '../Person/Person.module.css';

class Person extends Component {
  render() {
    console.log('[Person.jsx] rendering....');
    return (
      // <div className="Person" style={style}>
      // <div className={classes.Person}>
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
      // </div>
    );
  }
}

export default withClass(Person, classes.Person);
