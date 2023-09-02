import React, {
  forwardRef,
  Ref,
  ElementType,
  ReactNode,
  ButtonHTMLAttributes,
} from "react";
import styled, { css } from "styled-components";

import { WithTheme } from "@/types/types";

export type ButtonProps = ButtonHTMLAttributes<HTMLElement> & {
  /** styled-components polymorphism where you can use the styling of a link but convert to another element like a button */
  ref?: Ref<HTMLElement>;
  /** styled-component polymorphic feature so you take the styling of a link and cast the component to be a "span" for example */
  as?: ElementType;
  /** Component children */
  children?: ReactNode;
  variant?: "primary" | "secondary";
};

type StyledButtonProps = ButtonProps & WithTheme;

const StyledButton = styled.button<StyledButtonProps>`
  min-height: 2em;
  min-width: 2em;

  :hover {
    cursor: pointer;
  }

  ${(props: StyledButtonProps) =>
    props.variant === "primary" &&
    css`
      background-color: ${props.theme.tokenColors.sohoLights};
      border-color: ${props.theme.tokenColors.sohoLights};
      color: ${props.theme.tokenColors.hemocyanin} !important;
      :focus,
      :hover {
        background-color: ${props.theme.tokenColors.sohoLights};
        border-color: ${props.theme.tokenColors.sohoLights};
        color: ${props.theme.tokenColors.hemocyanin} !important;
      }
      :disabled {
        cursor: not-allowed;
        background-color: ${props.theme.tokenColors.plum};
        border-color: ${props.theme.tokenColors.plum};
        color: ${props.theme.tokenColors.purpleHaze} !important;
      }
    `}

  ${(props: StyledButtonProps) =>
    props.variant === "secondary" &&
    css`
      background-color: transparent;
      border-color: transparent;
      color: ${props.theme.tokenColors.ice} !important;
      :focus,
      :hover {
        background-color: transparent;
        border-color: transparent;
        color: ${props.theme.tokenColors.purpleHaze} !important;
      }
      :disabled {
        cursor: not-allowed;
        background-color: transparent;
        border-color: transparent;
        color: ${props.theme.tokenColors.plum} !important;
      }
    `}
`;

export const Button = forwardRef(
  (props: ButtonProps, ref?: Ref<HTMLElement>) => (
    <StyledButton {...props} ref={ref}>
      {props.children}
    </StyledButton>
  )
);

Button.displayName = "Button";

export default Button;
