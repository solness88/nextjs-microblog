import Head from "next/head";

const name = "Hirokazu KOBAYASHI";
export const siteTitle = "Next.js blog"

function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img src="/images//profile-image.jpg" />
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
