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
    console.log('[Persons.jsx] getSnapshotBeforeUpdate');
    return { messege: 'snapshot!' };
  }

  // componentWillUpdate() {
  //   console.log('Person.jsx componentWillUpdate');
  //}

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.jsx] componentDidUpdate');
    console.log(snapshot);
  }
  componentWillUnmount() {
    console.log('[Persons.jsx] componentWillUnmount');
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
