// pages/books/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Box, Heading, Button, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import { getBookDetailById } from '../modules/fetch';

const BookDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    
    const fetchBookDetail = async () => {
      try {
        const { book } = await getBookDetailById(id);
        setBook(book);
      } catch (error) {
        console.error('Error fetching book details:', error.message);
      }
    };

    if (id) {
      fetchBookDetail();
    }
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Heading as="h1" size="2xl" mb={4}>
        {book.title}
      </Heading>
      <p>{`Author: ${book.author}`}</p>
      <p>{`Publisher: ${book.publisher}`}</p>
      <p>{`Year: ${book.year}`}</p>
      <p>{`Pages: ${book.pages}`}</p>
      <NextLink href="/" passHref>
        <ChakraLink>
          <Button mt={4}>Back to List</Button>
        </ChakraLink>
      </NextLink>
    </Box>
  );
};

export default BookDetail;
