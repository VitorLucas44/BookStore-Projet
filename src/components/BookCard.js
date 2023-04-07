import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="card bg-white rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-full h-56 object-cover object-center"
        src={book.image_url}
        alt={book.title}
      />
      <div className="p-4 h-50">
        <h2 className="font-bold text-lg mb-2">{book.title}</h2>
        <p className="text-gray-700 mb-2">{book.authors}</p>
        <p className="text-gray-700">{book.genres}</p>
      </div>
    </div>
  );
};

export default BookCard;
