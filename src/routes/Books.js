import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import { getAllBooks } from '../redux/books/booksSlice';

export default function Books() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  const statusPercentages = [64, 8, 0];

  return (
    <div className="book-cover">
      {books.map((book, index) => (
        <Book
          key={book.itemId}
          book={book}
          percent={statusPercentages[index] ? statusPercentages[index] : 0}
        />
      ))}
      <hr className="horizontal-line" />
      <AddBook />
    </div>
  );
}
