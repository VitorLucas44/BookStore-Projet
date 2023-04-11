import React from "react";
import { useRouter } from "next/router";
import { AiOutlineFullscreen } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addTask } from "@/redux/slice/bookslice";

export const BookCard = ({ book }) => {
  const router = useRouter()
    const DetailBook = (book) => {
        router.push(`/book/${book.id}`)
    }

    const dispatch = useDispatch()
    const AddFavs = (book) => {
        dispatch(addTask(book))
    };
  return (
    <div className="card bg-white rounded-lg overflow-hidden shadow-lg m-1">
      <img
        className="w-full h-56 object-cover object-center"
        src={book.image_url}
        alt={book.title}
      />
      <div className="p-4 h-50 blabla">
        <h2 className="font-bold text-lg mb-2">{book.title}</h2>
        <p className="text-gray-700 mb-2">{book.authors}</p>
        <p className="text-gray-700">{book.genres}</p>
        <button className='detail bg-green-400 text-center  m-1' onClick={() => DetailBook(book)} style={{width: 30, height: 30, borderRadius: '50%'}}><AiOutlineFullscreen className='mx-auto'/></button>
        <button className='favorisbtn bg-green-400 rounded-lg m-1' onClick={() => AddFavs(book)} style={{width: 120, height: 45}}>add to favoris</button>
      </div>
    </div>
  );
};

export default BookCard;
