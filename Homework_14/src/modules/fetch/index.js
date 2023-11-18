// modules/fetch.js
import { instance } from '../axios/index';

// Function for register user endpoint
async function registerUser(name, email, password) {
  try {
    console.log('Sending registration request:', { name, email, password });
    const response = await instance.post('/register', { name, email, password });
    console.log('Registration response:', response);

    if ('data' in response) {
      return response.data;
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error('Error in registerUser:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
}

// Function for login user endpoint
async function loginUser(email, password) {
  try {
    const response = await instance.post('/login', { email, password });
    if ('data' in response) {
      return response.data;
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error('Error in loginUser:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
}

// Function for create book endpoint
async function createBook(formData) {
  try {
    const response = await instance.post('/books', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    if ('data' in response) {
      return response.data;
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error('Error in createBook:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
}

// Function for get all books endpoint
async function getAllBooks() {
  try {
    const response = await instance.get('/books');
    if ('data' in response) {
      return response.data;
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error('Error in getAllBooks:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
}

// Function for edit book endpoint
async function editBook(id, title, author, publisher, year, pages) {
  try {
    const response = await instance.put(`/books/${id}`, { title, author, publisher, year, pages });
    if ('data' in response) {
      return response.data;
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error('Error in editBook:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
}

// Function for delete book endpoint
async function deleteBook(id) {
  try {
    const response = await instance.delete(`/books/${id}`);
    if ('data' in response) {
      return response.data;
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error('Error in deleteBook:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
}

async function getBookDetailById(id) {
  try {
    const response = await instance.get(`/books/${id}`);
    if ('data' in response) {
      return response.data;
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error('Error in getBookDetailById:', error);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
}

export { registerUser, loginUser, createBook, getAllBooks, editBook, deleteBook, getBookDetailById };
