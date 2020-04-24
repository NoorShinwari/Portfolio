import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    name: 'Noor '
  };

  usernameChangeHandler = event => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <h1>My First react assignment</h1>
        <UserInput
          changed={this.usernameChangeHandler}
          currentName={this.state.name}
        />
        <UserOutput userName={this.state.name} />
        <UserOutput userName={this.state.name} />
        <UserOutput userName={this.state.name} />
      </div>
    );
  }
}

export default App;
