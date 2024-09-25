/* Base styles for body */

// src/GlobalStyle.js
import { createGlobalStyle } from "styled-components";
import "@fontsource/tajawal"; // Defaults to weight 400
import "@fontsource/tajawal/700.css"; // Specify weight

const GlobalStyle = createGlobalStyle`
 

  body {
    font-family: "Tajawal";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  /* Media query for tablets and up */
@media (min-width: 768px) {
  body {
    font-size: 18px; /* Adjust font size for larger screens */
  }
}

/* Media query for desktop and up */
@media (min-width: 1024px) {
  body {
    font-size: 20px; /* Further adjust font size for even larger screens */
  }
}
`;

export default GlobalStyle;
