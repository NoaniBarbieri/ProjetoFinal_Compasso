import React, {useState} from 'react';
import { UserInputStyle}  from './style.inputs';
import {PassInputStyle} from './style.inputs';
import { useAuth } from '../../providers/authUser'

export function LogUserInput(){
    const { user, setUser } = useAuth();
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user)
    return (
        <UserInputStyle  type="text" onChange={(e) => setUser({name: e.target.value})} placeholder="Usuário"/>
    );
}


export function LogPassInput(){
    const [ aux, setAux ] = useState({
        pass: "",
    });
    console.log(aux)
    return (
        <PassInputStyle  type="password" onChange={(e) => setAux({pass: e.target.value})} placeholder="Senha"/>
    );
}


