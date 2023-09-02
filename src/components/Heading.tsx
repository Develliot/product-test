import React, { HTMLAttributes, ElementType } from "react";
import styled, { css } from "styled-components";
import {
  WordBreakType,
  FontSizeType,
  OverflowWrapType,
  ColorKeyType,
  ThemeType,
} from "@/types/types";

import spacing, { SpacingProps } from "./Spacing";

export type HeadingProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    /** font size FontSizeType t-shirt sizes  */
    textSize?: FontSizeType;
    /** horizontal alignment of text */
    textAlign?: "left" | "right" | "center";
    /** color of text */
    textColor?: string;
    /** styled-component polymorphic feature so you take the styling of a header and cast the component to be a "span" for example */
    as?: ElementType;
    /** word-break behavior */
    wordBreak?: WordBreakType;
    /** overflow-wrap behavior */
    overflowWrap?: OverflowWrapType;
  };

type StyledHeadingProps = SpacingProps & {
  theme: ThemeType;
  textSize?: FontSizeType;
  textAlign?: "left" | "right" | "center";
  textColor?: ColorKeyType | string;
  wordBreak?: WordBreakType;
  overflowWrap?: WordBreakType;
};

const StyledHeading = (props: StyledHeadingProps) => css`
  font-family: ${({
    theme: {
      typography: { fontFamilyHeadings },
    },
  }: StyledHeadingProps) => fontFamilyHeadings};
  word-break: ${() => props.wordBreak || "normal"};
  overflow-wrap: ${() => props.overflowWrap || "break-word"};
  font-weight: ${({
    theme: {
      typography: { fontWeightMedium },
    },
  }: StyledHeadingProps) => fontWeightMedium};
  color: ${({ theme: { tokenColors }, textColor }: StyledHeadingProps) =>
    textColor && typeof tokenColors[textColor as ColorKeyType] !== "undefined"
      ? tokenColors[textColor as ColorKeyType]
      : textColor || tokenColors.ice};
  line-height: ${({
    theme: {
      typography: { headerLineHeight },
    },
  }: StyledHeadingProps) => headerLineHeight};
  text-transform: ${({
    theme: {
      typography: { headerTextTransform },
    },
  }: StyledHeadingProps) => headerTextTransform};
  margin-top: ${({
    theme: {
      spacing: { m },
    },
  }: StyledHeadingProps) => m};
  margin-bottom: ${({
    theme: {
      spacing: { s },
    },
  }: StyledHeadingProps) => s};
  max-width: 100%;
  text-align: ${({ textAlign }: StyledHeadingProps) => textAlign || "left"};

  &:first-child {
    margin-top: 0;
  }

  ${() => {
    const { theme, ...propsWithoutTheme } = props;
    return spacing(propsWithoutTheme, props.theme);
  }}
`;

const desktopFontSize = (
  textSize: FontSizeType | null,
  defaultFontSize: string,
  theme: ThemeType
) => {
  switch (textSize) {
    case "m":
      return theme.fontSizes.m;
    case "l":
      return theme.fontSizes.l;
    case "xl":
      return theme.fontSizes.xl;
    case "xxl":
      return theme.fontSizes.xxl;
    case "xxxl":
      return theme.fontSizes.xxxl;
    case "xxxxl":
      return theme.fontSizes.xxxxl;

    default:
      return defaultFontSize;
  }
};

// everything drops down a size on the typography scale
const tabletFontSize = (
  textSize: FontSizeType | null,
  defaultFontSize: string,
  theme: ThemeType
) => {
  switch (textSize) {
    case "m":
      return theme.fontSizes.m;
    case "l":
      return theme.fontSizes.l;
    case "xl":
      return theme.fontSizes.l;
    case "xxl":
      return theme.fontSizes.xl;
    case "xxxl":
      return theme.fontSizes.xxl;
    case "xxxxl":
      return theme.fontSizes.xxxl;

    default:
      return defaultFontSize;
  }
};

