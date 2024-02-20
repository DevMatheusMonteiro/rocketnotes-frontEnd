import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    };

    :root{
        font-size: 62.5%;
        --gray-100: #999591;
        --red: red;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};  
    }

    body, input, button, textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        outline: none;
    }
    
    a {
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }
`;
