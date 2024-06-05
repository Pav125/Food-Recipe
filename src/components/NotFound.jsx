import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <p className="text-2xl md:text-3xl font-light mb-4">
                    Oops! Page not found.
                </p>
                <p className="mb-8">
                    The page you’re looking for doesn’t exist.
                </p>
                <Link
                    to="/"
                    className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                >
                    Go home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
