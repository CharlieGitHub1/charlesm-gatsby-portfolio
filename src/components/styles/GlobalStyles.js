import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;400;600;700;800&display=swap');    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans', sans-serif;
    }

    body {
        color: #fff;
        font-size: 14px;
        line-height: 1.5;
        font-weight: 400;
        background: linear-gradient(
          295.9deg,
          #07011b 85.30%,
          #251061 92.71%,
          #00ffc2 102.96%
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
        line-height: 1.1;
    }

    h1 {
        font-size: 3rem;
        font-weight: 700;
    }

    h2 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 2rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    h5 {
        font-size: 1.25rem;
    }

    h6 {
        font-size: 1rem;
    }

    a {
        color: #ffff;
        text-decoration: none;
    }

    p {
        margin-bottom: 1rem;
    }

    ul {
        list-style: none;
    }
`
