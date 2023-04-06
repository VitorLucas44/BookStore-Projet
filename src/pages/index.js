import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import Navbar from "@/components/NavBar";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [visibleBooks, setVisibleBooks] = useState([]);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch(
        "https://example-data.draftbit.com/books"
      );
      const data = await response.json();
      setBooks(data.slice(0, 17));
    }
    fetchBooks();
  }, []);

  useEffect(() => {
    setVisibleBooks(books.slice(0, 8));
  }, [books]);

  const handleLoadMore = () => {
    const nextVisibleBooks = books.slice(
      visibleBooks.length,
      visibleBooks.length + 4
    );
    setVisibleBooks([...visibleBooks, ...nextVisibleBooks]);
    if (visibleBooks.length + nextVisibleBooks.length === 17) {
      setLoadMore(false);
    }
  };

  return (
    <div>
       <Navbar/>
      <h1 className="text-center text-4xl font-bold my-8">Popular Books</h1>
      <div className="flex flex-wrap justify-center">
        {visibleBooks.map((book) => (
          <div key={book.id} className="p-4">
            <BookCard book={book} />
          </div>
        ))}
      </div>
      {loadMore && (
        <div className="flex my-8">
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        </div>
      )}
      {visibleBooks.length < books.length && !loadMore && (
        <div className="flex justify-center my-8">
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setLoadMore(true)}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}