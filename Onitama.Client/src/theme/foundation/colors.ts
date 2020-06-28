const gray = {
  black: "#333333",
  white: "#ffffff",
  hover: "rgba(0, 0, 0, 0.6)",
  "gray-100": "#FFFFFF",
  "gray-200": "#F7F5F9",
  "gray-300": "#ECE9F1",
  "gray-400": "#D0C9D6",
  "gray-500": "#3F3356",
  "gray-600": "#1A051D",
};

const others = {
  "purple-100": "#EEDFF2",
  "purple-200": "#DBA5F5",
  "purple-300": "#BE52F2",

  "indigo-100": "#E5E7FA",
  "indigo-200": "#A5AFFB",
  "indigo-300": "#6979F8",

  "blue-100": "#D5E9FA",
  "blue-200": "#66B5F8",
  "blue-300": "#0084F4",

  "green-100": "#D5F2EA",
  "green-200": "#7DDFC3",
  "green-300": "#00C48C",

  "yellow-100": "#FFF8E7",
  "yellow-200": "#FFE29D",
  "yellow-300": "#FFCF5C",

  "orange-100": "#FFE8DA",
  "orange-200": "#FFC7A6",
  "orange-300": "#FFA26B",

  "red-100": "#FBE4E8",
  "red-200": "#FDAFBB",
  "red-300": "#FF647C",

  "gradient-low": "#8461C9",
  "gradient-high": "#BD7AE3",
};

const semantics = {
  success: "",
  "success-light": "#00C54A",
  warning: "#FF9C2B",
  "warning-light": "",
  danger: "",
  "error-light": "#F13C46",
  info: "#0D69D1",
  muted: gray["gray-100"],
};

const primary = {
  primary: others["indigo-300"],
  "primary-light": others["indigo-200"],
  "primary-dark": others["indigo-300"],
  "nav-primary": "#3375F6",
  "nav-secondary": "#FAFBFD",
  "bg-primary": gray["gray-100"],
  "bg-secondary": gray["gray-200"],
};

export const colors = {
  ...gray,
  ...others,
  ...primary,
  ...semantics,
  background: "gray-100",
  text: "#1c2022",
};
