import React from 'react'

const Search = () => {
    return (
        <div className='search'>
            <div className="text-center w-[60%] mx-auto">
                <h2 className='text-[38px]'>Search</h2>
                <form action="" className='w-full rounded-[30px] mt-5 flex items-center justify-center'>
                    <input type="text" className='w-full text-black placeholder:text-black bg-[#89AAE4] rounded-full w-full h-[35px] px-4' placeholder='Search' name="" id="" />
                </form>

                <p className='mt-2 text-sm'>Suggestion - Try SiftGPT.com for more music suggestions based on your mood</p>
            </div>
        </div>
    )
}

export default Search