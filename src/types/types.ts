export type Product = {
  id: number;
  name: string;
  power: string;
  description: string;
  price: number;
  quantity: number;
  brand: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  model_code: string;
  colour: string;
  img_url: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type SpaceType =
  | "auto"
  | "xxs"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "xxl"
  | "none";

export type SpacingType = {
  auto: string;
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  none: string;
};

export type TokenColors = {
  hemocyanin: string;
  ice: string;
  plum: string;
  purpleHaze: string;
  siphon: string;
  sohoLights: string;
};

export type ColorKeyType = keyof TokenColors;

export type TypographyType = {
  fontFamilyBase: string;
  fontFamilyHeadings: string;
  fontSizeBase: string;
  fontWeightHeavy: string;
  fontWeightNormal: string;
  fontWeightMedium: string;
  fontWeightLight: string;
  fontWeightVLight: string;
  linkTextDecoration: string;
  lineHeight: string;
  headerLineHeight: string;
  headerTextTransform: string;
};

export type BreakPointsType = {
  mobile: string;
  tablet: string;
  desktop: string;
  desktopLarge: string;
};

export type ThemeType = {
  tokenColors: TokenColors;
  spacing: SpacingType;
  fontSizes: FontSizesType;
  typography: TypographyType;
  breakpoints: BreakPointsType;
};

export type WithTheme = {
  theme: ThemeType;
};

export type WordBreakType =
  | "normal"
  | "break-all"
  | "keep-all"
  | "break-word"
  | "inherit"
  | "initial"
  | "unset";

export type OverflowWrapType =
  | "normal"
  | "anywhere"
  | "revert"
  | "revert-layer"
  | "break-word"
  | "inherit"
  | "initial"
  | "unset";

export type FontSizeType =
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "xxl"
  | "xxxl"
  | "xxxxl";

export type FontSizesType = { [key in FontSizeType]: string };
