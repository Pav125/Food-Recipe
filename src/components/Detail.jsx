import React from 'react'
import Nav from './Nav'

const Detail = () => {
    const details = JSON.parse(localStorage.getItem('key'))
    console.log(details)
    return (
        <div className='bg-[#f1e9da] min-h-screen'>
            <Nav />
            <div className='flex flex-col md:flex-row m-4 md:m-8 gap-6 bg-[#f1e9da]'>
                <img src={details.image} alt={details.label} className='w-full md:w-1/3 object-cover' />
                <div className='flex flex-col gap-4 md:gap-6 bg-[#f1e9da]'>
                    <h1 className='text-4xl md:text-6xl font-bold bg-[#f1e9da]'>{details.label}</h1>
                    <p className='text-lg md:text-xl bg-[#f1e9da]'>
                        Cuisine: {details.cuisineType}
                    </p>
                    <p className='text-lg md:text-xl bg-[#f1e9da]'>
                        Calories: {details.calories}
                    </p>
                    <p className='text-lg md:text-xl bg-[#f1e9da]'>
                        Meal type: {details.mealType}
                    </p>
                </div>
            </div>

            <div className='m-4 md:m-16 bg-[#f1e9da]'>
                <h1 className='text-2xl md:text-3xl mb-2 bg-[#f1e9da] font-semibold '>Ingredients</h1>
                {details.ingredientLines.map((i, index) => (
                    <p className='text-base md:text-lg bg-[#f1e9da]' key={index}>{i}</p>
                ))}
            </div>

            <div className='m-4 md:m-6 bg-[#f1e9da]'>
                <h1 className='text-xl md:text-2xl bg-[#f1e9da]'>For detailed steps you can refer to this website</h1>
                <a className='text-blue-500 bg-[#f1e9da]' href={details.url} target="_blank" rel="noreferrer">Click Here</a>
            </div>

            <div className='p-4 text-center bg-[#f1e9da]'>
                ---
            </div>
        </div>
    )
}

export default Detail
