import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";

import { CartContextProvider } from "@/contexts/CartContext";

import "../styles/globals.css";
import { ThemeType } from "@/types/types";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

const theme: ThemeType = {
  tokenColors: {
    hemocyanin: "#180048",
    ice: "#f0ffff",
    plum: "#600e6b",
    purpleHaze: "#a49fc8",
    siphon: "#100030",
    sohoLights: "#f050f8",
  },
  spacing: {
    auto: "auto",
    xxs: "0.25rem",
    xs: "0.5rem",
    s: "1rem",
    m: "2rem",
    l: "4rem",
    xl: "8rem",
    xxl: "16rem",
    none: "none",
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    s: "0.875rem", // 14px
    m: "1rem", // 16px
    l: "1.25rem", // 20px
    xl: "1.5625rem", // 25px
    xxl: "2rem", // 32px
    xxxl: "2.5rem", // 40px
    xxxxl: "3.125rem", // 45px
  },
  typography: {
    fontFamilyBase: "Gotham, helvetica, arial, sans-serif",
    fontFamilyHeadings: "Gotham, helvetica, arial, sans-serif",
    fontSizeBase: "16px",
    fontWeightHeavy: "700",
    fontWeightMedium: "500", // default heading
    fontWeightNormal: "400", // default body
    fontWeightLight: "300",
    fontWeightVLight: "100",
    linkTextDecoration: "underline",
    lineHeight: "1.5em",
    headerLineHeight: "1.25em",
    headerTextTransform: "none",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <CartContextProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CartContextProvider>
    </ApolloProvider>
  );
}
