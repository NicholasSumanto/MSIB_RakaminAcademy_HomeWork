import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Box, Heading, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { editBook, getBookDetailById } from '../modules/fetch';

const EditBook = () => {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedAuthor, setEditedAuthor] = useState('');
 

  useEffect(() => {
    
    const fetchBookDetail = async () => {
      try {
        const { book } = await getBookDetailById(id);
        setBook(book);
        setEditedTitle(book.title);
        setEditedAuthor(book.author);
        
      } catch (error) {
        console.error('Error fetching book details:', error.message);
      }
    };

    if (id) {
      fetchBookDetail();
    }
  }, [id]);

  const handleEditBook = async () => {
    try { 
      await editBook(id, editedTitle, editedAuthor );
      router.push(`/books/${id}`);
    } catch (error) {
      console.error('Error editing book:', error.message);
    }
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Heading as="h1" size="2xl" mb={4}>
        Edit Book: {book.title}
      </Heading>
      <FormControl id="editedTitle" isRequired mb={4}>
        <FormLabel>Title</FormLabel>
        <Input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
      </FormControl>
      <FormControl id="editedAuthor" isRequired mb={4}>
        <FormLabel>Author</FormLabel>
        <Input type="text" value={editedAuthor} onChange={(e) => setEditedAuthor(e.target.value)} />
      </FormControl>
      {/* Add other form controls for additional book properties */}
      <Button colorScheme="teal" onClick={handleEditBook}>
        Save Changes
      </Button>
    </Box>
  );
};

export default EditBook;
