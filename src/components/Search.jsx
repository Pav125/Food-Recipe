import React, { useState, useContext } from 'react';
import Nav from './Nav';
import axios from 'axios';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';

const Search = () => {
    const YOUR_APP_ID = import.meta.env.VITE_YOUR_APP_ID;
    const YOUR_APP_KEY = import.meta.env.VITE_YOUR_APP_KEY;

    // console.log(YOUR_APP_ID);
    // console.log(YOUR_APP_KEY);

    const api = axios.create({
        baseURL: `https://api.edamam.com/search`
    });
    const [search, setSearch] = useState('');
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        // console.log(search);

        if (search.length !== 0 ){
            try {
                const response = await api.get(``, {
                    params: {
                        q: search,
                        app_id: YOUR_APP_ID,
                        app_key: YOUR_APP_KEY,
                        from: 0,
                        to: 12,
                        calories: '591-722'
                    }
                });
                setData(response.data.hits)
                setLoading(false)
                setShow(true)
    
                // console.log(data)
                // response.data.hits[0].recipe.ingredientLines[0]
            } catch (error) {
                console.error(error);
            }
        }else{
            alert('Please enter a valid search term')
            setLoading(false)
        }
    }

    return (
        <>
            <Nav />
            <br />
            <div className='flex flex-col justify-center items-center m-4'>
                <h1 className='text-white text-xl '>
                    Search the recipe you want to treat yourself
                </h1>
                <br />
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input 
                        className='bg-[#f1e9da] p-1.5 rounded-tl-lg rounded-bl-lg'
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <input 
                        className='px-4 py-1.5 bg-black text-[#f1e9da] hover:bg-green-800 hover:text-white active:bg-yellow-500 rounded-tr-lg rounded-br-lg'
                        type="submit"
                        value={
                            loading ? 'searching..' : 'search'
                        }
                    />
                </form>
                
            </div>
            <div className='mt-16'>
                {
                    search.length === 0 && (
                        <>  
                            <h1 className='text-black text-lg text-center font-bold '>Confused what to search ?</h1>
                            <h1 className='text-white text-lg text-center font-thin'>- - - Most searched - - -</h1>
                            <div className='text-white text-lg text-center mt-2'>
                            <Link  onClick={()=>{
                                setSearch('Biryani')
                                // handleSubmit(e)
                            }
                                } >🔥 Biryani</Link>
                            </div>
                            <div className='text-white text-lg text-center mt-2'>
                            <Link  onClick={()=>{
                                setSearch('Pizza')
                                // handleSubmit(e)
                            }
                                } >🍕 Pizza</Link>
                            </div>
                            <div className='text-white text-lg text-center mt-2'>
                            <Link  onClick={()=>{
                                setSearch('Chicken')
                                // handleSubmit(e)
                            }
                                } >🍗 Chicken</Link>
                            </div>
                            <div className='text-white text-lg text-center mt-2'>
                            <Link  onClick={()=>{
                                setSearch('Pasta')
                                // handleSubmit(e)
                            }
                                } >🍝 Pasta</Link>
                            </div>
                        </>
                    )
                }
            </div>
            <div className='mt-4'>
                    { 
                        show && !loading  && (
                            <h1 className='text-[#f1e9da] text-2xl mt-8 mb-4 ml-6 '>Top dishes named '{search}' : </h1>
                        )
                    }
                    <ProductList data={data}/>
            </div>
        </>
    );
}

export default Search;
