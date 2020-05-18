import React from 'react'
import {User} from '../api'

const handleSubmit = async (event) => {
    event.preventDefault()
    const userInfo = {
        name: event.target.elements.name.value,
        email: event.target.elements.email.value
    }
    await User.saveNew(userInfo)
}

const UserSignUp = ({ onSubmit = handleSubmit }) => {
    return(
        <form onSubmit={onSubmit}>
            <input type="text" data-testid="name" id="name" />
            <input type="text" data-testid="email" id="email" />
            <input type="submit" data-testid="submit"/>
        </form>
    )
}

export default UserSignUp
