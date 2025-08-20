import React from 'react'
import { useState } from 'react';
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = ((e) => {
    e.preventDefault();
  });
  return (
    <div className='flex flex-col items-center justify-content-center p-6 min-h-screen bg-gray-50'>
      <div className='bg-white shadow-lg rounded-2xl p-8  w-full max-w-lg'>
        <h1 className='text-2xl font-bold text-center mb-6'>
          Contact Zesty Support
        </h1>
        <div className='space-y-4'>
          <p className='text-gray-700 text-center'>
            Need help with your orders?
            Get in tough with us through the following ways:
          </p>
          <div className='space-y-3 text-gray-800'>
            <p>
              <b>Phone:</b>+91 9889780011
            </p>
            <p>
              <b>Email:</b> zesty@112gmail.com
            </p>
          </div>
        </div>
      </div>
      <form className='mt-6 space-y-4'>
        <input type="text"
          placeholder="Enter Your Name"
          className='w-full border p-3 riunded-xl focus:ring-2
          focus:ring-orannge-500 outline-none'
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <input type="email"
          placeholder="Enter your mail"
          className='w-full border p-3 riunded-xl focus:ring-2
          focus:ring-orange-500 outline-none'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <textarea placeholder="Enter Your Message"
          className="w-full border p-3 rounded-xl focus-ring-2
         focus:ring-orange-500 outline-none" />
        <button type="submit"
          className='w-full bg-orange-500 text-white py-3 rounded-xl
        hover:bg-orange-600 transition'
          onClick={handleSubmit}
        >
          Send As Message
        </button>
      </form>

    </div>
  )
}

export default Contact;