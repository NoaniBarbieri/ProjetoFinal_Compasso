import styled from "styled-components";

export const BodyPage = styled.div`
    position: fixed;
    min-width:100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);   
`

export const SearchContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    margin-top: 30px ;
    min-height: 60px;
    max-width: 516px ;
    width: 100%;
    flex: 2;

    @media (max-width: 1023px) {
        input {
            width: 90%;
            height: 50px;
            background-size: 12px;
            font-size: 20px;
            margin-bottom: 8px;
        }

        button {
            font-size: 20px;
            height: 50px;
            width: 60%;
            text-align: center ;
            display:flex;
            justify-content: center;
            align-items: center ;
            margin-bottom: 5px;
        }

    }

`  