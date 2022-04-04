import styled from "styled-components";

export const CompassLogoRigth = styled.img`
    width: 300px;
    height: 70px;
    margin: 35px auto 0 auto;

    @media screen and (max-width: 920px){
        display:none;
    }
`;

export const CompassLogoLeft = styled.img`
    display: none;
    @media (max-width: 920px){
        display:inline-block;
        margin:50px;
    }
`