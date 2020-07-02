import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';

const StyledHeader = styled.header`
    display: flex;
    height: 3rem;
    width: 100vw;
    align-items: center;
    background-color: ${props => props.theme.colors['primary-color']};
    img {
        height: 100%;
    }
    a{
        padding: 1rem;
        color: ${props => props.theme.colors['terciary-color']};
    }
`

const Header = () => {
    const theme = useContext(ThemeContext)
    return ( 
        <StyledHeader theme={theme} >
            <img data-testid="logo" src={logo}/>
            <nav>
                <NavLink data-testid="dashboard" id="dashboard" to="/">Início</NavLink>
                <NavLink data-testid="profile" to="/login">Login</NavLink>
                <NavLink data-testid="interests" to="/cadastro">Cadastro</NavLink>
            </nav>
        </StyledHeader> 

    );
}
 
export default Header;
