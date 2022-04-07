import React from 'react';
import { BodyContainer } from './style'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'

function HomePage() {
  return (
    <BodyContainer>
       <Header/>
       {/* Body */}
       <Footer/>
    </BodyContainer>
  )
}

export default HomePage;