// everything drops down two sizes on the typography scale
const mobileFontSize = (
  textSize: FontSizeType | null,
  defaultFontSize: string,
  theme: ThemeType
) => {
  switch (textSize) {
    case "m":
      return theme.fontSizes.m;
    case "l":
      return theme.fontSizes.l;
    case "xl":
      return theme.fontSizes.l;
    case "xxl":
      return theme.fontSizes.l;
    case "xxxl":
      return theme.fontSizes.xl;
    case "xxxxl":
      return theme.fontSizes.xxl;

    default:
      return defaultFontSize;
  }
};

export const H1 = styled.h1<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}
  font-size: ${({ theme, textSize }: StyledHeadingProps) =>
    mobileFontSize(textSize || null, theme.fontSizes.xxl, theme)};
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoints.tablet}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      tabletFontSize(textSize || null, theme.fontSizes.xxxl, theme)};
  }
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoints.desktop}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      desktopFontSize(textSize || null, theme.fontSizes.xxxxl, theme)};
  }
`;

export const H2 = styled.h2<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}
  font-size: ${({ theme, textSize }: StyledHeadingProps) =>
    mobileFontSize(textSize || null, theme.fontSizes.xl, theme)};
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoints.tablet}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      tabletFontSize(textSize || null, theme.fontSizes.xxl, theme)};
  }
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoints.desktop}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      desktopFontSize(textSize || null, theme.fontSizes.xxxl, theme)};
  }
`;

export const H3 = styled.h3<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}
  font-size: ${({ theme, textSize }: StyledHeadingProps) =>
    mobileFontSize(textSize || null, theme.fontSizes.l, theme)};
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoints.tablet}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      tabletFontSize(textSize || null, theme.fontSizes.xl, theme)};
  }
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoints.desktop}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      desktopFontSize(textSize || null, theme.fontSizes.xxl, theme)};
  }
`;

export const H4 = styled.h4<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}
  font-size: ${({ theme, textSize }: StyledHeadingProps) =>
    mobileFontSize(textSize || null, theme.fontSizes.l, theme)};
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoints.tablet}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      tabletFontSize(textSize || null, theme.fontSizes.l, theme)};
  }
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoints.desktop}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      desktopFontSize(textSize || null, theme.fontSizes.xl, theme)};
  }
`;

export const H5 = styled.h5<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}

  font-size: ${({ theme, textSize }: StyledHeadingProps) =>
    mobileFontSize(textSize || null, theme.fontSizes.l, theme)};
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoints.tablet}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      tabletFontSize(textSize || null, theme.fontSizes.l, theme)};
  }
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoints.desktop}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      desktopFontSize(textSize || null, theme.fontSizes.l, theme)};
  }
`;

export const H6 = styled.h6<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}

  font-size: ${({ theme, textSize }: StyledHeadingProps) =>
    mobileFontSize(textSize || null, theme.fontSizes.m, theme)};
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoints.tablet}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      tabletFontSize(textSize || null, theme.fontSizes.m, theme)};
  }
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoints.desktop}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      desktopFontSize(textSize || null, theme.fontSizes.m, theme)};
  }
`;

/**
 * 
 * Use headings consistently to create a clear hierarchy throughout your service.
Markup headings semantically using the appropriate <h#> level HTML element and
use the corresponding heading class (h1, h2, h3, ....). Write all headings in sentence case. Heading differs from the Text component by using a different font-family and it changes the font size according to the screen width breakpoints.
 * 
 */
const Heading = ({ h1, h2, h3, h4, h5, h6, ...props }: HeadingProps) => {
  if (h1) return <H1 {...props} />;
  if (h2) return <H2 {...props} />;
  if (h3) return <H3 {...props} />;
  if (h4) return <H4 {...props} />;
  if (h5) return <H5 {...props} />;
  if (h6) return <H6 {...props} />;
  return <H2 {...props} />;
};

export default Heading;
