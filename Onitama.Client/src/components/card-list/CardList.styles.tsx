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
      boxShadow: "elevation-10",
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
        boxShadow: "elevation-10",
        cursor: "pointer",
      };
    }

    if (active) {
      css.boxShadow = "elevation-10";
      css[":hover"] = {
        boxShadow: "elevation-10",
      };
      css.borderColor = "charcoal-75";
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
      borderColor: "charcoal-25",
    };
    if (move) {
      css.backgroundColor = "charcoal-50";
      css.borderColor = "charcoal-50";
    }
    if (base) {
      css.backgroundColor = "charcoal-75";
      css.borderColor = "charcoal-75";
    }

    return css;
  }
};
