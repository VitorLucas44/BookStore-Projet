import { useState, useEffect } from "react";

function BookList() {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://example-data.draftbit.com/books")
        .then((response) => response.json())
        .then((data) => {
            setBooks(data);
            setLoading(false);
        });
    }, []);

    return (
        <div>
        {loading ? (
            <div className="flex items-center justify-center h-screen">
            <svg
                className="animate-spin h-10 w-10 text-gray-500"
                viewBox="0 0 24 24"
            >
                <path
                fill="currentColor"
                d="M22.6 12c0-5.8-4.7-10.5-10.5-10.5S1.6 6.2 1.6 12c0 2.6.9 5 2.4 6.9l-1.4 1.4C.9 18.2 0 15.2 0 12c0-6.6 5.4-12 12-12s12 5.4 12 12c0 3.2-1.2 6.1-3.2 8.3l-1.4-1.4c1.5-1.9 2.6-4.3 2.6-6.9z"
                />
            </svg>
            </div>
        ) : (
            <div className="card grid grid-cols-3 gap-4">
            {books.map((book) => (
                <div key={book.id}>
                <img src={book.image_url} alt={book.title} />
                <h2 className="text-lg font-medium">{book.title}</h2>
                <p className="text-gray-500">{book.authors}</p>
                <p className="text-gray-500">{book.genres}</p>
                </div>
            ))}
            </div>
        )}
        </div>
    );
}

export default BookList;
