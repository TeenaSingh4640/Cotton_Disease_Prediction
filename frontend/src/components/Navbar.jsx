import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-green-600 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        {/* Replace icon with your logo image */}
                        <img
                            src="/image.png"
                            alt="image"
                            className="h-8 w-8 mr-2"
                        />
                        <span className="text-xl font-bold">Kisan Kranti</span>
                    </div>
                    <div className="flex space-x-4">
                        <Link to="/" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                            Home
                        </Link>
                        <Link to="/about" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                            About
                        </Link>
                        <Link to="/contact" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                            Contact
                        </Link>
                        <Link to="/analysis" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                            AI Analysis
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
