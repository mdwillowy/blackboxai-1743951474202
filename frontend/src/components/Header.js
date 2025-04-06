import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Auction Platform</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-300">Home</Link>
            </li>
            <li>
              <Link to="/seller" className="hover:text-blue-300">Seller Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;