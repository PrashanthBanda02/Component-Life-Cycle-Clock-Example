import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showclock: false}

  onToggleClock = () => {
    this.setState(prevState => ({showclock: !prevState.showclock}))
  }

  render() {
    const {showclock} = this.state
    return (
      <div className="app-container">
        <button
          onClick={this.onToggleClock}
          type="button"
          className="toggle-button"
        >
          {showclock ? 'Hide Clock' : 'Shpow Clocck'}
        </button>
        {showclock && <Clock />}
      </div>
    )
  }
}

export default App
