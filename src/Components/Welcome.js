import React, {Component} from 'react'


class Welcome extends Component {
    render(){
        const{name, surname}=this.props
    return <h1> Welcome  to the reactJs{name}</h1>
    }
}


export default Welcome;