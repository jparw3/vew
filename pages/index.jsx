import { Box, Center, Container, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Center minHeight="95vh">
        <Container width="450px">
          <Box bgColor="#222A38" p={6} borderRadius="xl">
            <Heading textAlign="center">Home.</Heading>
          </Box>
        </Container>
      </Center>
    </div>
  );
}
