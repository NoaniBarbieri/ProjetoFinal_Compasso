import React,{ useState } from 'react';
import { InputSearch } from './style.inputs'
import {  useNavigate } from 'react-router-dom';

export function InputFooter(){

    const [userHome, setUserHome] = useState('');
    const navigate = useNavigate();

    return (
        <InputSearch>
            <input type={'text'} onChange={e => setUserHome(e.target.value)} placeholder={'Buscar usuários'} onKeyPress={event => {
            if (event.key === 'Enter') {
                if (userHome) {
                    navigate(('/SearchPage'), {userData:userHome});
                }
            }
            }}></input>
        </InputSearch>
    );
}