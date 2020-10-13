import { SxStyleProp } from "theme-ui";
export const sidebarCss = (active: boolean): SxStyleProp => {
  const css: SxStyleProp = {
    variant: "text.body2",
    color: "charcoal-100",
    width: "18rem",
    p: "md",
    alignItems: "center",
    mb: "sm",
    cursor: "pointer",
    [":hover"]: {
      backgroundColor: "violet-5",
    },
    [":active"]: {
      backgroundColor: "violet-10",
    },
    borderLeft: "solid 12px",
    borderLeftColor: "transparent",
  };
  if (active) {
    css.borderLeftColor = "violet-100";
  }
  return css;
};


