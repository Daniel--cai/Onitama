import { SxStyleProp } from "theme-ui";

export const sidebarCss = (active: boolean): SxStyleProp => {
  const css: SxStyleProp = {
    variant: "text.heading3",
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
