import { SxStyleProp } from "theme-ui";

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
  mt: "md",
};

export const red: SxStyleProp = {
  mx: "md",
  color: "crimson-100",
};

export const blue: SxStyleProp = {
  mx: "md",
  color: "ocean-100",
};
