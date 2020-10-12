import { SxStyleProp } from "theme-ui";
import { ButtonType, ButtonSize } from "./Button";

interface ButtonCssProps {
  buttonType: ButtonType;
  buttonSize: ButtonSize;
  round?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  active?: boolean;
  secondary?: boolean;
  icon?: boolean;
}

export const buttonCss = (props: ButtonCssProps): SxStyleProp => {
  let css: SxStyleProp = {
    border: "1px solid",
    borderColor: "violet-100",
    backgroundColor: "violet-100",
    outline: "none",
    cursor: "pointer",
    pt: "sm",
    pb: "sm",
    pl: "lg",
    pr: "lg",
    variant: "text.button1",
    textAlign: "center",
    color: "white",

    borderRadius: "soft",
    borderWidth: "0.125rem",
    
  };

  css[":hover"] = {
    backgroundColor: "violet-75",
    color: "white",
    borderColor: "violet-75",
  };

  css[":active"] = {
    backgroundColor: "violet-50",
    color: "white",
    borderColor: "violet-50",
  };

  if (props.fullWidth) {
    css.width = "100%";
    css.display = "flex";
  }
  if (props.secondary) {
    css.backgroundColor = "white";
    css.color = "violet-100";
    css.borderColor = "violet-100";

    css[":active"] = {
      backgroundColor: "violet-50",
      borderColor: "violet-50",
    };
  }
  if (props.disabled) {
    css.cursor = "stop";
    css.backgroundColor = "blue-light-2";
    css.color = "blue-light-2";
  }
  if (props.buttonSize === "small") {
    css.variant = "text.button2";
  }
  return css;
};
