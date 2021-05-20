import React, { Component } from 'react'

//*********************** Class component **********************/


class Welcome extends Component
{
    render (){
        return <h3>
        Welcom to Class component
        <br></br>
        --{this.props.name} as Marvels {this.props.heroName}--
        </h3>    
    }
} 
export default Welcome