/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import React from 'react';
import * as styles from './Button.styles';

export type ButtonSize = 'small' | 'large';
export type ButtonType = 'primary' | 'secondary' | 'outlined' | 'text';

export interface ButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  id?: string;
  sx?: SxStyleProp;
  children?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  primary?: boolean;
  secondary?: boolean;
  buttonSize?: ButtonSize;
  onClick?: (e: React.SyntheticEvent) => any;
  icon?: 'text';
}

export const Button: React.FunctionComponent<ButtonProps> = React.forwardRef(
  (
    {
      id,
      children,
      className,
      onClick,
      primary,
      fullWidth,
      type,
      disabled,
      sx,
      secondary,
      buttonSize = 'large',
      ...rest
    },
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        sx={{
          ...sx!,
          ...styles.buttonCss({
            buttonType: 'primary',
            buttonSize,
            secondary,
            disabled
          })
        }}
        className={className}
        onClick={onClick}
        type="button"
        {...rest}>
        {children}
      </button>
    );
  }
);
