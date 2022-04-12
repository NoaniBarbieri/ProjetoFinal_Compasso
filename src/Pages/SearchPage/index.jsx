import React, {useState} from 'react';
import { BodyPage, SearchContainer,ContainerLogoSearch, ContainerResults} from './style'
import { LogoSearchPage } from '../../components/Images/style'
import CompassLogoWhite from "../../assets/images/Logo-Compasso-Branco-hor 1.png"
import { SearchButtonStyle, OutButtonStyle, DivButtons } from '../../components/Buttons/style.buttons'
import { LargeInput } from '../../components/Inputs/style.inputs'
import { InputAPI } from '../../components/InputSearch/index';

function SearchPage() {

  const [user, setUser] = useState("");

  const getUser = () => {
    console.log("teste")
  }

  return (
     <BodyPage>
      <ContainerLogoSearch>
        <LogoSearchPage src={CompassLogoWhite}/>
      </ContainerLogoSearch>
      <ContainerResults>
        {/*Adicionar o Texto da busca*/}
      </ContainerResults>
      <SearchContainer>
      <LargeInput type="text" onChange={text => setUser(text.target.value)} onKeyPress={event => {
                        if (event.key === 'Enter') {
                            getUser()
                        }
      }}>{InputAPI()}</LargeInput>

        <DivButtons>
          <SearchButtonStyle type="submit"s>Buscar</SearchButtonStyle>
          <OutButtonStyle type="button">Sair</OutButtonStyle>
        </DivButtons>
        
      </SearchContainer>


     </BodyPage>
  )
}

export default SearchPage;