// components/Introduction.js
import React from 'react';

const Introduction = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to Our Classroom App</h2>
        <p className="text-lg mb-8">Empowering educators and students with interactive learning experiences.</p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded">Sign Up</button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Login</button>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
