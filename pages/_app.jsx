import { ChakraProvider, Box } from "@chakra-ui/react";
import Head from "next/head";
import nProgress from "nprogress";
import Router from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => {
  console.log("route is changing");
});
Router.events.on("routeChangeComplete", () => {
  console.log("route is finished");
});

Router.events.on("routeChangeComplete", nProgress.done);
// end
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Box minH="100vh" bgColor="#0F1521">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
