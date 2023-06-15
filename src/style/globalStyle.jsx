import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #eff0f5;
        --secondary-color: #ffffff;
        --tertiary-color: #0e1b4d;
        --quarternary-color: #4470db;
        --font-body: "Questrial", "sans-serif";
        --font-header: "Archivo", "serif"
    }

    * {
        box-sizing: border-box;
        word-break: break-word;
    }

`

export default GlobalStyle