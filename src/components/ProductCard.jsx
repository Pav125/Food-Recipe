import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ details}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        console.log("Product Card Clicked");
        localStorage.setItem('key', JSON.stringify(details))
        navigate(`/detail/${details.label}`)
    }

  return (
    <div className='relative flex flex-col rounded-xl ring-[#f1e9da] bg-[#f1e9da] m-4 p-4 sm:m-2 sm:p-2 md:m-4 md:p-2 shadow-xl ring-1 ring-slate-900/50 hover:z-10 transition-transform duration-300 transform hover:scale-105'
        onClick={handleClick}
    >
      <img className='rounded-tr-xl rounded-tl-xl' src={details.image} alt={`${details.label}`} />
      <h2 className='text-lg bg-[#f1e9da] mt-2 font-bold'>{details.label}</h2>
    </div>
  )
}

export default ProductCard

{/* <h1 className='bg-[#f1e9da] mt-2'> 
        <span className='bg-[#f1e9da] font-bold'>Cuisine: </span>
        {cuisine}
      </h1>
      <div className='flex-grow bg-[#f1e9da] mt-2'></div>
      <Link
        className='mt-auto px-4 py-2 bg-green-800 rounded-md text-[#f1e9da] text-sm text-center font-medium shadow-2xl hover:bg-yellow-500'
      >
        See description
      </Link> */}