import React from 'react';
import { BodyContainer } from './style'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import BodyHomePage from '../../components/BodyHomePage/index'
import {isValid } from '../../components/SearchLogin/isValid'
import { Navigate }  from 'react-router-dom';
function HomePage() {
  const checks = isValid();
  if(!checks){
    return <Navigate to='/'/>
  }else{
    return (
      <BodyContainer>
         <Header/>
         <BodyHomePage/>
         <Footer/>
      </BodyContainer>
    )
  }
}

export default HomePage;