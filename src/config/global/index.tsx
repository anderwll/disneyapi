import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Pacifico', cursive !important;
    }

    html {
        scroll-behavior: smooth;
        scroll-padding-top: 8rem;
    }

    body {
        width: 100vw;
        overflow-x: hidden !important;
        background: radial-gradient(circle, rgba(112,112,112,0.7783251231527093) 29%, rgba(72,76,136,1) 100%);
    } 

    body::-webkit-scrollbar {
        width: 1rem;
        height: 1rem;
        background-color: #707070;
    }

    body::-webkit-scrollbar-thumb {
        background: #b3b3b3;
        border-radius: 0.5px;
    }
`;

export default GlobalStyle;