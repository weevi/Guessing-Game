import React from 'react';
import './App.css';
import { championFilter } from './championFilter'
import Result from './Result'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});


class App extends React.Component {
    constructor(){
      super();
      this.state = {
        value: '',
        champName:'',
        champIcon:'',
        isPressed: false,
        InputValue: ""
      };
     
      this.champArr = [];
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
      event.preventDefault();
      this.setState({value: event.target.value})
    }

    handleSubmit(event) {
      event.preventDefault();
      this.setState({isPressed:true})
      return this.state.value;
    }

    getArray() {
      this.champArr = championFilter();
      this.setState({champIcon: this.champArr[6].value})
      this.setState({champName: this.champArr[2].value})
      this.setState({value: ''})
      this.setState({isPressed: false})
    }

    SubmitValue = (e) => {
      this.setState({InputValue: e})
   }

      render() {
        return(
          <div className="main-wrap">
            <div className="wrap">
              <div className="wrap2">
              <input className = "submit" type="submit" value="Roll a Champ" onClick={(e) => this.getArray(e)}/>
                
                 <div className="img-wrap">
                    <img src={this.state.champIcon}/>
                 </div>

            <form onSubmit={this.handleSubmit}>
              <input className="input" value={this.state.value} onChange={this.handleChange} type="text" name="name" placeholder="ENTER HERE"/>
              <input className = "submit" type="submit" value="Submit" onClick={this.SubmitValue}/>
            </form>

          <Result champName = {this.state.champName} value={this.state.value} isPressed={this.state.isPressed} />
          </div>
          </div>
          </div>
            )
           }
          }
    
    export default App;
