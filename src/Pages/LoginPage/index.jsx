import React from 'react';
import { ContainerPage, ContainerLeft, ContainerRigth,ContainerTop,LoginText, FormContainer } from './style'
import CompassLogoWhite from "../../assets/images/Logo-Compasso-Branco-hor 1.png"
import { CompassLogoRigth, CompassLogoLeft } from '../../components/Partials/Images/style'
import  { LogUserInput } from '../../components/Inputs/UserInput'
import  { LogPassInput }  from '../../components/Inputs/PasswordInput'
import LoginButton from '../../components/Buttons/ButtonLogin'

export const LoginPage = () =>  {
  return (
    <ContainerPage>
        <ContainerLeft>
          <CompassLogoLeft src={CompassLogoWhite}/>
          <ContainerTop>
            <h1>Olá,</h1>
            <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
          </ContainerTop>
          <LoginText>Login</LoginText>
          <FormContainer>
            <LogUserInput/>
            <LogPassInput/>
            {/* espaço para validações */}
            <LoginButton/>
          </FormContainer>
        </ContainerLeft>

        <ContainerRigth>
          <CompassLogoRigth src={CompassLogoWhite}/>
        </ContainerRigth>
    </ContainerPage>
  );
}
