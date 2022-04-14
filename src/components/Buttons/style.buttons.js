import styled from 'styled-components';

export const ButtonStyle = styled.button `
    width: clamp(100px,80vw,379px);
    height: 67px;
    padding: clamp(7px,3vw,20px) 20px;
    margin-bottom: 15px;
    margin-top: 10px;
    border: 2px solid;
    border-radius: 50px;
    border-color: #c13216;
    cursor: pointer;
    background-image: linear-gradient(to right, #FF2D04, #C13216);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15),5px 5px 15px #0b0b0b;
    font-family: MarkProBold, sans-serif;
    font-size: 18px;
    color: #FFF;
    text-align: center ;
    display:flex;
    justify-content: center;
    align-items: center ;
`

/* Buttons Logout and Refresh */
export const ButtonFooterContainer = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    font-size: 12px;
`;

export const ButtonSquareFooter = styled.button`
    flex: 1;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-family: 'MarkPro';
    border: 0;
    cursor: pointer;

    @media (max-width: 320px) {
        font-size: 10px;
    }
`;

export const ButtonResetTimer = styled(ButtonSquareFooter)`
    background-color: #FFFFFF;
    color: #C13216;
`;

export const ButtonLogout = styled(ButtonSquareFooter)`
    font-family: 'Roboto';
    font-weight: bold;
    background-color: transparent;
    color: #FFF;
`;

/*Page 3 */
export const SearchButtonStyle = styled(ButtonStyle)`
    margin-bottom: 10px;
    margin-top: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    @media(max-width:1024px){
        font-size: 26px;
        width: 260px;
        height: 58px;
    }
`
export const OutButtonStyle = styled(SearchButtonStyle)`
    border-color: #FFFFFF;
    background-image: linear-gradient(to right, #FFFFFF, #FFFFFF);
    color: #000000;
   
`;

export const DivButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
