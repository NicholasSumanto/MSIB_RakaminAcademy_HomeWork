import { Container, Heading, Button, Flex, Spacer, Link, HStack, Box } from '@chakra-ui/react';
import NextLink from 'next/link';

const Home = () => {
  return (
    <Box>
      <Flex bg="teal.500" p={4} color="white" align="center" justify="space-between" w="100%">
        <Heading as="h1" size="lg">
          My Bookstore
        </Heading>
        <HStack spacing={4}>
          <NextLink href="/login" passHref>
            <Link>
              <Button colorScheme="blackAlpha" variant="solid" bg="blue.500">
                Login
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/register" passHref>
            <Link>
              <Button colorScheme="blackAlpha" variant="solid" bg="gray.500">
                Register
              </Button>
            </Link>
          </NextLink>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Home;
