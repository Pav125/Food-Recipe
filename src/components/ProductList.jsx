import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ data }) => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>

            {
                data.map((recipesList) => {
                    // console.log(recipesList);
                    const recipe = recipesList.recipe
                    return (
                        <ProductCard key={recipe.label} details={recipe} />
                    )
                })
            }
        </div>
    )
}

export default ProductList