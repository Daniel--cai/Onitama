import { SxStyleProp } from "theme-ui";

export const cardListCss: SxStyleProp = {
  flexWrap: "wrap",
  justifyContent: "center",
};

export const cardCss = (
  player: boolean,
  active: boolean,
  disabled: boolean
): SxStyleProp => {
  {
    const css: SxStyleProp = {
      display: "grid",
      gridTemplateColumns: "repeat(5, auto)",
      gridTemplateRows: "repeat(5, auto)",
      width: "150px",
      height: "150px",
      boxShadow: "shadow-100",
      background: "#fff",
      margin: "1rem",
      border: "solid 2px",
      borderColor: "white",
    };
    if (player) {
      css[":hover"] = {
        boxShadow: "shadow-200",
        cursor: "pointer",
      };
    }

    if (active) {
      css.boxShadow = "shadow-300";
      css[":hover"] = {
        boxShadow: "shadow-300",
      };
      css.borderColor = "gray-600";
    }
    if (disabled) {
      css.opacity = 0.25;
      css[":hover"] = {
        opacity: 0.25,
      };
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
