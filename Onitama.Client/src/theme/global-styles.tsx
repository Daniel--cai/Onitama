import * as React from "react";
import { Global, css } from "@emotion/core";

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        transition: background-color 200ms, border-color 200ms;
      }
      :focus {
        outline: none;
      }
      @font-face {
        font-display: swap;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
      }
      @font-face {
        font-display: swap;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
      }
      @font-face {
        font-display: swap;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
      }
      body {
        font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", Arial,
          "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 15px;
        line-height: 20px;
      }
    `}
  />
);
