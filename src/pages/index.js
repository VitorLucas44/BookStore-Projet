import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";



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
        <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div>
          <h2>Let's make the best investement</h2>
          <h1>There is no friends</h1>
          <h1>Loyal As Book</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ad, minima sunt at explicabo odit!</span>
          <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <button>Shop Now</button>
          </div>
          <img src="https://cdn.discordapp.com/attachments/286906532476747786/1093872826596991086/citpark.PNG" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <h2>Let's make the best investement</h2>
          <h1>There is no friends</h1>
          <h1>Loyal As Book</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ad, minima sunt at explicabo odit!</span>
          <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <button>Shop Now</button>
          </div>
          <img src="https://cdn.discordapp.com/attachments/286906532476747786/1093882523517456404/strategy.PNG" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <h2>Let's make the best investement</h2>
          <h1>There is no friends</h1>
          <h1>Loyal As Book</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ad, minima sunt at explicabo odit!</span>
          <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <button>Shop Now</button>
          </div>
          <img src="https://cdn.discordapp.com/attachments/286906532476747786/1093882491003219998/book.PNG" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <h2>Let's make the best investement</h2>
          <h1>There is no friends</h1>
          <h1>Loyal As Book</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ad, minima sunt at explicabo odit!</span>
          <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <button>Shop Now</button>
          </div>
          <img src="https://cdn.discordapp.com/attachments/286906532476747786/1093882597588865085/keep.PNG" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
    <div className="section2">
        <div className="livre1 shadow-lg">
          <img src="https://cdn.discordapp.com/attachments/286906532476747786/1093909288440844449/livre1.PNG" alt="" />
          <div>
            <h1>SALE UP TOP 15%</h1>
            <h2>Innvation in education</h2>
            <h2>(Hardcover)</h2>
            <p>starting at<span> $63.09</span></p>
          </div>
        </div>
        <div className="livre1 shadow-lg">
          <img src="https://cdn.discordapp.com/attachments/286906532476747786/1095253937533239366/mockup.PNG" alt="" />
          <div>
            <h1>SALE UP TOP 15%</h1>
            <h2>Innvation in education</h2>
            <h2>(Hardcover)</h2>
            <p>starting at<span> $63.09</span></p>
          </div>
        </div>
    </div>
      <h3 className="text-center text-green-700 text-lg tracking-[.35em]">Book Gallery</h3>
      <h1 className="text-center text-4xl font-bold mb-8">Popular Books</h1>
      <div className='flex justify-center'>
                    <div className='w-[200px] relative h-[2px] mb-[50px] bg-green-400/50'><div className='h-[15px] absolute -top-2 left-[50%] w-[15px] bg-green-400/40 rotate-45'></div><div className='h-[15px] absolute -top-2 left-[45%] w-[15px] bg-green-400/40 rotate-45'></div></div>
                </div>
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

      <div className="lastsection">
        
      </div>
    </div>
  );
}