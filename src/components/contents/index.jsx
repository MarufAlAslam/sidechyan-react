import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import dotsIcon from "../../assets/dots.png"
import artist from "../../assets/artist.jpg"

import i1 from "../../assets/i1.webp"
import i2 from "../../assets/i2.webp"
import i3 from "../../assets/i3.webp"
import i4 from "../../assets/i4.webp"

import cover from "../../assets/cover.jpg"
import Tabs from '../tabs'

const Contents = () => {
    return (
        <div>
            <div className="flex justify-between items-center gap-2">
                <h2 className='text-lg text-white'>
                    TrueFidelity® Mode?
                </h2>
                <div className="indicator flex justify-start items-center gap-2 bg-[#0e0e0e] px-2 py-1 rounded-[40px]">
                    <div className="indicator-circle w-[20px] h-[20px] bg-[#757575] rounded-full"></div>
                    <span className='text-[#ffffff9c] uppercase font-bold'>OFF</span>
                </div>
            </div>


            {/* music player */}
            <div className="music-player p-10 rounded-[30px] bg-[#0c0c0c] mt-5">
                <div className="flex jusitify-center items-center gap-5">
                    <FaChevronLeft className='text-[#ffffff9c] text-2xl' />
                    <div className="div-block-151">
                        <img loading="lazy" src="https://cdn.prod.website-files.com/66b1e34f1cccd77056bac6df/67a6016f02644c24ae599d2a_wave.svg" alt="" className="image-24" />
                        <div className="music-timeline-wraper">
                            <div className="music-player-timeline">
                            </div>
                            <div className="music-player-timeline is-playing"></div>
                        </div>
                    </div>
                    <FaChevronRight className='text-[#ffffff9c] text-2xl' />
                </div>

                <div className="text-center text-sm mt-3 text-[#555550]">
                    (Hover your mouse here and scroll to change tracks quickly)
                </div>


                <div className="flex justify-between items-center gap-5 mt-10">
                    <div className="w-2/3">
                        <div className="flex justify-between items-center gap-3">
                            <h2 className='text-[#e4e2e7] font-normal text-[25px]'>I Love Gambling</h2>
                            <Link to={"/"} className='text-[#ffffff9c] text-sm'>
                                <img src={dotsIcon} alt="" className='w-[20px]' />
                            </Link>
                        </div>

                        <div className="flex my-8 justify-start items-center gap-3">
                            <img src={artist} alt="" className='w-[48px] h-[48px] rounded-full' />
                            <div className="right">
                                <h3 className='text-white raleway text-[15px]'>JackWorby</h3>
                                <p className='text-[13px] text-[#969597]'>Uploaded 5 days ago</p>
                            </div>
                        </div>

                        <div className="flex flex-start flex-wrap gap-2 mt-10">
                            <div className="bg-[#0e0e0e] px-3 py-1 rounded-[40px]">
                                <span className='text-white text-sm'>5.5K</span>
                            </div>
                            <Link className="bg-[#0e0e0e] hover:bg-[#353535] px-3 py-1 rounded-[40px] flex justify-center items-center gap-2 border border-[#353535]">
                                <img src={i1} alt="" className='w-[19px] h-[19px]' />
                                <span className='text-[#ffffff9c] text-sm'>1K</span>
                            </Link>
                            <Link className="bg-[#0e0e0e] hover:bg-[#353535] px-3 py-1 rounded-[40px] flex justify-center items-center gap-2 border border-[#353535]">
                                <img src={i2} alt="" className='w-[19px] h-[19px]' />
                                <span className='text-[#ffffff9c] text-sm'>1K</span>
                            </Link>
                            <Link className="bg-[#0e0e0e] hover:bg-[#353535] px-3 py-1 rounded-[40px] flex justify-center items-center gap-2 border border-[#353535]">
                                <img src={i3} alt="" className='w-[19px] h-[19px]' />
                                <span className='text-[#ffffff9c] text-sm'>2K</span>
                            </Link>
                            <Link className="bg-[#0e0e0e] hover:bg-[#353535] px-3 py-1 rounded-[40px] flex justify-center items-center gap-2 border border-[#353535]">
                                <img src={i4} alt="" className='w-[19px] h-[19px]' />
                                <span className='text-[#ffffff9c] text-sm'>1K</span>
                            </Link>
                        </div>
                    </div>

                    <div className="w-1/3">
                        <img src={cover} className='w-full' alt="" />
                    </div>
                </div>
            </div>


            <div className="tabs bg-[#0c0c0c] mt-5 p-6 rounded-[30px]">
                <Tabs />
            </div>
        </div>
    )
}

export default Contents