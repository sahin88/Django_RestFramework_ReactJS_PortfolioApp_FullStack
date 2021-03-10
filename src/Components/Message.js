import React, {Component} from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state={
            message:'Welcome to the Home Page',
            
        }
    }

    changeMessage(){
        this.setState({
            message:'Thanks you for your Subscription'
        })
    }

    render() {
    return(
         <div>
    
                 <h1>{this.state.message}</h1>
                 <button onClick={()=> this.changeMessage()}>Subscribe</button>

            </div>
    )

    }
}


export default Message