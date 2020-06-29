import { SxStyleProp } from "theme-ui";
import { CardSize } from "./Card";

export const cardListCss: SxStyleProp = {
  flexWrap: "wrap",
  justifyContent: "center",
};

export const cardCss = (
  player: boolean,
  active: boolean,
  disabled: boolean,
  size: CardSize
): SxStyleProp => {
  {
    const css: SxStyleProp = {
      display: "grid",
      gridTemplateColumns: "repeat(5, auto)",
      gridTemplateRows: "repeat(5, auto)",
      width: "8rem",
      height: "8rem",
      boxShadow: "shadow-200",
      background: "#fff",
      margin: "1rem",
      border: "solid 2px",
      borderColor: "white",
    };
    if (size == "small") {
      css.width = "4rem";
      css.height = "4rem";
    }
    if (player) {
      css[":hover"] = {
        boxShadow: "shadow-100",
        cursor: "pointer",
      };
    }

    if (active) {
      css.boxShadow = "shadow-100";
      css[":hover"] = {
        boxShadow: "shadow-100",
      };
      css.borderColor = "gray-500";
    }
    if (disabled) {
      css.opacity = 0.5;
    }
    return css;
  }
};

export const squareCss = (move: boolean, base: boolean) => {
  {
    const css: SxStyleProp = {
      border: "1px solid",
      borderColor: "gray-300",
    };
    if (move) {
      css.backgroundColor = "gray-400";
      css.borderColor = "gray-400";
    }
    if (base) {
      css.backgroundColor = "gray-500";
      css.borderColor = "gray-500";
    }

    return css;
  }
};
