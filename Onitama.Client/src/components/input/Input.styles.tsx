import { SxStyleProp } from "theme-ui";

export const inputCss: SxStyleProp = {
  borderRadius: "soft",
  border: "0.125rem solid",
  borderColor: "white",
  variant: "text.heading4",
  outline: "none",
  backgroundColor: "white",
  color: "black",
  padding: "0.5rem",
  width: "100%",
  display: "block",
  textAlign: "center",
  boxShadow: "shadow-100",

  WebkitAppearance: "none",
  ":hover": {
    borderColor: "gray-300",
  },
  ":focus": {
    borderColor: "gray-300",
    //backgroundColor: "blue-light-2"
  },
  "button + button": {
    marginLeft: "1",
  },
};
