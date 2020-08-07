import { createGlobalStyle, keyframes } from "styled-components";
import styledNormalize from "styled-normalize";

export default createGlobalStyle`
  ${styledNormalize}
  /* CSS Variables */
  :root {
    /* Colors */
    --color-black: #2E3333;
    --color-white: #FFFFFF;
    --color-red: #E52028;
    --color-blue: #007BB7;
    --color-grey: #CCCCCC;
    --color-text: #2F2F2F;
    --color-accent: #04ACBA;
    /* Spacing */
    --spacing-tiny: 4px;
    --spacing-small: 8px;
    --spacing-medium: 16px;
    --spacing-large: 32px;
    --spacing-huge: 64px;
    /* Font */
    --primary-font-family: ibm-plex-sans, sans-serif;
    --secondary-font-family: stratos, sans-serif;
    --default-font-size: 10px;
    --font-size-tiny: 1.4rem;
    --font-size-small: 1.6rem;
    --font-size-medium: 1.8rem;
    --font-size-large: 2rem;
    --font-size-huge: 2.2rem;
    --box-shadow: 0 3px 6px rgba(0,0,0, 0.16);
    --border-radius: 4px;
  }
  * {
    box-sizing: border-box;

    /* FIX: for slickjs carousel - https://github.com/kenwheeler/slick/issues/982#issuecomment-73517458 */
    min-height: 0;
    min-width: 0;
  }
  html {
    font-size: var(--default-font-size);
  }
  body {
    padding: 0;
    font-family: var(--primary-font-family);
    color: var(--color-black);
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: var(--color-grey);
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: var(--color-grey);
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: var(--color-grey);
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: var(--color-grey);
  }
  ::placeholder {
    color: var(--color-grey);
  }
  .map {
    width: 100%;
    height: 300px;
  }
  button {
    border: none;
    cursor: pointer;
  }
  input {
    /* remove iOS input shadow */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  button[type="submit"][disabled] {
  }
  /* Hide fonts until webfonts have loaded to avoid FOUT */
  .wf-loading {
    visibility: hidden;
  }
`;

export const spinKeyframe = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
