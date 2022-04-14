import styled from "styled-components";

export const TimerLogoutContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 40px;

    span {
        flex: 1;
        font-size: 12px;
        text-align: right;
        padding-left: 4px;
    }
    
    div {
        flex: 1;
        text-align: center;
        margin-left: 14%;

        p {
            font-family: 'Roboto';
            font-size: 38px;
            padding-left: 2px;
        }
    }

    @media (max-width: 1023px) {
        display: none;
    }
`;


