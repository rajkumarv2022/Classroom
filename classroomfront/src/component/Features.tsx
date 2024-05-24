// components/Features.js
import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="bg-gray-100 py-12 container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Quizzes</h3>
            <p>Create and manage quizzes to assess student learning.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Assignment Tracking</h3>
            <p>Track student assignments and submissions effortlessly.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Grouping</h3>
            <p>Facilitate group work and collaboration with easy-to-use grouping features.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
          <Link to="/login" className="mr-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none">
                Signup
              </button>
            </Link>
        
        </div>

    </section>
  );
};

export default Features;
