import React from 'react';
import { BodyContainer } from './style'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import BodyHomePage from '../../components/BodyHomePage/index'
function HomePage() {
  return (
    <BodyContainer>
       <Header/>
       <BodyHomePage/>
       <Footer/>
    </BodyContainer>
  )
}

export default HomePage;