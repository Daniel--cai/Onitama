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
  boxShadow: "shadow-200",

  WebkitAppearance: "none",
  ":hover": {
    borderColor: "gray-300",
  },
  ":focus": {
    borderColor: "gray-300",
  },
  "button + button": {
    marginLeft: "1",
  },
  "::placeholder": {
    color: "gray-400",
  },
};
