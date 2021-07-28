import { SxStyleProp } from "theme-ui";

export const modalWrapperCss: SxStyleProp = {
  width: "100%",
  height: "100vh",
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  top: 0,
  left: 0,
  zIndex: "2",
  transition: "all 200ms ease-in-out",
  variant: "gradient",
};

export const modalCss: SxStyleProp = {
  width: "30rem",
  backgroundColor: "charcoal-10",
  display: "flex",
  alignSelf: "center",
  flexDirection: "column",
  margin: ["unset", "auto", "auto"],
  position: "relative",
  borderRadius: "medium",
  boxShadow: "elevation-10",
  p: "xl",
  textAlign: "center",
};
