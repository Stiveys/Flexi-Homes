import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-600 text-white py-6  px-6 rounded-l-lg'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start md :items-center'>
          <div className='mb-4 md:mb-0'>
            <h3 className='text-xl font-semibold mb-2'>
              Connect with us

              <p className='text-sm'>
                stay updated with our latest news and listings.

              </p>

            </h3>


            <div className='flex space-x-6'>
              <ul className='space-y-2'>
                <li className='hover:text-gray-200'>About</li>
                <li className='hover:text-gray-200'>Featured Homes</li>
                <li className='hover:text-gray-200'>Support Us</li>
                <li className='hover:text-gray-200'>Terms of use</li>

              </ul>

            </div>
          </div>




          <div className='flex justify-center items-center mt-4 space-x-4'>
            <a href='https://www.instagram.com/' aria-label='Instagram' className='fa-brands fa-instagram text-white text-2xl mx-2 hover:text-gray-300'></a>
            <a href='' aria-label='X' className='fa-brands fa-instagram text-white text-2xl mx-2 hover:text-gray-300'></a>
            <a href='' aria-label='Github' className='fa-brands fa-instagram text-white text-2xl mx-2 hover:text-gray-300'></a>
            <a href='' aria-label='' className='fa-brands fa-instagram text-white text-2xl mx-2 hover:text-gray-300'></a>

         </div>  

        </div>

      </div>

    </div>
  )
}

export default Footer