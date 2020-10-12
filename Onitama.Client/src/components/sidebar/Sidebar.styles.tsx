import { SxStyleProp } from "theme-ui";

export const sidebarCss = (active: boolean): SxStyleProp => {
  const css: SxStyleProp = {
    variant: "text.heading4",
    color: "violet-100",
    width: "12rem",
    p: "xs",
    alignItems: "center",
    borderRadius: "soft",
    mb: "xs",
    cursor: "pointer",
    [":hover"]: {
      backgroundColor: "charcoal-25",
    },
  };
  if (active) {
    css.backgroundColor = "charcoal-25";
    css[":hover"] = { backgrounColor: "charcoal-25" };
  }
  return css;
};

export const moveCss: SxStyleProp = {
  boxShadow: "elevation-50",
  backgroundColor: "white",
  borderRadius: "soft",
  justifyContent: "center",
  alignItems: "center",
  height: "6rem",
  cursor: "pointer",
  ":hover": {
    boxShadow: "elevation-75",
  },
  mt: "sm",
};

export const red: SxStyleProp = {
  mx: "md",
  color: "crimson-100",
};

export const blue: SxStyleProp = {
  mx: "md",
  color: "ocean-100",
};
