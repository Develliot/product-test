import { ReactNode } from "react";
import Head from "next/head";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* header  here */}
      {children}
      {/* footer  here */}
    </main>
  );
};

export default Layout;
