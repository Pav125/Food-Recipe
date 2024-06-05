import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='flex justify-between p-4 text-white '>
            <div className='flex items-center justify-center'>
                <img src={logo} width={30} height={30} />
                <Link className='text-xl font-semibold font-mono ml-2' to='/'>Sunday recipes</Link>
            </div>
            <div className='flex gap-8'>
                <ul className="flex space-x-4">
                    <li>
                        <a href="https://github.com/Pav125/Food-Recipe" target='_blank' className="text-[#f1e9da] hover:text-white mr-4">
                            GitHub
                        </a>
                    </li>
                    {/* <li>
                        <a href="/about" className="text-gray-300 hover:text-white">
                            About
                        </a>
                    </li> */}
                    {/* <li>
                        <input
                        placeholder=''
                        className='bg-white rounded-[8px] text-black'
                        /> 
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Nav