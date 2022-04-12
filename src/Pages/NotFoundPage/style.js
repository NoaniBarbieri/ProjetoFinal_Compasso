import styled from 'styled-components';

export const NotFoundContainer = styled.div`    
    min-width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row ;
    font-family: MarkPro;
    
    @media(max-width:320px){
        flex-direction: column ;
    }
    @media(max-width:1024px){
        flex-direction: column ;
    }

`

export const TextNotFound = styled.div`
    display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: center;
    margin: 100px;
    border-radius: 40px;
    height: 400px;
    width: 40%;

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
        width: 78%;
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

    @media(max-width:1024px){
        max-height: 300px ;
        min-width: 100% ;
        margin: 15px;
        h2{
            font-size: 25px;
            width: 90%;
            text-align: center;
        }

        p{
            font-size: 18px;
            width: 80%;
            text-align: center;
        }
    }

    @media(max-width:500px){
        max-height: 250px ;
        min-width: 100% ;
        margin: 0;
        h1{
            font-size: 25px;
        }
        h2{
            font-size: 20px;
            width: 100%;
            text-align: center;
        }

        p{
            font-size: 18px;
            width: 100%;
            text-align: center;
        }
    }


    @media(max-width:320px){
        margin: 10px;
        width: 80%;
        height: 50%;
        h1{
            margin-bottom: 5px;
            font-size: 20px;
        }
        h2{
            margin-bottom: 5px;
            font-size: 18px;
        }
        p{
            width: 80%;
            margin-bottom: 5px;
            font-size: 12px;
            text-align: center;
        }

        button{
            width: 170px;
            height: 54px;
            font-size: 12px;
        }
    }
`

