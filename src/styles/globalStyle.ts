import { createGlobalStyle } from 'styled-components';
import { iThemeColor } from '../types/interfaces';

interface iGlobalStyle {
    theme: iThemeColor
}

export default createGlobalStyle<iGlobalStyle>` 
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        border: none;
        text-decoration: none;
        list-style: none;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        outline: none;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        overflow-x: hidden;
        background-color: ${({theme})=>theme.background.primary};
    }
`