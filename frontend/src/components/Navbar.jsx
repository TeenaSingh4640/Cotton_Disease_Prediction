import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-green-600 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="h-10 w-10 mr-3 bg-white rounded-lg p-1 flex items-center justify-center">
                            <svg viewBox="0 0 100 100" className="h-full w-full">
                                <rect width="100" height="100" fill="#16a34a"/>
                                
                                {/* Decorative oval frame - top left */}
                                <ellipse cx="25" cy="20" rx="6" ry="10" fill="none" stroke="white" strokeWidth="1.5"/>
                                <ellipse cx="25" cy="20" rx="3" ry="6" fill="none" stroke="white" strokeWidth="1"/>
                                <circle cx="25" cy="20" r="2" fill="white"/>
                                
                                {/* Main house structure */}
                                <path d="M35 35 L50 25 L65 35 L65 55 L35 55 Z" fill="white"/>
                                
                                {/* Roof details */}
                                <path d="M32 35 L50 22 L68 35" fill="none" stroke="white" strokeWidth="1.5"/>
                                
                                {/* House details */}
                                <rect x="42" y="40" width="6" height="8" fill="#16a34a"/>
                                <rect x="52" y="38" width="4" height="4" fill="#16a34a"/>
                                <rect x="44" y="38" width="4" height="4" fill="#16a34a"/>
                                
                                {/* Small decorative elements */}
                                <circle cx="75" cy="25" r="2" fill="white" opacity="0.8"/>
                                <circle cx="80" cy="35" r="1.5" fill="white" opacity="0.6"/>
                                
                                {/* Tree/plant elements */}
                                <path d="M20 50 Q25 45 30 50 Q25 55 20 50" fill="white" opacity="0.7"/>
                                <path d="M70 50 Q75 45 80 50 Q75 55 70 50" fill="white" opacity="0.7"/>
                                
                                {/* KISAN text */}
                                <text x="50" y="75" fontFamily="Arial, sans-serif" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold">KISAN</text>
                                <text x="50" y="87" fontFamily="Arial, sans-serif" fontSize="8" fill="white" textAnchor="middle" opacity="0.9">KRANTI</text>
                            </svg>
                        </div>
                        <span className="text-xl font-bold">KISAN KRANTI</span>
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
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;