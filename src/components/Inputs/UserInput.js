import React, { useState } from 'react';
import {UserInputStyle} from '../Partials/Inputs/style.inputs';

export function LogUserInput(){
    const [ input, setInput ] = useState({
        name: "",
    });
    console.log(input)
    return (
        <UserInputStyle  type="text" onChange={(e) => setInput({name: e.target.value})} placeholder="Usuário"/>
    );
}

