import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    width: 100%;
    height: 18%;
    position: fixed;
    top: 0;
    padding: 0 3%;
    background:#f6f6f6;
    @media (max-width: 1023px) {

        align-items: center;

        nav {
            height: fit-content;
        }
    }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: auto;
    padding-top: 10px;
    @media (max-width: 400px) {
        p {
            font-size: 12px;
        }

        h1 {
            font-size: 30px;
        }

        .logo {
            width: 130px;
            height: auto;
        }
    }

`;


