import React from 'react';
import food from '../assets/food04.png';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Hero = () => {
  const explore = true
  return (
    <>
    <Nav explore={explore} />
    <header className='flex flex-col lg:flex-row items-center justify-center h-screen mx-8 lg:mt-0 sm:mt-2'>
      <div className='text-center lg:text-left lg:w-1/2 sm:order-last lg:order-first'>
        <div className='text-3xl lg:text-8xl font-medium font-anton text-[#f1e9da]'>
          FIND YOUR CRAVINGS HERE 
        </div>
        <div className='mt-2 mb-6 text-xl text-[#f1e9da]'>
          Search anything you want, find anything you like, and cook it yourself
        </div>
        <Link 
        to="/search"
        className=' px-4 py-2 bg-green-800 rounded-md text-white text-sm font-medium mt-7 shadow-2xl hover:bg-yellow-500'>
          FIND NOW
        </Link>
      </div>
      <div className='mt-7 lg:mt-0 lg:w-1/2 flex justify-center'>
        <img src={food} className=' lg:w-[500px] sm:w-[300px]' />
      </div>
    </header>
    </>
  );
};

export default Hero;
