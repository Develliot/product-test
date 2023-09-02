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

export type ThemeType = {
  tokenColors: TokenColors;
  spacing: SpacingType;
};
