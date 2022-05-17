import { Center, Link, Box } from "@chakra-ui/react";

function Footer() {
  return (
    <Center
      textAlign="center"
      maxWidth="28rem"
      pb="10px"
      display="flex"
      flexDirection="column"
      gap="2px"
      textColor="#a0aec0"
      width="100%"
      marginX="auto"
      fontSize="0.875rem"
    >
      <Box gap="10px" display="flex">
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">DMCA</Link>
      </Box>
      <Box>© 2022 Vew Labs, Inc.</Box>
    </Center>
  );
}

export default Footer;
