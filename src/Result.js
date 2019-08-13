import React from 'react'

class Result extends React.Component {
    
    render(){
        const {champName, value, isPressed} = this.props;
        if (isPressed){
            if(champName === value){
                return (
                    <h3>Correct! Roll Another Champion!</h3>
                )
            } else {
                return (
                    <h3>Try Again!</h3>
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
