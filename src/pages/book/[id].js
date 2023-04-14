import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BookCard from '../../../components/BookCard';

const BookDetailsPage = () => {
  const [book, setBook] = useState({});
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    fetch(`https://example-data.draftbit.com/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data));
  }, [router.query]);

  return (
    <div className='flex justify-center mt-20 pagedescription'>
    <div className='shadow flex justify-center flex-col align-center items-center shadow-xl w-4/5'>
      <p className='flex justify-center mb-10 text-green-700 font-bold text-xl mt-2 '>{book.rating}/5</p>
      <div className='flex justify-center'>
    <div className='w-[200px] relative h-[2px] mb-[20px] bg-green-400/50'><div className='h-[15px] absolute -top-2 left-[50%] w-[15px] bg-green-400/40 rotate-45'></div><div className='h-[15px] absolute -top-2 left-[45%] w-[15px] bg-green-400/40 rotate-45'></div></div>
</div>
<div className='flex justify-center mb-5 description'>
      <BookCard book={book} className='flex justify-center align-center shadow-xl	' />
      <div className=' desmots w-3/6 flex flex-col justify-center align-center items-center ml-20'>
      <p className='text-green-700 font-bold text-xl pb-20'>{book.edition}</p>
      <h1 className='font-bold text-xl mb-5'>Description:</h1>
      <p className='pb-20'>{book.description}</p>
      <p className='text-green-700 font-bold'>{book.num_pages} pages</p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default BookDetailsPage;