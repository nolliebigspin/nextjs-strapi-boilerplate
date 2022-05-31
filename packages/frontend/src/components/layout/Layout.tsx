import Head from "next/head";
import { VFC } from "react";

export type LayoutProps = {
  children: JSX.Element;
};

const Layout: VFC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Strapi + NextJS boilerplate</title>
        <meta name="description" content="Personal blog created with NextJS and Strapi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
