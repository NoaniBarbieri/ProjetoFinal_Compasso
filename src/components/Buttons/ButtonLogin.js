import React from 'react'
import { ButtonStyle } from './style.buttons';
import { Check } from '../SearchLogin/index'

const LoginButton = () => {
  return (
    <ButtonStyle type="submit" onClick={() => Check()}>Continuar</ButtonStyle>
  );
}

export default LoginButton