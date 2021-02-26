// Code DigitalClicker Component Here
//In the components/DigitalClicker.js file, create a DigitalClicker React component.
import React, { Component } from 'react';

export default class DigitalClicker extends Component {

  constructor() {
    super();
    //This component has an initial state property called timesClicked, which is initially defined as 0.
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
          //Whenever the button is clicked, update the state by incrementing the timesClicked by 1.
        timesClicked: previousState.timesClicked + 1
      }
    })
  }

  //The component renders out a button with a label that shows the timesClicked value. This means that, at the start, your button should just say 0.
  render() {
    return(
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      )
  }

} 