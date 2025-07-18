import React from 'react';
// Remove the Leaf icon import
// import { Leaf } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-green-600 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        {/* Replace icon with your logo image */}
                        <img
                            src="C:\Users\Lenovo\Desktop\cnnc\frontend\public\image.png"
                            alt="image"
                            className="h-8 w-8 mr-2"
                        />
                        <span className="text-xl font-bold">Kisan Kranti</span>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                            Home
                        </a>
                        <a href="#" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                            About
                        </a>
                        <a href="#" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                            Contact
                        </a>
                        <a href="/analysis" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                            AI Analysis
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
