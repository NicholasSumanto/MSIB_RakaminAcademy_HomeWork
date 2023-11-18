import { useState } from 'react';
import {
  Container,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link as ChakraLink,
  Box,
  Flex,
  Center,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { registerUser } from '../modules/fetch'; // Update the path accordingly

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await registerUser(name, email, password);
      console.log('Registration successful!', response);
      // Optionally, you can redirect the user to the login page or display a success message
    } catch (error) {
      setError(error.message);
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <Container>
      <VStack spacing={8} mt={12}>
        <Heading as="h1" size="2xl">
          Register
        </Heading>
        <Box w="md">
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="email" mt={4} isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password" mt={4} isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Center>
            <Button colorScheme="teal" mt={8} onClick={handleRegister}>
              Register
            </Button>
          </Center>
          <Flex direction="column" align="center" mt={4}>
            <NextLink href="/login" passHref>
              <Button as={ChakraLink} variant="link" color="teal.500">
                Already have an account? Login here.
              </Button>
            </NextLink>
          </Flex>
          {error && (
            <Box color="red" mt={4}>
              {error}
            </Box>
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default Register;
