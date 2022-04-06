import React from 'react'
import { ButtonStyle } from './style.buttons';
import { Check } from '../Search/SearchLogin'

const LoginButton = () => {
  return (
    <ButtonStyle type="submit" onClick={() => Check()}>Continuar</ButtonStyle>
  );
}

export default LoginButton