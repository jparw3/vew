import {
  Button,
  Box,
  Center,
  Input,
  Container,
  Heading,
  Link,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Center minHeight="95vh">
        <Container width="450px">
          <Box bgColor="#222A38" p={6} borderRadius="xl">
            <Heading textAlign="center">Sign In.</Heading>
            <Center mt="10px">
              <Link href="/auth/signup">Need an account? Sign Up</Link>
            </Center>
            <FormControl mt="20px">
              <FormLabel htmlFor="email">Email or Username</FormLabel>
              <Input
                bgColor="#1A202C"
                _placeholder={{ color: "#CBD5E0" }}
                placeholder="Email address or username..."
                id="username"
                type="text"
              />
            </FormControl>
            <FormControl mt="20px">
              <FormLabel htmlFor="email">Password</FormLabel>
              <Input
                bgColor="#1A202C"
                _placeholder={{ color: "#CBD5E0" }}
                placeholder="Password..."
                id="password"
                type="password"
              />
            </FormControl>
            <Box mt="10px">
              <Link fontWeight="bold" href="/forgot">
                Forgot your password?
              </Link>
            </Box>
            <Button
              mt="5px"
              width="full"
              borderRadius="full"
              colorScheme="purple"
            >
              Sign in
            </Button>
          </Box>
        </Container>
      </Center>
    </div>
  );
}
