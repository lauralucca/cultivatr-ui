import React, { Component } from 'react'

class UserSignUp extends Component{
    
    handleSubmit = () => { }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input role="name"/>
                <input role="email"/>
                <input type="submit" role="submit" />
            </form>
        )
    }
}

export default UserSignUp