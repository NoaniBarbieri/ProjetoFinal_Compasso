import styled from 'styled-components';

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