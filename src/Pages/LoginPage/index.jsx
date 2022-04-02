import React from 'react';
import { ContainerPage, ContainerLeft, ContainerRigth,ContainerTop,LoginText } from './style'

export const LoginPage = () =>  {
  return (
    <ContainerPage>
        <ContainerLeft>
          <ContainerTop>
            <h1>Olá,</h1>
            <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
          </ContainerTop>
          <LoginText>Login</LoginText>
        </ContainerLeft>

        <ContainerRigth>
        </ContainerRigth>
    </ContainerPage>
  );
}
