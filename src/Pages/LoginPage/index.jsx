import React from 'react';
import { ContainerPage, ContainerLeft, ContainerRigth,ContainerTop } from './style'

export const LoginPage = () =>  {
  return (
    <ContainerPage>
        <ContainerLeft>
          <ContainerTop>
            <h1>Olá,</h1>
            <p>Para continuar navegando de forma segura, efetur o login na rede.</p>
          </ContainerTop>
        </ContainerLeft>
        <ContainerRigth>
        </ContainerRigth>
    </ContainerPage>
  );
}
