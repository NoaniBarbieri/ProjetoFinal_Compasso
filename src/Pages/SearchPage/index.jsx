import React, {useState} from 'react';
import { BodyPage, SearchContainer,ContainerLogoSearch, ContainerResults} from './style'
import { LogoSearchPage } from '../../components/Images/style'
import CompassLogoWhite from "../../assets/images/Logo-Compasso-Branco-hor 1.png"
import { SearchButtonStyle, OutButtonStyle, DivButtons } from '../../components/Buttons/style.buttons'
import InputSearchDevs from '../../components/InputSearchDevs/index'

function SearchPage() {

  return (
     <BodyPage>
      <ContainerLogoSearch>
        <LogoSearchPage src={CompassLogoWhite}/>
      </ContainerLogoSearch>
      <ContainerResults>
        {/*Adicionar o Texto da busca*/}
      </ContainerResults>
      <SearchContainer>
        <InputSearchDevs></InputSearchDevs>
        <DivButtons>
          <SearchButtonStyle type="submit">Buscar</SearchButtonStyle>
          <OutButtonStyle type="button">Sair</OutButtonStyle>
        </DivButtons>
        
      </SearchContainer>


     </BodyPage>
  )
}

export default SearchPage;