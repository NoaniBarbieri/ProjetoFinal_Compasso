import styled from "styled-components";

export const TextResults = styled.div`
    max-width: 516px;
    width: 100%;
    white-space: pre-line;
    display: flex;
    justify-content: center;
    padding-left: 25px;
    align-items: center;
    p {
        font-family: 'Roboto';
        font-size: clamp(24px,3.5vw,30px);
        text-align: left;
        color: #fff; 
    }

    @media(max-width: 400px){
        p{
            font-size: 16px;
        }
    }
`