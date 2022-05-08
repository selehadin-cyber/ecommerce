import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <title>Ihsan store</title>
        <meta property="og:type" content="website" />
        <meta
          name="description"
          property="og:description"
          content="ihsan store is where you can find the best electronics"
        />
        <meta property="og:type" content="video.movie" />
        <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        />
        <meta
          name="image"
          property="og:image"
          content="https://github.com/selehadin-cyber/ecommerce/raw/main/components/screenshot.png"
        />
    </Head>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </>
  );
}

export default MyApp;
