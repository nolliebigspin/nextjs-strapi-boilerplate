import Head from "next/head";

const Layout = (props: any) => {
  return (
    <div>
      <Head>
        <title>Strapi + NextJS boilerplate</title>
        <meta name="description" content="Personal blog created with NextJS and Strapi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
