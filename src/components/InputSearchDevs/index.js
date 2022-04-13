import React,{ useState } from 'react';
import { LargeInput } from '../Inputs/style.inputs'

function InputSearchDevs() {
    const [userName, setUserName] = useState('');
    return (
        <LargeInput>
            <input type={'text'} onChange={text => setUserName(text.target.value)}  onKeyPress={event => {
            if (event.key === 'Enter') {
                console.log("Teste")
            }
            }}></input>
        </LargeInput>
    );
}

export default InputSearchDevs;