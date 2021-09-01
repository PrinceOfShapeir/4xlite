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
        <div className="App">     
          <h4>Play Music</h4>
              <iframe width={this.state.splashVisible ? "250" : "50"} height={this.state.splashVisible ? "250" : "50"} src="https://www.youtube-nocookie.com/embed/videoseries?list=PL18D349C72C3BB0D5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              {this.state.splashVisible && 
              
                (

                <p>
                    <button type='button' onClick={this.toggleSplash}>
                        Just take me to the game already!
                    </button>
                </p>

                )
              
              }
        </div>
      </>


    );
  }
}

export default App;
