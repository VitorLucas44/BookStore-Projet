import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://example-data.draftbit.com/books");
      setBooks(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <div key={book.id} className="Card bg-red rounded-lg shadow-md">
          <img src={book.image_url} alt={book.title} className="rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-2">{book.authors}</p>
            <p className="text-gray-600">{book.genres}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
