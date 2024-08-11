import { useState } from 'react'


import { SocialIcon } from 'react-social-icons'
import so from '../../assets/so.png'
function Hero() {
  

  return (
<div className='mt-2 md:mt-4 border-b-2 border-gray-200 py-8 md:px-64 md:py-64 lg:px-64 lg:py-36 flex flex-col-reverse md:flex-row justify-around items-center'>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideInLeft {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
          }

          @keyframes slideInRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out;
          }

          .animate-slideInLeft {
            animation: slideInLeft 1s ease-in-out;
          }

          .animate-slideInRight {
            animation: slideInRight 1s ease-in-out;
          }
        `}
      </style>
      <div className='flex-1 md:w-1/2 animate-fadeIn'>
        <h1 className='text-4xl text-center md:text-7xl md:text-left text-blue-950 animate-slideInLeft'>
          Hi, I'm Soufiane
        </h1>
        <h2 className='mt-3 text-3xl text-center md:text-left md:text-6xl text-blue-500 animate-slideInLeft'>
          Web and Mobile Developer
        </h2>
        <p className='text-sm mt-3 mb-0 text-center md:text-left md:text-lg md:mb-2 w-full md:w-3/4 font-light animate-fadeIn'>
          Experienced Full Stack Developer passionate about bringing ideas to life through code. Skilled
          in front-end and back-end technologies.
        </p>
        <div className='mt-5 md:mt-6 text-center md:text-left animate-fadeIn'>
          <a href='#' className='bg-violet-900 hover:bg-purple-950 cursor-pointer text-white text-sm md:text-2xl font-normal py-2 px-7 rounded-lg'>
            Hire me
          </a>
        </div>
        <div className='mt-4 md:mt-6 text-center md:text-left animate-fadeIn'>
          <SocialIcon url="https://web.facebook.com/soufianski2001" />
          <SocialIcon className='ml-3' url="https://github.com/soufiane2001" />
          <SocialIcon className='ml-3' url="https://www.youtube.com/channel/UC8_8AXAR2sUen-q1rjVKiAQ" />
        </div>
      </div>
      <div className='w-32 md:w-72 flex justify-around animate-slideInRight'>
        <img src={so} alt='Profile' className='w-full' />
      </div>
    </div>
  
  
  )
}

export default Hero
