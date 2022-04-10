import React from 'react';
import { BodyPage, SearchContainer} from './style'
import { LogoSearchPage } from '../../components/Images/style'
import CompassLogoWhite from "../../assets/images/Logo-Compasso-Branco-hor 1.png"
import { SearchButtonStyle, OutButtonStyle, DivButtons } from '../../components/Buttons/style.buttons'

function SearchPage() {
  return (
      <BodyPage>
           <LogoSearchPage src={CompassLogoWhite}/>

          <SearchContainer>
            {/* Input Local */}
            <DivButtons>
              <SearchButtonStyle type="submit" >Buscar</SearchButtonStyle>                      
              <OutButtonStyle type="button">Sair</OutButtonStyle>
            </DivButtons>
          </SearchContainer>
      </BodyPage>
  )
}

export default SearchPage;