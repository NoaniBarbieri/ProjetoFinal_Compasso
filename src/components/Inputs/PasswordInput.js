import React, { useState } from 'react';
import {PassInputStyle} from '../Partials/Inputs/style.inputs';

export function LogPassInput(){
    const [ aux, setAux ] = useState({
        pass: "",
    });
    console.log(aux)
    return (
        <PassInputStyle  type="text" onChange={(e) => setAux({pass: e.target.value})} placeholder="Senha"/>
    );
}

