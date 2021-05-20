import React, { Component } from 'react'

//*********************** Class component using State **********************/


class Message extends Component
{
    constructor ()
    {
        super ()
            this.state = 
            {

                message: 'Welcome visitor'
            }
    }


changeMessage ()
{
    this.setState (
        
        { message: '  State changed' }
             )

}

    render () {
        return(
            <div>
          <h3>      {this.state.message}
          <br></br>
        <button onClick ={ () => this.changeMessage() } > Change State 
        </button>
        <br></br>
        </h3>
            </div>
        )    
    }
} 
export default Message