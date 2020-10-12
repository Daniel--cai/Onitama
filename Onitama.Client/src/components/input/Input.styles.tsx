import { SxStyleProp } from "theme-ui";

export const inputCss: SxStyleProp = {
  borderRadius: "soft",
  border: "1px solid",
  borderColor: "transparent",
  variant: "text.heading4",
  outline: "none",
  backgroundColor: "white",
  color: "black",
  padding: "0.5rem",
  width: "100%",
  display: "block",
  textAlign: "center",
  boxShadow: "elevation-25",

  WebkitAppearance: "none",
  ":hover": {
    borderColor: "charcoal-25",
  },
  ":focus": {
    borderColor: "charcoal-25",
  },
  "button + button": {
    marginLeft: "1",
  },
  "::placeholder": {
    color: "charcoal-50",
  },
};
