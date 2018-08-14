import React from 'react';
import './UserInput.css';

const UserInput = (props) => {

  return(
    <div class="input-field">
      <input onChange={props.userInputHandler} value={props.userName}type="text"/>
    </div>
  )
}

export default UserInput;