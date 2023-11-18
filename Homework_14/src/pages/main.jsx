import { useEffect, useState } from 'react';
import { Box, Button, Heading, List, ListItem, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import { getAllBooks, deleteBook } from '../modules/fetch';; // Update the path accordingly

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { books } = await getAllBooks();
        setBooks(books);
      } catch (error) {
        console.error('Error fetching books:', error.message);
      }
    };

    fetchBooks();
  }, []);

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      // After deleting, fetch the updated list of books
      const { books } = await getAllBooks();
      setBooks(books);
    } catch (error) {
      console.error('Error deleting book:', error.message);
    }
  };

  return (
    <Box>
      <Heading as="h1" size="2xl" mb={4}>
        Book List
      </Heading>
      <List spacing={3}>
        {books.map((book) => (
          <ListItem key={book.id} p={4} borderWidth="1px" borderRadius="md">
            <Box>
              <Heading as="h2" size="lg">
                {book.title}
              </Heading>
              <p>{`Author: ${book.author}`}</p>
              <p>{`Publisher: ${book.publisher}`}</p>
              <p>{`Year: ${book.year}`}</p>
              <p>{`Pages: ${book.pages}`}</p>
              <NextLink href={`/books/${book.id}`} passHref>
                <ChakraLink mr={2}>View Details</ChakraLink>
              </NextLink>
              <NextLink href={`/books/edit/${book.id}`} passHref>
                <ChakraLink mr={2}>Edit</ChakraLink>
              </NextLink>
              <Button colorScheme="red" onClick={() => handleDeleteBook(book.id)}>
                Delete
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Home;
