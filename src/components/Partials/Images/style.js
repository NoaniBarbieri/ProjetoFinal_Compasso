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
        margin:50px;
    }
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