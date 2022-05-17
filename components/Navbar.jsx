import { Image, Link, Box, Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box
      position="fixed"
      top="0"
      bgColor="#222A38"
      width="100%"
      height="72px"
      shadow="lg"
      alignItems="center"
      display="flex"
      px="5"
      justifyContent="space-between"
    >
      <Image height="1rem" src="/vew.svg" alt="Dan Abramov" />
      <Box gap="12px" display="flex">
        <Link _hover={{ underline: "none" }} href="/auth/signin">
          <Button
            border="1px"
            borderColor="#8b5cf6"
            bgColor="#0F1521"
            borderRadius="full"
          >
            Sign in
          </Button>
        </Link>
        <Link _hover={{ underline: "none" }} href="/auth/signup">
          <Button
            _hover={{
              bgGradient: "linear(to-r, #8b5cf6, pink.500)",
              opacity: 0.8,
            }}
            _active={{
              bgGradient: "linear(to-r, #8b5cf6, pink.500)",
              opacity: 0.8,
            }}
            bgGradient="linear(to-r, #8b5cf6, pink.500)"
            borderRadius="full"
          >
            Sign up
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Navbar;
