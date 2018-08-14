import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput'
import UserOutput from './UserOutput'


class App extends Component {


  state = {
      username: 'Philipp'
    }


  userInputHandler = (event) => {
      this.setState({
        username: event.target.value
      })
  }

  render() {
    return (
      <div className="App">
        <UserInput userName={this.state.username} userInputHandler={this.userInputHandler}/>
        <UserOutput userName={this.state.username}/>

      </div>
    );
  }
}

export default App;
