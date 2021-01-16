import { createGlobalStyle, keyframes } from "styled-components";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import styledNormalize from "styled-normalize"; // does this even work?
config.autoAddCss = false;

export default createGlobalStyle`
  ${styledNormalize}

  /* fix fontawesome icon sizes */
  ${dom.css()}
  /* CSS Variables */
  :root {
    /* Colors */
    --color-primary: #04acba;
    --color-black: #2f2f2f;
    --color-white: #ffffff;
    --color-grey: #cccccc;
    --color-light-grey: #9f9f9f;
    --color-dark-grey: #585858;
    --color-green: #2ecc71;
    --color-red: #e74c3c;

    --color-input-border: #bebebe;

    --color-background: #f7f8fc;
    --color-caoursel-dots: #f0f0f0;
    --color-grey-muted: #bebebe;
    --color-twitter: #3c9cd8;
    --color-facebook: #274e8c;
    --color-whatsapp: #23d366;

    --color-background: #f7f8fc;
    --color-caoursel-dots: #f0f0f0;
    --color-grey-muted: #bebebe;

    /* Spacing */
    --spacing-tiny: 4px;
    --spacing-small: 8px;
    --spacing-medium: 16px;
    --spacing-large: 32px;
    --spacing-huge: 64px;

    --border-radius: 4px;

    /* Fonts */
    --font-family-primary: ibm-plex-sans, sans-serif;
    --font-family-secondary: stratos, sans-serif;

    --font-weight-primary-regular: 400;
    --font-weight-primary-medium: 500;
    --font-weight-primary-semi-bold: 600;
    --font-weight-primary-bold: 700;

    --font-weight-secondary-light: 300;
    --font-weight-secondary-regular: 400;
    --font-weight-secondary-medium: 600;
    --font-weight-secondary-semi-bold: 700;

    --font-size-default: 10px;
    --font-size-tiny: 1.4rem;
    --font-size-small: 1.6rem;
    --font-size-medium: 1.8rem;
    --font-size-large: 2rem;
    --font-size-huge: 2.2rem;

    /* Breakpoints */
    --breakpoint-sm: 480px; /* mobile devices */
    --breakpoint-md: 768px; /* iPads, tablests */
    --breakpoint-md: 1024px; /* small screens, laptops */
    --breakpoint-lg: 1200px; /* extra large screens, TV */
  }

  * {
    box-sizing: border-box;

    /* FIX: for slickjs carousel - https://github.com/kenwheeler/slick/issues/982#issuecomment-73517458 */
    min-height: 0;
    min-width: 0;
  }

  html {
    font-size: var(--font-size-default);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family-primary);
    color: var(--color-black);
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }

  hr {
    border: none;
    height: 1px;
    border-top: 1px solid #cccccc;
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: var(--color-light-grey);
    /*font-weight: 300;*/
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    color: var(--color-light-grey);
    font-weight: 300;
  }

  :-ms-input-placeholder {
    /* IE 10+ */
    color: var(--color-light-grey);
    font-weight: 300;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    color: var(--color-light-grey);
    font-weight: 300;
  }

  input, textarea {
    font-size: var(--default);
    color: var(--color-black);
  }

  input[type="text"], input[type="email"], input[type="password"], input[type="number"], input[type="tel"], input[type="date"], input[type="submit"], input[type="checkbox"], textarea, select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: 0;
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
