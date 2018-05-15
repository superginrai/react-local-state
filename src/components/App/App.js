import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Cory',
        city: 'Minneapolis'
      }
    };


    // makes 'this' in handleChange the same as 'this' in the contructor
    //this.handleChange = this.handleChange.bind(this);

  }

  handleChange = (event) => {
    console.log('event.target', event.target.value);

    //this.state.user = event.target.value;
    this.setState({ name: event.target.value });
  };


  cityChange = (event) => {
    console.log('event.target', event.target.value);

    //this.state.user = event.target.value;
    this.setState({ city: event.target.value });
  };

  logPerson = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        The current user is {this.state.user.name} and they are from {this.state.user.city}
        <input onChange={this.handleChange} placeholder="User Name" />
        <input onChange={this.cityChange} placeholder="City" />
        <button onClick={this.logPerson}>CLICK MEH</button>
      </div>
    );
  }
}

export default App;
