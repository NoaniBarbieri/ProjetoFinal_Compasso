import React from 'react';
import { UserInputStyle}  from './style.inputs';
import {PassInputStyle} from './style.inputs';
import { useAuth } from '../../providers/authUser'
import { usePass } from '../../providers/authPassword'

export const LogUserInput = React.forwardRef((props,ref) => {
    const { user, setUser } = useAuth();
    localStorage.setItem('user', user.name);
    setUser(user)
    return (
        <UserInputStyle  type="text"  ref={ref} {...props} onChange={(e) => setUser({name: e.target.value})} placeholder="Usuário"/>
    );
})


export const  LogPassInput = React.forwardRef((props,ref) => {
    const { pass, setPass } = usePass();
    localStorage.setItem('pass', pass.password);
    setPass(pass)
    return (
        <PassInputStyle  type="password" ref={ref} {...props} onChange={(e) => setPass({password: e.target.value})} placeholder="Senha"/>
    );
})


