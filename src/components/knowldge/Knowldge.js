import React from 'react'
import { useState,useRef,useEffect } from 'react'
import boot from '../../assets/Bootstrap.png'
import css from '../../assets/CSS.png'
import expo from '../../assets/expo.png'
import fire from '../../assets/fire.png'
import html from '../../assets/html.png'
import js from '../../assets/JavaScript.png'
import jq from '../../assets/jq.png'
import mysql from '../../assets/MySQL.png'
import tlw from '../../assets/tailwind.png'
import lar from '../../assets/Laravel.png'
import react from '../../assets/react.png'
import next from '../../assets/nextjs.png'
import php from '../../assets/php.png'
import ajax from '../../assets/ajax.png'
import mui from '../../assets/mui.png'
import ts from '../../assets/typescript.png'
import sp from '../../assets/sp.jpeg'
import or from '../../assets/oracle.jpg'
import  nd from '../../assets/node.png'
import angular from '../../assets/Angular.png'
function Knowldge() {

  const Knowledge = [
    { src: html, rating: 6 },
    { src: css, rating: 6 },
    { src: boot, rating: 6},
    { src: js, rating: 6 },
    { src: jq, rating: 4 },
    { src: react, rating: 5 },
    { src: angular, rating: 3 },
    { src: next, rating: 4 },
    { src: sp, rating: 3 },
    { src: tlw, rating: 5 },
    { src: ts, rating: 4 },
    { src: expo, rating: 5 },
    { src: php, rating: 4 },
    { src: nd, rating: 3 },
    { src: lar, rating: 4 },
    { src: fire, rating: 4 },
    { src: or, rating: 3 },
    { src: mysql, rating: 4 },
  ];
    const aboutRef = useRef(null);
    const totalStars = 6;
    var rating=3;

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        },
        {
          threshold: 0.1,
        }
      );
  
      if (aboutRef.current) {
        observer.observe(aboutRef.current);
      }
  
      return () => {
        if (aboutRef.current) {
          observer.unobserve(aboutRef.current);
        }
      };
    }, []);
  return (
    <div id='Technologies' ref={aboutRef} className='mt-5 md:mt-20 border-b-2 border-gray-200 p-4 pb-11 md:px-20 md:pb-64'>
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
    <h1 className='text-center font-medium text-xl md:text-3xl text-blue-600 animate-fadeIn'>Knowledges</h1>
    <div className="mt-9 md:mt-10 flex justify-around flex-wrap gap-6 px-10 md:px-52">
      {
        Knowledge.map((x, index) => {
          const animationClass = index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight';
          return (
            <div
              key={index}
              className={`mt-8 md:mt-28 w-28 h-24 md:w-52 md:h-48 flex flex-col justify-around items-center bg-white shadow-lg rounded-lg p-4 transition-transform ${animationClass}`}
            >
              <div className="w-full h-full flex justify-center items-center overflow-hidden">
                <img src={x.src} className='object-contain w-20 h-10 md:w-40 md:h-32' alt={`Knowledge ${index}`} />
              </div>
              <div className="flex justify-center items-center mt-2">
    {/* Add your star rating here, using any method you prefer */}
    {[...Array(totalStars)].map((_, starIndex) => (
        <svg
          key={starIndex}
          className={`w-4 h-4 md:w-6 md:h-6 ${
            starIndex < x.rating ? 'text-yellow-500' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.285 3.957a1 1 0 00.95.69h4.157c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.285 3.957c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.176 0l-3.357 2.44c-.784.57-1.84-.197-1.54-1.118l1.285-3.957a1 1 0 00-.364-1.118L2.079 9.384c-.783-.57-.38-1.81.588-1.81h4.157a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
  </div>
            </div>
          );
        })
      }
    </div>
  </div>
  )
}

export default Knowldge