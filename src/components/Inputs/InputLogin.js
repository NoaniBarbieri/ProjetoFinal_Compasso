import React from 'react';
import { UserInputStyle}  from './style.inputs';
import {PassInputStyle} from './style.inputs';
import { useAuth } from '../../providers/authUser'
import { usePass } from '../../providers/authPassword'

export function LogUserInput(){
    const { user, setUser } = useAuth();
    localStorage.setItem('user', user.name);
    setUser(user)
    return (
        <UserInputStyle  type="text" onChange={(e) => setUser({name: e.target.value})} placeholder="Usuário"/>
    );
}


export function LogPassInput(){
    const { pass, setPass } = usePass();
    localStorage.setItem('pass', pass.password);
    setPass(pass)
    return (
        <PassInputStyle  type="password" onChange={(e) => setPass({password: e.target.value})} placeholder="Senha"/>
    );
}


