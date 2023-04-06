import { useState } from "react";
import { FaBars, FaSearch, FaPhone, FaHeart } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button className="text-gray-800 mr-4" onClick={handleMenuClick}>
            <FaBars size={24} />
          </button>
          <h1 className="text-gray-800 text-2xl font-bold">BookStore</h1>
        </div>
        <div className="hidden sm:flex items-center">
          <form>
            <div className="relative text-gray-600 focus-within:text-gray-800">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                  <FaSearch />
                </button>
              </span>
              <input
                type="search"
                className="py-2 text-sm text-gray-800 bg-gray-300 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Search Books"
                autoComplete="off"
              />
            </div>
          </form>
          <div className="flex items-center ml-6">
            <button className="text-gray-800 mx-2">
              <FaPhone size={24} />+123456789
            </button>
            <button className="text-gray-800">
              <FaHeart size={24} />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed bg-white w-full h-full top-0 left-0 z-10">
          <div className="max-w-6xl mx-auto py-4 flex items-center justify-between">
            <ul className="text-gray-800 text-lg font-semibold">
              <li className="py-4 border-b border-gray-300">Home</li>
              <li className="py-4 border-b border-gray-300">Categories</li>
              <li className="py-4 border-b border-gray-300">Best Sellers</li>
              <li className="py-4">Contact Us</li>
            </ul>
            <div className="flex items-center">
              <button className="text-gray-800 mr-4" onClick={handleMenuClick}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

