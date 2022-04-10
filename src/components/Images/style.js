import styled from "styled-components";

export const CompassLogoRigth = styled.img`
    width: 300px;
    height: 70px;
    margin: 35px auto 0 auto;

    @media screen and (max-width: 1024px){
        display:none;
    }
`;

export const CompassLogoLeft = styled.img`
    display: none;
    @media (max-width: 1024px){
        display:inline-block;
        width: 270px;
        height: 60px;
        margin-top: 20px;
        margin-bottom: 45px;
    }

    @media (max-width: 320px){
        margin: 15px;
        width: 180px;
        height: 42px;
    }
    
`
export const LogoSearchPage = styled.img`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
    height: 90%;
`

export const ImageScarecrow = styled.img`
    height: 400px;
    display: flex;
    align-self: center;
`

export const ImageLogo = styled.img`
    height: 50px;
    display: flex;
    align-self: flex-start;
    margin: 20px;
`

