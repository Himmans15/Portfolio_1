import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-200 p-10">
      <h2 className="text-4xl font-semibold text-center mb-8">Contact</h2>
      <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg mb-2">Name</label>
          <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg mb-2">Email</label>
          <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg mb-2">Message</label>
          <textarea id="message" className="w-full p-3 border border-gray-300 rounded-lg" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">Send</button>
      </form>
    </section>
  );
};

export default Contact;
