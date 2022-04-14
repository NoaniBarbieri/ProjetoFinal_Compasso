import React from 'react'
import { OutButtonStyle } from './style.buttons';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../providers/authUser';
import { usePass } from '../../providers/authPassword';

const LogoutButtonSearch = () => {
    const { setUser } = useAuth();
    const { setPass } = usePass();
    const navigate = useNavigate();
    const logoutFunction = () =>{
        localStorage.removeItem('user')
        setUser({user: ''})
        localStorage.removeItem('pass')
        setPass({password: ''})
        navigate('/')
    }
    return (
        <OutButtonStyle type="submit" onClick={logoutFunction}>Sair</OutButtonStyle>
    );
}

export default LogoutButtonSearch