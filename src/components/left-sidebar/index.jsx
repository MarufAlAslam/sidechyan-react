import React from 'react'
import { Link } from 'react-router-dom'

const LeftSidebar = () => {
    return (
        <div>
            <Link to="/" className='register-button flex justify-center items-center flex-col px-1 py-2'>
                <span className='text-xl'>Register / Login <br /></span>
                <span className='text-xs'>Join 12 New Users This Week</span>
            </Link>

            <div className="line bg-[#eeedf22e]"></div>
        </div>
    )
}

export default LeftSidebar