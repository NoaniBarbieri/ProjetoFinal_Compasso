import styled from 'styled-components';

export const ContainerPage = styled.div`
    position: fixed;
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
    font-family: MarkPro, sans-serif;
`

export const ContainerRigth = styled.div`
    width:50%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${require('../../assets/images/background.png')});
    background-repeat: no-repeat;
    background-size: cover;
`

export const ContainerTop = styled.div`
    h1{
        max-width: 118px;
        max-height: 76px;
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 76px;
        margin-bottom: 15px;
    }

    p{
        max-width: 301px;
        max-height: 52px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
    }

`