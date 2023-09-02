import React, {
  forwardRef,
  Ref,
  ElementType,
  ReactNode,
  ButtonHTMLAttributes,
} from "react";
import styled from "styled-components";

export type ButtonProps = ButtonHTMLAttributes<HTMLElement> & {
  /** styled-components polymorphism where you can use the styling of a link but convert to another element like a button */
  ref?: Ref<HTMLElement>;
  /** styled-component polymorphic feature so you take the styling of a link and cast the component to be a "span" for example */
  as?: ElementType;
  /** Component children */
  children?: ReactNode;
};

const StyledButton = styled.button``;

export const Button = forwardRef(
  (props: ButtonProps, ref?: Ref<HTMLElement>) => {
    return (
      <StyledButton {...props} ref={ref}>
        {props.children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
