import React, { useState, useEffect} from 'react';
import { BodyPage, SearchContainer,ContainerLogoSearch, ContainerResults} from './style'
import { LogoSearchPage } from '../../components/Images/style'
import CompassLogoWhite from "../../assets/images/Logo-Compasso-Branco-hor 1.png"
import { SearchButtonStyle, DivButtons } from '../../components/Buttons/style.buttons'
import InputSearchDevs from '../../components/InputSearchDevs/index'
import LogoutButtonSearch  from '../../components/Buttons/Button.logoutSearch'
import { LargeInput } from '../../components/Inputs/style.inputs'
import { getDevs } from '../../helpers/devsAPI'
import { TextSearch } from '../../components/TextSearch/index'

const SearchPage = (props) => {

    const [user, setUser] = useState("");
    const [firstAcess, setFirstAcess] = useState(false)
    const [userData, setUserData] = useState(null)

    const getUser = () => {
        if (!user) return

        getDevs().then(res => {
            let userSearch = res.data.developers.filter(element =>
                element.name.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "").startsWith(user.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, ""))
            );
            setUserData(userSearch[0])
            if (!firstAcess) setFirstAcess(true)
        })
    }

    useEffect(() => {
        if (props.useData) {
            setUserData(userData);
            setFirstAcess(true);
            getUser();
        }
    }, []);



  return (
     <BodyPage>
      <ContainerLogoSearch>
        <LogoSearchPage src={CompassLogoWhite}/>
      </ContainerLogoSearch>
      <ContainerResults>
        {
          firstAcess ? <TextSearch userData={userData} /> : null
        }
      </ContainerResults>
      <SearchContainer>
      <LargeInput type="text" onChange={text => setUser(text.target.value)} onKeyPress={event => {
            if (event.key === 'Enter') {
                getUser()
            }
        }}>{InputSearchDevs()}</LargeInput>
        <DivButtons>
          <SearchButtonStyle type="submit" onClick={getUser}>Buscar</SearchButtonStyle>
          <LogoutButtonSearch/>
        </DivButtons>
        
      </SearchContainer>


     </BodyPage>
  )
}

export default SearchPage;