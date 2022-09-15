import { createGlobalStyle } from "styled-components"
import Skyline from "../../assets/videos/BuildingStreet.mp4"

export const GlobalStyle = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;300;400;500;700&display=swap');


    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Yantramanav', sans-serif;
    }

    body {
        color: #fff;
        font-size: 14px;
        line-height: 1.5;
        font-weight: 400;
        background: url(${Skyline}) no-repeat center center/cover;
        background: linear-gradient(291.9deg, #07011B -5.74%, #251061 43.71%, #00FFC2 211.96%);
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
        line-height: 1.1;
    }

    h1 {
        font-size: 3rem;
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
