// components/Features.js
import React from 'react';

const Features = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
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
    </section>
  );
};

export default Features;
