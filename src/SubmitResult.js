import React, { Component } from 'react';
import './App.css';


class SubmitResult extends Component {
  
constructor(props){
    super(props);
    this.state={TextBoxValue: ''}
}   

  SubmitValue = (e) => {
     this.props.handleData(this.state.TextBoxValue);
     console.log(this.state.TextBoxValue);
  }
    
   onChange=(e)=>{
this.setState({TextBoxValue: e.target.value})
   } 
  render() {
    return (
      <div>
        <input  className="input" type="text" name="TextBox"  onChange={this.onChange}/>
        <button  className="submit" onClick={this.SubmitValue}>Enter</button>
      </div>
    );
  }
}

export default SubmitResult;