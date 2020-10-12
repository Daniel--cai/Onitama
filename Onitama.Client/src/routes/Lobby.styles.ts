import { SxStyleProp } from "theme-ui";

export const lobbyCss: SxStyleProp = {
  fontSize: "3",
  backgroundColor: "charcoal-2",
};

export const lobbyScreenCss: SxStyleProp = {
  display: "grid",
  gridTemplateRows: "100px auto 100px",
  height: "calc(100vh - 3rem)",
  minHeight: ["0", "0", "750px"],
};

export const segmentCss: SxStyleProp = {
  display: "grid",
  gridGap: "0.5em",
  gridTemplateRows: "repeat(8, 1fr)",
  background: "charcoal-10",
  padding: "1rem 0",
};

export const segmentLineCss: SxStyleProp = {
  background: "white",
  display: "flex",
  flexDirection: "row",
  color: "black",
  fontWeight: "bold",
  boxShadow: "base",
  borderRadius: "soft",
  margin: "0 1rem",
  padding: "md",
  "> div": {
    flex: "1",
    alignItems: "center",
    display: "flex",
  },
};

export const indicatorCss: SxStyleProp = {
  // justifyContent: "flex-start",
  marginRight: "md",
  color: "green",
};

export const textCss: SxStyleProp = {};
export const codeCss: SxStyleProp = {
  alignSelf: "center",
  justifyContent: "center",
  display: "inline-block",
  borderRadius: "4px",
  height: "55px",
  color: "black",
  fontSize: "6",
};

export const closeCss: SxStyleProp = {
  justifyContent: "flex-end",
  color: "charcoal-10",
  "> i": {
    cursor: "pointer",
  },
};

export const landingScreen: {
  container: SxStyleProp;
  input: SxStyleProp;
  logo: SxStyleProp;
  actions: SxStyleProp;
} = {
  container: {
    display: "grid",
    gridTemplateRows: "10rem auto",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  input: {
    padding: "2rem",
    "> *": {
      mb: "1rem",
    },
  },
  logo: {
    height: "7rem",
    alignSelf: "end",
    justifySelf: "center",
  },
  actions: {
    margin: "1rem 3rem",
    fontWeight: "bold",
    fontSize: "1.2rem",
    "> div:last-child": {
      borderTop: "solid 1px white",
      fontWeight: "100",
      fontSize: "0.9rem",
    },
    "> div": {
      padding: "1.5rem",
    },
  },
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
