import React from 'react';
import { BodyPage } from './style'
import { LogoSearchPage } from '../../components/Images/style'
import CompassLogoWhite from "../../assets/images/Logo-Compasso-Branco-hor 1.png"

function SearchPage() {
  return (
      <BodyPage>
           <LogoSearchPage src={CompassLogoWhite}/>
      </BodyPage>
  )
}

export default SearchPage;