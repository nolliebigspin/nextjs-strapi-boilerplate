import type { NextPage } from "next";
import { Center, Square, Circle, Box, Flex } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Center>
      <Box as="span" fontWeight="bold" fontSize="lg" bg="tomato" p="100" mt="100">
        IN PROGRESS!
      </Box>
    </Center>
  );
};

export default Home;
