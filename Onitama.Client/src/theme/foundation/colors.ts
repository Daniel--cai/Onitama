const gray = {
  black: "#333333",
  white: "#ffffff",
  "charcoal-2": "#FAFAFA",
  "charcoal-10": "#EAEAEA",
  "charcoal-25": "#CECECE",
  "charcoal-50": "#9F9F9F",
  "charcoal-75": "#707070",
  "charcoal-100": "#414141",
  "charcoal-100-dark": "#2D2D2D",
};

const others = {
  "violet-2": "#F9F8FD",
  "violet-5": "#F4F3F8",
  "violet-10": "#F0EDFB",
  "violet-25": "#D9D3F5",
  "violet-50": "#B4A6EA",
  "violet-75": "#8F7BE1",
  "violet-100": "#694ED6",
  "violet-100-dark": "#493694",

  "fuschia-25": "#EFCCE7",
  "fuschia-50": "#DF9AD0",
  "fuschia-75": "#D069B9",
  "fuschia-100": "#C137A2",
  "fuschia-100-dark": "#862670",

  "ocean-25": "#D6EFF5",
  "ocean-50": "#ADE0EB",
  "ocean-75": "#84D0E1",
  "ocean-100": "#5BC1D7",

  "grass-25": "#D4EFDA",
  "grass-50": "#A9E0B7",
  "grass-75": "#80D194",
  "grass-100": "#56C271",

  "crimson-25": "#F8BDCF",
  "crimson-50": "#F17FA2",
  "crimson-75": "#EA3F74",
  "crimson-100": "#E40046",

  "amber-25": "#FFE1CD",
  "amber-50": "#FFC39C",
  "amber-75": "#FFA76D",
  "amber-100": "#FF8A3D",

  "gold-25": "#FBEBC7",
  "gold-50": "#F7D991",
  "gold-75": "#F3C65A",
  "gold-100": "#F0B323",
};

const semantics = {
  success: others["grass-100"],
  "success-light": others["grass-50"],
  warning: others["gold-100"],
  "warning-light": others["gold-100"],
  danger: others["crimson-100"],
  "error-light": others["crimson-75"],
  info: others["ocean-100"],
  muted: gray["charcoal-2"],
};

export const colors = {
  ...gray,
  ...others,
  ...semantics,
  background: gray["charcoal-2"],
  text: gray["charcoal-100"],
};
