import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

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
    }

    /* SELECT TEXT */
    ::selection {
        background: rgba(0, 217, 255, 0.411);
        color: white;
    }

    /* SCROLL */
    ::-webkit-scrollbar{
        width: 6px;
        
    }
    ::-webkit-scrollbar-track{
        background-color: black;
    }

    ::-webkit-scrollbar-thumb{
        background-color: rgba(212, 212, 212, 0.582);
        border-radius: 5px;
    }

`