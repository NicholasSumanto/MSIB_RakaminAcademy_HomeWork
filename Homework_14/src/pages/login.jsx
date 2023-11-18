import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, Link as ChakraLink, Box, Flex, Center } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';
import { loginUser } from '../modules/fetch';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const userData = await loginUser(email, password);
      const token = userData.token;
      localStorage.setItem('token', token);
      router.push('/main'); // Redirect to the main page after successful login
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <Container>
      <VStack spacing={8} mt={12}>
        <Heading as="h1" size="2xl">
          Login
        </Heading>
        <Box w="md">
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password" mt={4} isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Center>
            <Button colorScheme="teal" mt={8} onClick={handleLogin}>
              Login
            </Button>
          </Center>
          <Flex direction="column" align="center" mt={4}>
            <NextLink href="/register" passHref>
              <Button as={ChakraLink} variant="link" color="teal.500">
                Don't have an account? Register here.
              </Button>
            </NextLink>
            <Button variant="link" color="teal.500" mt={2} onClick={() => router.push('/')}>
              Back to Home
            </Button>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Login;
