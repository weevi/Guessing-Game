import React from 'react'
import './App.css';

class Result extends React.Component {
    
    render(){
        if (this.props.parentTextBoxValue !== ''){
            if(this.props.nameToCompare === this.props.parentTextBoxValue){
                return (
                    <div className="answer-wrap" >
                         <h3 className="answer">CORRECT! ROLL ANOTHER CHAMPION!</h3>
                    </div>
                )
            } else {
                return (
                    <div className="answer-wrap">
                         <h3 className="answer">TRY AGAIN!</h3>
                         <h4>Start with a capital letter</h4>
                    </div>
                )
            }
        } else {
            return (
                <h3> </h3>
            )
        }
           
    }
    }


export default Result;
