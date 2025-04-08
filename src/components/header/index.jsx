import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='py-10'>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Link to="/" className='logo'>
                        Sidechayn.com
                    </Link>
                    <form action="" className='search-wrapper'>
                        <input type="text" className='search-field' placeholder='search...' name="" id="" />
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Header