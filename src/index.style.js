import { createGlobalStyle } from 'styled-components';
import MarkPro from "./assets/fonts/MarkPro.ttf";
import MarkProBold from "./assets/fonts/MarkProBold.ttf";


export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    @font-face {
        font-family: MarkPro;
        src: url(${MarkPro});
    }

    @font-face {
        font-family: MarkProBold;
        src: url(${MarkProBold});
    }
`;