import React, {
  FunctionComponent,
  HTMLAttributes,
  Ref,
  forwardRef,
  ReactNode,
  ElementType,
} from "react";
import styled from "styled-components";

import Spacing, { SpacingProps } from "./Spacing";
import { ColorKeyType, ThemeType } from "@/types/types";

export type BoxProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    /** background color of box, this will add default padding */
    backgroundColor?: string;
    ref?: Ref<HTMLDivElement>;
    children?: ReactNode;
    /** styled-component polymorphic feature so you take the styling of a box and cast the component to be a "span" for example */
    as?: ElementType;
    borderRadius?: string;
  };

type StyledBoxProps = SpacingProps & {
  backgroundColor?: string;
  css?: string;
  theme: ThemeType;
  borderRadius?: string;
};

export const StyledBox = styled.div<StyledBoxProps>`
  background-color: ${({ theme }: StyledBoxProps) =>
    theme.tokenColors.hemocyanin};
  padding: ${({ theme, backgroundColor }: StyledBoxProps) =>
    backgroundColor ? theme.spacing.s : 0};
  margin: 0 0 ${({ theme }: StyledBoxProps) => theme.spacing.m} 0;
  border-radius: ${({ borderRadius }: StyledBoxProps) => borderRadius || 0};

  &:last-child {
    margin-bottom: 0;
  }

  background-color: ${({
    theme: { tokenColors },
    backgroundColor,
  }: StyledBoxProps) =>
    backgroundColor &&
    typeof tokenColors[backgroundColor as ColorKeyType] !== "undefined"
      ? tokenColors[backgroundColor as ColorKeyType]
      : backgroundColor || "transparent"};
  ${(props) => Spacing(props, props.theme as ThemeType)}
`;

/**
 * Box is used to wrap other components to add margin and padding. The values will be in the t-shirt sizes specified in the theme sizes.

The more specific the the target the higher priority the css will have. For example `margin` will be overridden by the `marginVertical` or `marginHorizontal` props. `marginTop`, `marginBottom`, `marginLeft`, `marginRight` will override the the `marginVertical` and `marginHorizontal` props.
 */
const Box: FunctionComponent<BoxProps> = forwardRef(
  ({ ...props }: BoxProps, ref?: Ref<HTMLDivElement>) => {
    const { children, ...rest } = props;

    return (
      <StyledBox {...rest} ref={ref}>
        {children}
      </StyledBox>
    );
  }
);

Box.displayName = "Box";

export default Box;
