import React from 'react'
import {User} from '../api'



const handleSubmit = async (event) => {
    event.preventDefault()
    const userInfo = {
        name: event.target.elements.name.value,
        email: event.target.elements.email.value
    }
    event.target.reset()
    await User.saveNew(userInfo)

}

const UserSignUp = ({ onSubmit = handleSubmit }) => {
    return(
        <form onSubmit={onSubmit} style={{"margin": "0 auto", "width": "40vw"}}>
            <h1 className="h3 mb-3 font-weight-normal">Cultivatr</h1>
            <h2>🌱🌿🍀</h2>
            <div className="form-group">
                <input 
                    type="text" 
                    id="name" 
                    data-testid="name" 
                    placeholder="Nome" 
                    className="form-control" />
                <input 
                    type="text" 
                    id="email" 
                    data-testid="email" 
                    placeholder="E-mail"
                    className="form-control" />
            </div>    
            <input 
                type="submit" 
                data-testid="submit" 
                label="Salvar"
                className="btn btn-primary btn-lg btn-block"/>
        </form>
    )
}

export default UserSignUp
