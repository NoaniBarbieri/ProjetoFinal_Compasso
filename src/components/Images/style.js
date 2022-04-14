import styled from "styled-components";

export const CompassLogoRigth = styled.img`
    width: clamp(100px,65vw,306px);
    max-height: 69px;
    height: auto;
    margin: 35px auto 0 auto;

    @media screen and (max-width: 1024px){
        display:none;
    }
`;

export const CompassLogoLeft = styled.img`
    display: none;
    @media (max-width: 1024px){
        display:inline-block;
        width: clamp(100px,65vw,306px);
        max-height: 69px;
        height: auto;
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
    height: 50px;
    margin: 10px;

    @media(max-width: 400px){
        height: 30px;
        margin: 0px;
    }
`

export const ImageScarecrow = styled.img`
    height: 460px;
    display: flex;
    align-self: center;

    @media(max-width:1024px){
        height: 400px;
    }

    @media(max-width:500px){
        height: 300px;
    }

    @media(max-width:320px){
        height: 200px;
    }

`

export const ImageLogo = styled.img`
    height: 43px;
    display: flex;
    align-self: flex-start;
    margin: 20px;
    @media(max-width:320px){
        height: 30px;
    }

`