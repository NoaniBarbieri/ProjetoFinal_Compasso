import styled from 'styled-components';

export const ContainerPage = styled.div`
    position: absolute;
    min-width:100%;
    min-height: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const ContainerLeft = styled.div`
    width:50%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #E0E0E0;
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);

    @media screen and (max-width: 1024px){
        width:100%;
        position: absolute;
    }
`

export const ContainerRigth = styled.div`
    width:50%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${require('../../assets/images/background.png')});
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 1024px){
        display:none;
    }
`

export const ContainerTop = styled.div`
    h1{
        max-width: 118px;
        max-height: 76px;
        font-family: MarkPro, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 76px;
        margin-bottom: 15px;
    }

    p{
        max-width: 301px;
        max-height: 52px;
        font-family: MarkPro, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
    }

    @media (max-width: 360px){
       margin-left: 10px;
    }

    @media (max-width: 320px){
        margin-left: 35px;
        h1{
            font-size: 30px;
            margin-bottom: 10px;
            max-height: 50px;
            
        }
        p{
            font-size: 10px;
            margin-right: 15px;
        }
            
    }

`

export const LoginText = styled.p`
        display: flex;
        max-width: 81px;
        max-height: 38px;
        font-family: MarkPro, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 38px;
        margin-top: 85px;
        margin-bottom: 15px;
        margin-right: 225px;

        @media (max-width: 320px){
            font-size: 18px;
            margin-top: 25px;
            margin-bottom: 0px;
            margin-left: 20px;
        }

        @media (max-width: 360px){
            margin-left: 20px;
        }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 50px;
    
    @media (max-width: 420px){
        margin-left: 0px;
    }


`

export const ValidationContainer = styled.div`
    max-width: 50%;
    height: 70px;

    @media (max-width: 420px){
        height: 55px;
    }
`