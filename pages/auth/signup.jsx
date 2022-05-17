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

export default function signup() {
  return (
    <div>
      <Center minHeight="95vh">
        <Container width="450px">
          <Box bgColor="#222A38" p={6} borderRadius="xl">
            <Heading textAlign="center">Sign up.</Heading>
            <Center mt="10px">
              <Link href="/auth/signin">Have an account? Sign in</Link>
            </Center>
            <FormControl mt="20px">
              <FormLabel htmlFor="email">Username</FormLabel>
              <Input
                bgColor="#1A202C"
                _placeholder={{ color: "#CBD5E0" }}
                placeholder="Username..."
                id="username"
                type="text"
              />
            </FormControl>
            <FormControl mt="20px">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                bgColor="#1A202C"
                _placeholder={{ color: "#CBD5E0" }}
                placeholder="Email address..."
                id="email"
                type="email"
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
            <FormControl mt="20px">
              <FormLabel htmlFor="email">Confirm Password</FormLabel>
              <Input
                bgColor="#1A202C"
                _placeholder={{ color: "#CBD5E0" }}
                placeholder="Confirm Password..."
                id="confirmPassword"
                type="password"
              />
            </FormControl>
            <Button
              mt="20px"
              width="full"
              borderRadius="full"
              colorScheme="purple"
            >
              Sign up
            </Button>
          </Box>
        </Container>
      </Center>
    </div>
  );
}
