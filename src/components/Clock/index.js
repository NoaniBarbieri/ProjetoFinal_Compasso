import React from "react";
import { useState } from "react";
import { Time } from "./style";

export const Clock = () =>{

    const day = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira","sábado"];
    const month = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"];

    const date = new Date();
    const fullDate = (`${(day[date.getDay()])} , ${date.getDate()}  de  ${month[date.getMonth()]}  de ${date.getFullYear()}`); 

    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(UpdateTime, 1000)

    return(
        <Time>
            <h1>{ctime.replace(/:\d\d([ ap]|$)/,'$1')}</h1>
            <p>{fullDate}</p>
        </Time>
    )
}

