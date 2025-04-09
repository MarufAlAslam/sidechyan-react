import React from 'react'
import dragIcon from "../../assets/drag.svg"
import upNextImg from "../../assets/next.jpg"

import closeIcon from "../../assets/close.svg"
import plusIcon from "../../assets/plus.svg"
import { Link } from 'react-router-dom'

const UpNext = () => {
    const upNextItems = [
        {
            name: "Blah black qut",
            artist: "Drake",
            image: upNextImg,
            trending: true,
            publisher: "EDM music",
        },
        {
            name: "Blah black qut",
            artist: "Drake",
            image: upNextImg,
            trending: true,
            publisher: "EDM music",
        },
        {
            name: "Blah black qut",
            artist: "Drake",
            image: upNextImg,
            trending: true,
            publisher: "EDM music",
        },
    ]
    return (
        <div className='px-5'>
            Up Next

            <div className="items my-6">
                <div className="upnext-holder relative">
                    {
                        upNextItems.map((item, index) => (
                            <div key={index} className="flex justify-between items-center gap-3 rounded-[20px] mb-8">
                                <div className="flex justify-start items-center gap-3">
                                    <img src={dragIcon} alt="" className='w-[20px] invert' />
                                    <img src={item.image} alt="" className='w-[70px] h-[70px] rounded' />
                                    <div className="flex flex-col">
                                        <h2 className='text-[#e4e2e7] font-normal'>{item.name}</h2>
                                        <p className='text-[#ffffff9c] text-xs flex justify-start items-center gap-2'>
                                            {item.artist}
                                            <div className="dot w-1 h-1 bg-[#ffffff9c] rounded-full"></div>
                                            {item.trending && <span className='text-[#ffffff9c] text-xs'>️🔥 Trending</span>}
                                        </p>
                                        <p className='text-[#ffffff9c] text-sm text-center mt-2'>{item.publisher}</p>
                                    </div>
                                </div>

                                <div className="min-h-full flex flex-col justify-between items-center gap-4">
                                    <Link to={"/"} className='text-[#ffffff9c] text-sm'>
                                        <img src={closeIcon} alt="" className='w-[13px] h-[13px]' />
                                    </Link>
                                    <Link to={"/"} className='text-[#ffffff9c] text-sm'>
                                        <img src={plusIcon} alt="" className='w-[13px] h-[13px]' />
                                    </Link>
                                </div>
                            </div>
                        ))
                    }

                    <div className="show-more">
                        <Link to={"/"} className='text-white text-lg font-bold flex justify-center items-center gap-2'>
                            See More...
                        </Link>
                    </div>
                </div>
            </div>


            <div className="mt-8">
                <form action="" className='search-wrapper' style={{ width: "100%" }}>
                    <input type="text" className='search-field' placeholder='Add to Queue' name="" id="" />
                </form>
            </div>


            {/* tags */}
            <div className="flex flex-wrap justify-start items-center gap-3 mt-6">
                <div className="bg-[#0e0e0e] px-3 py-1 rounded-[40px] not-selected">
                    <span className='text-white text-[13px]'>Random✨</span>
                </div>
                <Link className="px-3 py-1 rounded-[40px] flex justify-center items-center gap-2 selected text-[13px]">
                    Synchasm
                </Link>
                <Link className="px-3 py-1 rounded-[40px] flex justify-center items-center gap-2 selected text-[13px]">
                    Onyx Wave
                </Link>
                <Link className="px-3 py-1 rounded-[40px] flex justify-center items-center gap-2 selected text-[13px]">
                    Future Bass
                </Link>
                <Link className="px-3 py-1 rounded-[40px] flex justify-center items-center gap-2 not-selected text-white text-[13px]">
                    My Plalist 1
                </Link>
                <Link className="px-3 py-1 rounded-[40px] flex justify-center items-center gap-2 not-selected text-white text-[13px]">
                    RnB
                </Link>
                <Link className="px-3 py-1 rounded-[40px] flex justify-center items-center gap-2 not-selected text-white text-[13px]">
                    House
                </Link>
                <Link className="px-3 py-1 rounded-[40px] flex justify-center items-center gap-2 not-selected text-white text-[13px]">
                    Dance
                </Link>
                <Link className="px-3 py-1 rounded-[40px] flex justify-center items-center gap-2 not-selected text-white text-[13px]">
                    Future Bass
                </Link>
                <Link className="px-3 py-1 rounded-[40px] flex justify-center items-center gap-2 not-selected text-white text-[13px]">
                    My Plalist 1
                </Link>
                <Link className="px-3 py-1 rounded-[40px] flex justify-center items-center gap-2 not-selected text-white text-[13px]">
                    RnB
                </Link>
                <Link className="px-3 py-1 rounded-[40px] flex justify-center items-center gap-2 not-selected text-white text-[13px]">
                    House
                </Link>
                <Link className="px-3 py-1 rounded-[40px] flex justify-center items-center gap-2 not-selected text-white text-[13px]">
                    Dance
                </Link>
            </div>
        </div>
    )
}

export default UpNext