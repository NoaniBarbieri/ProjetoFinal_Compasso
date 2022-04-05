import styled from 'styled-components';

export const NotFoundContainer = styled.div`    
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    font-family: MarkPro;
`

export const TextNotFound = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    margin: 100px;
    border-radius: 40px;
    height: 400px;
    width: 35%;

    h1{
        font-family: MarkProBold;
        font-size: 65px;
    }

    h2{
        font-family: MarkProBold;
        font-size: 35px;
        margin-bottom: 20px;
    }

    p{
        font-size: 25px;
        margin-bottom: 20px;
    }

    button{ 
        width: 190px;
        height: 62px;
        cursor: pointer;
        background: black;
        border-radius: 10px;
        border: none;
        font-family: MarkPro;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.035em;
        text-transform: uppercase;
        color: #FFFFFF;
        margin: 10px;
    }
    button:hover{
        color: orangered;
    }
`

