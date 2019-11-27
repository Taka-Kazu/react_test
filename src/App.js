import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import { Chart } from "react-google-charts"
import ImageComponent from './ImageComponent'

class App extends Component{
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }
  render(){
    return (
      <div className="App">
        <NavBar
          onToggle={() => this.handleToggle()}
          open={this.state.open}
        />
        <ImageComponent/>
        {/* <main className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </main> */}
        <div className="Chart-style" align="center">
          <Chart
            width={600}
            height={300}
            chartType="Line"
            loader={<div>Loading Chart</div>}
            data={[
              ["id", "value"],
              [1, 100],
              [2, 120],
              [3, 130],
              [4, 90],
              [5, 70],
              [6, 30],
              [7, 80],
              [8, 100],
            ]}
            options={{
              intervals: { style: 'sticks' },
              legend: 'none',
            }}
          />
        </div>
      </div>
    );
  }
}

export default App
