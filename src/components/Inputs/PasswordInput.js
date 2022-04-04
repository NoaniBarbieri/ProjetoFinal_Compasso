import React from 'react';
import {PassInputStyle} from '../Partials/Inputs/style.inputs';

const LogPassInput = React.forwardRef((props, ref) => {
    return (
        <PassInputStyle type="text" ref={ref} {...props} placeholder="Senha" />
    );
})

export default LogPassInput;