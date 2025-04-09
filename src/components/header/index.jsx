import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='py-5'>
            <div className="w-[95%] mx-auto bg-[#0D0D0D] p-6 rounded-[20px] flex flex-col gap-4">
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