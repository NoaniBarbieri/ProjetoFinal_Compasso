import React, { useState } from 'react';
import { ContainerPage, ContainerLeft, ContainerRigth,ContainerTop,LoginText, FormContainer, ValidationContainer, ErrorMessage } from './style'
import CompassLogoWhite from "../../assets/images/Logo-Compasso-Branco-hor 1.png"
import { CompassLogoRigth, CompassLogoLeft } from '../../components/Images/style'
import  { LogUserInput, LogPassInput } from '../../components/Inputs/InputLogin'
import LoginButton from '../../components/Buttons/ButtonLogin'

// import for validations
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import{ schema } from '../../components/Validations/index'
import { Check } from '../../components/SearchLogin/index'
import { useNavigate } from "react-router-dom";

export const LoginPage = () =>  {
  const navigate = useNavigate();
  const [status, setStatus ] = useState({
    menssage: ''
  })

  const { handleSubmit, register, formState: { errors } } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema,  { abortEarly: false })
  });

  const onSubmit = () => {
    const isUser = Check();
    if(isUser){
      navigate(('/home'));
    }else{
      setStatus({
        menssage: 'Usuário Inválido'
      })
    }
}

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <LogUserInput  name="user" {...register("user")}/>
              <LogPassInput  name="password"  {...register("password")}/>
              <ValidationContainer>
                <ErrorMessage>{status.menssage}</ErrorMessage>
                <ErrorMessage >{errors.user?.message}</ErrorMessage>
                <ErrorMessage >{errors.password?.message}</ErrorMessage>
              </ValidationContainer>
              <LoginButton />
            </form>
          </FormContainer>
        </ContainerLeft>

        <ContainerRigth>
          <CompassLogoRigth src={CompassLogoWhite}/>
        </ContainerRigth>
    </ContainerPage>
  );
}
