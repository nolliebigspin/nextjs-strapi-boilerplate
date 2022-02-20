import Head from "next/head";

const Layout = (props: any) => {
  return (
    <div>
      <Head>
        <title>alec.digital</title>
        <meta name="description" content="Personal blog created with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
