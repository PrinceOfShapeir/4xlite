import './App.css';
import React, { Component } from "react";
import AppSplash from './appSplash';
import GameScreen from './components/GameScreen';


class App extends Component {

  constructor() {
    super();
    this.state = {
      splashVisible: true
    }

    this.toggleSplash = () => {
      this.setState({
        splashVisible: !this.state.splashVisible
      })
    }
  }

  render() {
    return (
      <>
        {this.state.splashVisible && (<AppSplash toggleSplash={this.toggleSplash} />)}
        {!this.state.splashVisible && <GameScreen />}
      </>


    );
  }
}

export default App;
