import { SxStyleProp } from "theme-ui";

export const sidebarCss = (active: boolean): SxStyleProp => {
  const css: SxStyleProp = {
    variant: "text.body1",
    fontWeight: 600,
    color: "charcoal-100",
    width: "18rem",
    p: "md",
    alignItems: "center",
    borderRadius: "soft",
    mb: "sm",
    cursor: "pointer",
    [":hover"]: {
      backgroundColor: "violet-2",
    },
  };
  if (active) {
    css.color = "violet-100";
    css[":hover"] = { 
      // backgroundColor: transparentize("violet-100"),
     };
  }
  return css;
};

export const moveCss: SxStyleProp = {
  boxShadow: "elevation-10",
  backgroundColor: "white",
  borderRadius: "soft",
  justifyContent: "center",
  alignItems: "center",
  height: "6rem",
  cursor: "pointer",
  ":hover": {
    boxShadow: "elevation-25",
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
