import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import BookCard from "../../components/BookCard";

function AllBook() {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedAuthor, setSelectedAuthor] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        fetch("https://example-data.draftbit.com/books")
        .then((response) => response.json())
        .then((data) => {
            setBooks(data);
            setLoading(false);
        });
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleAuthorChange = (event) => {
        setSelectedAuthor(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSortOrderChange = () => {
        if (sortOrder === "") {
        setSortOrder("asc");
        } else if (sortOrder === "asc") {
        setSortOrder("desc");
        } else if (sortOrder === "desc") {
        setSortOrder("");
        }
    };

    const filteredBooks = selectedCategory
        ? books.filter(
            (book) =>
            book.genres &&
            book.genres.includes(selectedCategory) &&
            book.authors &&
            book.authors.includes(selectedAuthor) &&
            (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.description.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        : books.filter(
            (book) =>
            book.authors &&
            book.authors.includes(selectedAuthor) &&
            (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.description.toLowerCase().includes(searchQuery.toLowerCase()))
        );

    if (sortOrder === "asc") {
        filteredBooks.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else if (sortOrder === "desc") {
        filteredBooks.sort((a, b) => (a.title < b.title ? 1 : -1));
    }

    const authors = books
        .flatMap((book) => book.authors)
        .filter((author, index, self) => self.indexOf(author) === index);

    return (
        <div className="">
            <div className="allbooks flex mt-20 m-5">
                <div className=" flex flex-col">
        <div className="flex justify-center mb-4 flex-col">
            <label className="mr-2">Filtre par catégories:</label>
            <select className="bg-slate-200" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="Fiction">Fiction</option>
            <option value="Nonfiction">Non fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Fantasy">Fantasy</option>
            </select>
        </div>
    
        <div className="flex justify-center mb-4 flex-col">
            <label className="mr-2">Filtre par auteur:</label>
            <select className="bg-slate-200" value={selectedAuthor} onChange={handleAuthorChange}>
            <option value="">All</option>
            {authors.map((author) => (
                <option key={author} value={author}>
                {author}
                </option>
            ))}
            </select>
        </div>
    
        <div className="flex justify-center mb-4">
            <input
            className="bg-slate-100 w-full border-solid rounded"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            />
        </div>
    
        <div className="flex justify-center mb-4">
        <button className="bg-slate-200 text-black hover:text-green-800 hover:bg-slate-300 rounded-md w-1/2 h-10" onClick={handleSortOrderChange}>trier par A-Z</button>
        </div>
        </div>
        {loading ? (
            <div className="flex mx-auto items-center justify-end h-screen">
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
            <div className="allbook">
            {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
            </div>
        )}
        </div>
        <Footer />
        </div>
    );
            }
export default AllBook;