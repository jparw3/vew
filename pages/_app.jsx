import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bgColor="#0F1521">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
