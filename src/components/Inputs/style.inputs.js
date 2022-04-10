import styled from 'styled-components';
import '../../index.css';
export const UserInputStyle = styled.input`
    display: flex;
    font-family: MarkPro, sans-serif;
    font-size: 16px;
    color: #E0E0E0;

    ::placeholder {
        color: #E0E0E0;
   }

    width: clamp(100px,80vw,379px);
    padding: clamp(7px,3vw,20px) 20px;
    margin: 15px 0;
    border: 1px  #FFFFFF solid;
    border-radius: 50px;
    background: url(${require('../../assets/images/UserIcon.png')});
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: right 20px top 50%;

    @media (max-width: 320px){
        margin-bottom: 10px;
        margin-top: 2px;
    }
`;

export const PassInputStyle = styled(UserInputStyle)`
    background: url(${require('../../assets/images/PassIcon.png')});
    background-size: 20px 25.1px;
    background-repeat: no-repeat;
    background-position: right 20px top 50%;
`

export const InputSearch = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
height: 100%;

input {
        margin: 0 auto;
        width: 70%;
        height: 45px;
        background: #26292C;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 50px;
        font-family: 'Roboto';
        font-size: 14px;
        outline: 0;
        text-align: center;
        justify-content: space-between;
        color: #FFFFFF;
        background: url(${require('../../assets/images/UserIcon.png')});
        background-repeat: no-repeat;
        background-position: 20px 50%;
        padding: 0 20px 0 50px;

    &:focus {
        border: 1px solid #E9B425;
    }

    &::placeholder {
        color: #FFFFFF;
        font-family: 'Roboto';
    }
}

@media (max-width: 1023px) {
    input {
        width: 80%;
        background-size: 15px;
        padding: 0 15px 0 40px;
        background-position: 15px 50%;
    }
}

@media (max-width: 320px) {
    input {
        background-size: 12px;
        padding: 0 20px 0 35px;
        font-size: 10px;
    }
}

`
