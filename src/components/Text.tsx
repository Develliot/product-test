import React, {
  FunctionComponent,
  HTMLAttributes,
  Ref,
  forwardRef,
  ElementType,
} from "react";
import styled from "styled-components";

import Spacing, { SpacingProps } from "./Spacing";

import {
  WordBreakType,
  FontSizeType,
  ColorKeyType,
  OverflowWrapType,
  ThemeType,
} from "@/types/types";

export type TextStyledProps = SpacingProps & {
  textColor?: ColorKeyType;
  textAlign?: "left" | "right" | "center" | "justify";
  textSize?: FontSizeType;
  textWeight?: number;
  as?: any;
  wordBreak?: WordBreakType;
  overflowWrap?: OverflowWrapType;
  theme: ThemeType;
};

export const TextStyled = styled.p<TextStyledProps>`
  font-family: ${({ theme }: TextStyledProps) =>
    theme.typography.fontFamilyBase};
  word-break: ${({ wordBreak }: TextStyledProps) => wordBreak || "normal"};
  overflow-wrap: ${({ overflowWrap }: TextStyledProps) =>
    overflowWrap || "break-word"};
  color: ${({ theme: { tokenColors }, textColor }: TextStyledProps) =>
    textColor && typeof tokenColors[textColor] !== "undefined"
      ? tokenColors[textColor]
      : textColor || tokenColors.ice};
  text-align: ${({ textAlign }: TextStyledProps) => textAlign || "left"};
  font-size: ${({
    theme: {
      fontSizes,
      fontSizes: { m },
    },
    textSize,
  }: TextStyledProps) => (textSize ? fontSizes[textSize] : m)};
  line-height: ${({ theme }: TextStyledProps) => theme.typography.lineHeight};
  font-weight: ${({ textWeight, theme }: TextStyledProps) =>
    textWeight || theme.typography.fontWeightNormal};
  padding: 0;
  margin: 0;
  margin-bottom: ${({
    as,
    theme: {
      spacing: { xs },
    },
  }: TextStyledProps) =>
    typeof as === "undefined" || as === "p" ? `${xs}` : 0};

  &:last-child {
    margin-bottom: 0;
  }

  ${(props) => Spacing(props, props.theme as ThemeType)}
`;

// the 'as' prop is for styled component casting
// text hover color prop is only used in Link which extends Text

/**
 * Text is to be used as the main paragraph component (or span using as="span"). Using the Text component is preferred to simply adding text to a div and styling that div, this will guarantee we are always using the correct font and default text colour.
 */
export type TextProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    /** text colour  */
    textColor?: ColorKeyType | string;
    /** text horizontal alignment  */
    textAlign?: "left" | "right" | "center" | "justify";
    /** font size FontSizeType t-shirt sizes  */
    textSize?: FontSizeType;
    /** font weight theme.typography{fontWeightHeavy/fontWeightNormal/fontWeightMedium/fontWeightLight/fontWeightVLight} is better than a random number */
    textWeight?: number;
    /** styled-components polymorphism where you can set this to "span", "p" or "h2" it default to "p" */
    as?: ElementType;
    /** word-break behaviour */
    wordBreak?: WordBreakType;
    /** overflow-wrap behaviour */
    overflowWrap?: OverflowWrapType;
    /** react reference to the DOM element sometime used to scroll to or set focus after an error */
    ref?: Ref<HTMLElement>;
  };

export const Text: FunctionComponent<TextProps> = forwardRef(
  (props: TextProps, ref?: Ref<HTMLElement>) => (
    <TextStyled {...props} ref={ref} />
  )
);

Text.displayName = "Text";

export default Text;
