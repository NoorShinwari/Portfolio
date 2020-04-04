import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.jsx] getDerivedStateFromProps');
    return state;
  }
  componentWillReceiveProps(props) {
    console.log('[Persons.jsx] componentWillRecieveProps', props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.jsx] shouldComponentUpdate');

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Person.jsx] getSnapshotBeforeUpdate');
    return { messege: 'snapshot!' };
  }

  // componentWillUpdate() {
  //   console.log('Person.jsx componentWillUpdate');
  //}

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Person.jsx] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[Persons.jsx] rendereing...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
