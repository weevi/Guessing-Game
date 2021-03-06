import React from 'react';
import './App.css';
import { championFilter } from './championFilter'
import Result from './Result'
import SubmitResult from './SubmitResult'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      champName: '',
      champIcon: '',
      isPressed: false,
      parentTextBoxValue: ''
    };

    this.champArr = [];
  }

  handleParentData = (e) => {
    this.setState({ parentTextBoxValue: e });
    this.parentTextBoxValue = '';
    this.setState({})
  }

  getArray() {
    this.champArr = championFilter();
    this.setState({ champIcon: this.champArr[6].value })
    this.setState({ champName: this.champArr[2].value })
    this.setState({ isPressed: false });
    this.setState({ parentTextBoxValue: '' });
  }

  render() {
    return (
      <div className="main-wrap">
        <div className="wrap">
          <div className="wrap2">
            <div className="title-wrap" >
              <div className="title"><span>Guess what League of Legends champion this is!</span></div>
            </div>
            <input className="submit" type="submit" value="Roll" onClick={(e) => this.getArray(e)} />
            <div className="img-wrap">
              <img src={this.state.champIcon} />
            </div>
            <SubmitResult handleData={this.handleParentData} />
            <Result parentTextBoxValue={this.state.parentTextBoxValue} nameToCompare={this.state.champName} />

          </div>
        </div>
        <div className="p-wrap"><p>work in progress</p></div>
      </div>
    )
  }
}

export default App;
