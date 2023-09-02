import { ReactNode } from "react";
import Head from "next/head";
import styled from "styled-components";

import Button from "@/components/Button";
import Text from "@/components/Text";

import { WithTheme } from "@/types/types";
import Box from "./Box";

type LayoutProps = {
  children: ReactNode;
};

export const StyledHeader = styled.header`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: ${({
    theme: {
      spacing: { xs },
    },
  }: WithTheme) => xs};
`;

export const SkipToMain = styled.a`
  left: -999px;
  position: absolute;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -999;
  &:focus,
  &:active,
  &:focus-within {
    left: auto;
    top: auto;
    width: 30%;
    height: auto;
    overflow: auto;
    margin: 10px 35%;
    padding: ${({
      theme: {
        spacing: { xs },
      },
    }: WithTheme) => xs};
    border-radius: 15px;
    border: 4px solid yellow;
    text-align: center;
    font-size: 1.2em;
    z-index: 999;
  }
`;

export const StyledLink = styled.a`
  display: flex;
`;

export const Image = styled.img`
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 100%;
`;

export const LogoWrapper = styled.div`
  width: auto;
  height: 2.5em;
  margin: auto;
`;

export const BasketIconWrapper = styled.div`
  width: 2em;
  height: 2em;
`;

export const StyledFooter = styled.footer`
  box-sizing: border-box;
  display: block;
  position: relative;
  width: 100%;
  background-color: ${({
    theme: {
      tokenColors: { hemocyanin },
    },
  }: WithTheme) => hemocyanin};
`;

// TODO: look at next image component

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Header */}
      <StyledHeader>
        <StyledLink href="/" title="Home">
          <LogoWrapper>
            <Image src="/octopus-logo.svg" alt="" />
          </LogoWrapper>
        </StyledLink>
        <SkipToMain href="#main">Skip to main content</SkipToMain>
        <Button variant="secondary" aria-label="My Shopping Cart">
          <BasketIconWrapper>
            <Image src="/basket.svg" alt="" />
          </BasketIconWrapper>
        </Button>
      </StyledHeader>
      <main id="main">{children}</main>
      <StyledFooter>
        <Box paddingHorizontal="s" paddingVertical="m">
          <Text textSize="xs" textColor="purpleHaze">
            Octopus Energy Ltd is a company registered in England and Wales.
            Registered number: 09263424. Registered office: 33 Holborn, London,
            EC1N 2HT. Trading office: 20-24 Broadwick Street, London, W1F 8HT
          </Text>
        </Box>
      </StyledFooter>
    </>
  );
};

export default Layout;
