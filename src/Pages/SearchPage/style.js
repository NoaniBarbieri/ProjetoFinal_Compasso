import styled from "styled-components";

export const BodyPage = styled.div`
    position: fixed; 
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);   
`
export const ContainerLogoSearch = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    min-width: 100%;
    height: 80px;
    margin: 10px;

    @media(max-width: 1023px){
        height: 70px;
    }

    @media(max-width: 400px){
        height: 30px;
        margin: 2px;
    }
`
export const ContainerResults = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;
    min-height: 280px;
    max-height: 560px;
    @media(max-width: 1023px){
        min-width: 80%;
        min-height: 240px;
    }
    @media(max-width: 400px){
        min-height: 180px;
    }
`
export const SearchContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    margin-top: 10px ;
    min-height: 200px;
    width: 65%;

    @media(max-width: 1024px){
        min-width: 100%;
        min-height: 120px;
    }

    @media(max-width: 400px){
        min-width: 100%;
        min-height: 90px;
    }

`  