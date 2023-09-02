import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";

import { __DEV__ } from "@apollo/client/utilities/globals";
import { CartContextProvider } from "@/contexts/CartContext";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

import "../styles/globals.css";
import { theme } from "@/styles/theme";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

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
