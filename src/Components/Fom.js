import React, { Component } from 'react'

export class Fom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             surname:'',
             topic:'react'
        }
       
    }
    eventHandlerFunc = (event)=> {
        this.setState({
            username: event.target.value
        })

    }

    surnameHandler=(event) =>{
        this.setState({
            surname:event.target.value
        })

    }
    handleTopic=(event) =>{
        this.setState({
            topic:event.target.value
        })

    }

    handleSubmit =()=>{
        alert(this.state.topic + this.state.surname +this.state.name)

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type='text' value={this.state.username} onChange={this.eventHandlerFunc}></input>
                </div>
                <div>
                    <label>Surname</label>
                    <input type='text' value={this.state.surname} onChange={this.surnameHandler}></input>
                </div>
                <div>
                    <select value ={this.state.topic} onChange={this.handleTopic}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Fom
