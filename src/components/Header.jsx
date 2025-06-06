import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="shadow-md bg-slate-300  top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3 ">
        
        {/* Logo */}
        <Link to="/">
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide flex items-center ">
            <span className="text-indigo-500">Metro</span>
            <span className="text-gray-800">Keys</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <form className="bg-gray-100 p-2 px-4 rounded-full flex items-center gap-2 shadow-inner hover:shadow-sm transition-shadow">
          <input
            type="text"
            placeholder="Search properties..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 placeholder-gray-500 text-sm"
          />
          <FaSearch className="text-gray-500 hover:text-indigo-600 cursor-pointer" />
        </form>

        {/* Navigation Links */}
        <ul className="flex items-center gap-4 text-sm sm:text-base font-medium">
          <Link to="/">
            <li className="hidden sm:inline text-gray-700 hover:text-indigo-600 transition-colors">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-gray-700 hover:text-indigo-600 transition-colors">About</li>
          </Link>
          <Link to="/sign-in">
            <li className="bg-indigo-500 text-white px-4 py-1.5 rounded-full hover:bg-indigo-600 transition-colors">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

