import styled from 'styled-components';

export const ButtonStyle = styled.button `
    width: clamp(100px,80vw,379px);
    padding: clamp(7px,3vw,20px) 20px;
    margin-bottom: 15px;
    border: 2px solid;
    border-radius: 50px;
    border-color: #c13216;
    cursor: pointer;
    background-image: linear-gradient(to right, #FF2D04, #C13216);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15),5px 5px 15px #0b0b0b;
    font-family: MarkProBold, sans-serif;
    font-size: 18px;
    color: #FFF;
`