import { createGlobalStyle } from "styled-components";
import { devices } from "./breakpoints";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Mona Sans';
    src:
      url('./assets/MonaSans/WOFF 2/MonaSans-Black.woff2') format('woff2 supports variations'),
      url('./assets/MonaSans/WOFF 2/MonaSans-ExtraBold.woff2') format('woff2-variations'),
      url('./assets/MonaSans/WOFF 2/MonaSans-Bold.woff2') format('woff2-variations'),
      url('./assets/MonaSans/WOFF 2/MonaSans-SemiBold.woff2') format('woff2-variations'),
      url('./assets/MonaSans/WOFF 2/MonaSans-Medium.woff2') format('woff2-variations'),
      url('./assets/MonaSans/WOFF 2/MonaSans-Regular.woff2') format('woff2-variations'),
      url('./assets/MonaSans/WOFF 2/MonaSans-Light.woff2') format('woff2-variations'),
      url('./assets/MonaSans/WOFF 2/MonaSans-ExtraLight.woff2') format('woff2-variations');
    font-weight: 900 800 700 600 500 400 300 200;
    font-stretch: 75% 125%;
  }

 *, 
 *::before, 
 *::after {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
   transition: all 100ms;
 }

  html {
    font-size: 10px;

    @media only screen and (${devices.xl}) {
      font-size: 9px;
    }

    @media only screen and (${devices.lg}) {
      font-size: 8px;
    }

    @media only screen and (${devices.md}) {
      font-size: 9px;
    }
  }

  body {
    font-family: 'Mona Sans', sans-serif;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #fff;
    
  }

  img {
    max-width: 100%;
  }

  button {
      position: relative;
      z-index: 2;
    }

    .app {
      background-color: #041e0e;
      background-image: linear-gradient(rgba(3, 18, 9, .87), rgba(3, 18, 9, .87)), url("https://uploads-ssl.webflow.com/64f4e74b8e765ab51f7c2ec1/6503683be895777a702e0c4a_ptn.png");
      background-position: 0 0, 0 0;
      background-size: auto, 70px;
    }

    .app.bg-white {
      background-color: #fff;
      background:  lightgray 0% 0% / 7.999999821186066px 7.999999821186066px repeat, #E2F1E8, url("https://uploads-ssl.webflow.com/64f4e74b8e765ab51f7c2ec1/6503683be895777a702e0c4a_ptn.png");
      background-blend-mode: soft-light;
     
    }

  .blur-block, 
  .blur-block-2 {
    height: 150px;
    filter: blur(80px);
    margin: auto;
    position: absolute;
    top: auto;
    bottom: 0%;
    left: 0%;
    right: auto;
  }

  .blur-block-2  {
    left: 0;
    right: 0;
  }


  .cmpetra--content {
    position: relative;

    .sparkles {
      position: absolute;
      top: auto;
      bottom: -10%;
      left: -10%;
      right: auto;

      @media only screen and (${devices.xs}) {
        left: auto;
        right: auto;
      }
    }
  }


  .anyone {
    .sparkles {
      position: absolute;
      top: -50%;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;

export default GlobalStyle;
