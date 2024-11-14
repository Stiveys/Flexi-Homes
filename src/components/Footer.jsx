import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full bg-gray-600 text-white py-6 px-8 rounded-s-lg'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start'>
          
          {/* About Section - Left */}
          <div className='flex-1 mb-4 md:mb-0'>
            <h3 className='text-xl font-semibold mb-5'>About</h3>
            <ul className='space-y-2'>
              <li className='hover:text-gray-200'>About</li>
              <li className='hover:text-gray-200'>Featured Homes</li>
              <li className='hover:text-gray-200'>Support Us</li>
              <li className='hover:text-gray-200'>Terms of Use</li>
            </ul>
          </div>

          {/* Connect With Us Section - Center */}
          <div className='flex-1 mb-4 md:mb-0 mx-6'>
            <h3 className='text-xl font-semibold mb-5'>Connect with Us</h3>
            <p className='text-sm mb-5'>Stay updated with our latest news.</p>
            <div className='flex space-x-4'>
              <a href='https://www.instagram.com/' aria-label='Instagram' className='fa-brands fa-instagram text-white text-2xl mx-2 hover:text-gray-300'></a>
              <a href='https://x.com/' aria-label='X' className='fa-brands fa-x-twitter text-white text-2xl mx-2 hover:text-gray-300'></a>
              <a href='https://github.com/' aria-label='GitHub' className='fa-brands fa-github text-white text-2xl mx-2 hover:text-gray-300'></a>
              <a href='https://www.facebook.com/' aria-label='Facebook' className='fa-brands fa-facebook text-white text-2xl mx-2 hover:text-gray-300'></a>
            </div>
          </div>

          {/* Subscribe to Updates Section - Right */}
          <div className='flex-1 mb-4 md:mb-0 text-left'>
            <h3 className='text-xl font-semibold mb-5'>Subscribe to Updates</h3>
            <p className='text-sm mb-5'>Get the latest news and listings.</p>
            <div className='flex'>
              <input 
                type='email' 
                placeholder='Enter your email' 
                className='px-4 py-2 rounded-l-lg focus:outline-none text-gray-700' 
              />
              <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg'>
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
