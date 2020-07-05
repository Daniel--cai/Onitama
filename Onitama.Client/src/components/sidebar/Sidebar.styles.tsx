import { SxStyleProp } from "theme-ui";

export const sidebarCss = (active: boolean): SxStyleProp => {
  const css: SxStyleProp = {
    variant: "text.heading4",
    color: "indigo-300",
    width: "12rem",
    p: "xs",
    alignItems: "center",
    borderRadius: "soft",
    mb: "xs",
    cursor: "pointer",
    [":hover"]: {
      backgroundColor: "gray-300",
    },
  };
  if (active) {
    css.backgroundColor = "gray-300";
    css[":hover"] = { backgrounColor: "gray-300" };
  }
  return css;
};

export const moveCss: SxStyleProp = {
  boxShadow: "shadow-300",
  backgroundColor: "white",
  borderRadius: "soft",
  justifyContent: "center",
  alignItems: "center",
  height: "6rem",
  cursor: "pointer",
  ":hover": {
    boxShadow: "shadow-400",
  },
  mt: "sm",
};

export const red: SxStyleProp = {
  mx: "md",
  color: "red-300",
};

export const blue: SxStyleProp = {
  mx: "md",
  color: "blue-300",
};
