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
