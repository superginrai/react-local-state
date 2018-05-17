import React, { Component } from 'react';

const emptyUser = {
  name: '',
  city: '',
  zip: '',
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: emptyUser,

    };
  }

  // makes 'this' in handleChange the same as 'this' in the contructor
  //this.handleChange = this.handleChange.bind(this);  <-- old way!!!

  // }

  // handleChange = (event) => {
  //   console.log('event.target', event.target.value);

  //this.state.user = event.target.value;
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       name: event.target.value,
  //     }
  //   });
  // };




  handleChangeFor = propertyName => event => {
    this.setState({
      user: {
        ...this.state.user,
        [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      user: emptyUser,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          The current user is {this.state.user.name} and they are from {this.state.user.city}
          <input value={this.state.user.name} onChange={this.handleChangeFor('name')} placeholder="User Name" />
          <input value={this.state.user.city} onChange={this.handleChangeFor('city')} placeholder="City" />
          <input value={this.state.user.zip} onChange={this.handleChangeFor('zip')} placeholder="Zip Code" />
          <input type="submit" value="click meh!" />
        </form>
        <ul>
          {this.userArray = this.state.user.map(user => <li key={user.name}>name: {user.city} diameter: {user.zip}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
