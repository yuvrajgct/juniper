import { Global, css } from "@emotion/react";

const GlobalStyle = (props) => (
  <Global
    {...props}
    styles={css`
      html,
      body,
      #__next {
        height: 100%;
      }

      body {
        margin: 0;
      }

      .MuiCardHeader-action .MuiIconButton-root {
        padding: 4px;
        width: 28px;
        height: 28px;
      }
      .css-f36kkm-MuiPaper-root,
      .css-1bpvgg-MuiPaper-root {
        width: 1290px;
      }
    `}
  />
);

export default GlobalStyle;
