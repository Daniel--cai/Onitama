// https://dribbble.com/shots/5779721-Eggplore-UI-StyleGuide-Freebie

import { colors } from "./foundation/colors";
import { radii } from "./foundation/radii";
import { shadows } from "./foundation/shadows";
import { typography } from "./foundation/typography";

export default {
  breakpoints: ["40rem", "52rem", "64rem"],
  colors,
  radii,
  space: {
    none: 0,
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "3rem",
    sp: "6rem",
  },
  fonts: {
    body: "Inter",
    heading: "Inter",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
    },
  },
  transitions: { default: "all 200ms ease-in-out" },
  shadows,
  rowHeight: 9,
  ...typography,
  gradient: {
    background: "linear-gradient(#8461C9, #BD7AE3)",
  },
};

console.log(typography);
