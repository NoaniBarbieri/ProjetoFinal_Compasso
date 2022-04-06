import React from 'react';
import { ContainerPage, ContainerLeft, ContainerRigth,ContainerTop,LoginText, FormContainer, ValidationContainer } from './style'
import CompassLogoWhite from "../../assets/images/Logo-Compasso-Branco-hor 1.png"
import { CompassLogoRigth, CompassLogoLeft } from '../../components/Images/style'
import  { LogUserInput, LogPassInput } from '../../components/Inputs/InputLogin'
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
            <ValidationContainer/>
            <LoginButton />
          </FormContainer>
        </ContainerLeft>

        <ContainerRigth>
          <CompassLogoRigth src={CompassLogoWhite}/>
        </ContainerRigth>
    </ContainerPage>
  );
}
