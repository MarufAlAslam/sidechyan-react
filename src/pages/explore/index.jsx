import React from 'react'
import Header from '../../components/header'
import LeftSidebar from '../../components/left-sidebar'
import Search from '../../components/contents/search'
import { Link } from 'react-router-dom'

import genresImg from "../../assets/genres.jpg"
import playlistImg from "../../assets/playlist-1.jpg"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import i1 from "../../assets/i1.webp"
import i2 from "../../assets/i2.webp"
import i3 from "../../assets/i3.webp"
import i4 from "../../assets/i4.webp"

const Explore = () => {
    return (
        <div>
            <Header />
            <main className='container mx-auto'>
                <div className="flex justify-between xl:flex-row flex-col items-start gap-12">
                    <div className="left-sidebar w-full xl:w-2/12 rounded-[30px]">
                        <LeftSidebar />
                    </div>
                    <div className="contents-wrapper w-full xl:w-10/12">
                        <Search />

                        {/* banner */}
                        <div className="flex justify-center items-center gap-5 relative">
                            <div className="left-overlay"></div>
                            <span className='text-sm'>trending Now</span>
                            <span className='text-sm'>trending Now</span>
                            <span className='text-sm'>trending Now</span>
                            <span className='text-sm'>trending Now</span>
                            <span className='text-sm'>trending Now</span>
                            <span className='text-sm'>trending Now</span>
                            <span className='text-sm'>trending Now</span>
                            <span className='text-sm'>trending Now</span>
                            <span className='text-sm'>trending Now</span>
                            <div className="right-overlay"></div>
                        </div>


                        {/* genres */}

                        <div className="flex mt-10 xl:flex-row flex-col justify-between items-start gap-10">
                            <div className="left w-full xl:w-9/12">
                                <h2 className='text-2xl'>Genres</h2>
                                <Link to="/explore" className='text-sm text-white hover:underline'>See all</Link>

                                <div className="grid mt-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                                    <div className="item h-[100px] overflow-hidden relative rounded-[20px]">
                                        <img src={genresImg} className='w-full h-[100px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur"></div>
                                            <div class="text-block">EDM</div>
                                        </div>
                                    </div>
                                    <div className="item h-[100px] overflow-hidden relative rounded-[20px]">
                                        <img src={genresImg} className='w-full h-[100px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur"></div>
                                            <div class="text-block">EDM</div>
                                        </div>
                                    </div>
                                    <div className="item h-[100px] overflow-hidden relative rounded-[20px]">
                                        <img src={genresImg} className='w-full h-[100px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur"></div>
                                            <div class="text-block">EDM</div>
                                        </div>
                                    </div>
                                    <div className="item h-[100px] overflow-hidden relative rounded-[20px]">
                                        <img src={genresImg} className='w-full h-[100px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur"></div>
                                            <div class="text-block">EDM</div>
                                        </div>
                                    </div>
                                    <div className="item h-[100px] overflow-hidden relative rounded-[20px]">
                                        <img src={genresImg} className='w-full h-[100px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur"></div>
                                            <div class="text-block">EDM</div>
                                        </div>
                                    </div>
                                    <div className="item h-[100px] overflow-hidden relative rounded-[20px]">
                                        <img src={genresImg} className='w-full h-[100px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur"></div>
                                            <div class="text-block">EDM</div>
                                        </div>
                                    </div>
                                    <div className="item h-[100px] overflow-hidden relative rounded-[20px]">
                                        <img src={genresImg} className='w-full h-[100px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur"></div>
                                            <div class="text-block">EDM</div>
                                        </div>
                                    </div>
                                    <div className="item h-[100px] overflow-hidden relative rounded-[20px]">
                                        <img src={genresImg} className='w-full h-[100px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur"></div>
                                            <div class="text-block">EDM</div>
                                        </div>
                                    </div>
                                    <div className="item h-[100px] overflow-hidden relative rounded-[20px]">
                                        <img src={genresImg} className='w-full h-[100px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur"></div>
                                            <div class="text-block">EDM</div>
                                        </div>
                                    </div>
                                    <div className="item h-[100px] overflow-hidden relative rounded-[20px]">
                                        <img src={genresImg} className='w-full h-[100px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur"></div>
                                            <div class="text-block">EDM</div>
                                        </div>
                                    </div>
                                    <div className="item h-[100px] overflow-hidden relative rounded-[20px]">
                                        <img src={genresImg} className='w-full h-[100px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur"></div>
                                            <div class="text-block">EDM</div>
                                        </div>
                                    </div>
                                    <div className="item h-[100px] overflow-hidden relative rounded-[20px]">
                                        <img src={genresImg} className='w-full h-[100px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur"></div>
                                            <div class="text-block">EDM</div>
                                        </div>
                                    </div>
                                </div>



                                {/* Trending Playlist */}
                                <h2 className='text-2xl mt-14'>Trending Playlists</h2>
                                <Link to="/explore" className='text-sm text-white hover:underline'>See all</Link>
                                <div className="grid mt-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                                    <div className="item h-[165px] overflow-hidden relative rounded-[20px]">
                                        <img src={playlistImg} className='w-full h-[165px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur playlist"></div>
                                            <div class="text-block playlist">gym playlist 69</div>
                                        </div>
                                    </div>
                                    <div className="item h-[165px] overflow-hidden relative rounded-[20px]">
                                        <img src={playlistImg} className='w-full h-[165px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur playlist"></div>
                                            <div class="text-block playlist">gym playlist 69</div>
                                        </div>
                                    </div>
                                    <div className="item h-[165px] overflow-hidden relative rounded-[20px]">
                                        <img src={playlistImg} className='w-full h-[165px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur playlist"></div>
                                            <div class="text-block playlist">gym playlist 69</div>
                                        </div>
                                    </div>
                                    <div className="item h-[165px] overflow-hidden relative rounded-[20px]">
                                        <img src={playlistImg} className='w-full h-[165px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur playlist"></div>
                                            <div class="text-block playlist">gym playlist 69</div>
                                        </div>
                                    </div>
                                    <div className="item h-[165px] overflow-hidden relative rounded-[20px]">
                                        <img src={playlistImg} className='w-full h-[165px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur playlist"></div>
                                            <div class="text-block playlist">gym playlist 69</div>
                                        </div>
                                    </div>
                                    <div className="item h-[165px] overflow-hidden relative rounded-[20px]">
                                        <img src={playlistImg} className='w-full h-[165px] object-cover' alt="" />
                                        <div className="blur-holder">
                                            <div className="blur playlist"></div>
                                            <div class="text-block playlist">gym playlist 69</div>
                                        </div>
                                    </div>
                                </div>



                                {/* Trending Playlist */}
                                <h2 className='text-2xl mt-14'>Songs You'll LOVE</h2>
                                <Link to="/explore" className='text-sm text-white hover:underline'>See all</Link>

                                <div className="flex mt-4 upcoming-music-item justify-between items-center p-3">
                                    <img src={genresImg} className='w-[65px]' alt="" />
                                    <div className="text-center min-w-[200px]">
                                        <p className="text-lg">
                                            Blah black
                                        </p>
                                        <p className="text-gray-400 text-sm">Kidd G</p>
                                    </div>
                                    <div className="div-block-151 pr-10">
                                        <img loading="lazy" src="https://cdn.prod.website-files.com/66b1e34f1cccd77056bac6df/67a6016f02644c24ae599d2a_wave.svg" alt="" className="image-24" />
                                        <div className="music-timeline-wraper">
                                            <div className="music-player-timeline">
                                            </div>
                                            <div className="music-player-timeline is-playing"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-4 upcoming-music-item justify-between items-center p-3">
                                    <img src={genresImg} className='w-[65px]' alt="" />
                                    <div className="text-center min-w-[200px]">
                                        <p className="text-lg">
                                            Blah black
                                        </p>
                                        <p className="text-gray-400 text-sm">Kidd G</p>
                                    </div>
                                    <div className="div-block-151 pr-10">
                                        <img loading="lazy" src="https://cdn.prod.website-files.com/66b1e34f1cccd77056bac6df/67a6016f02644c24ae599d2a_wave.svg" alt="" className="image-24" />
                                        <div className="music-timeline-wraper">
                                            <div className="music-player-timeline">
                                            </div>
                                            <div className="music-player-timeline is-playing"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-4 upcoming-music-item justify-between items-center p-3">
                                    <img src={genresImg} className='w-[65px]' alt="" />
                                    <div className="text-center min-w-[200px]">
                                        <p className="text-lg">
                                            Blah black
                                        </p>
                                        <p className="text-gray-400 text-sm">Kidd G</p>
                                    </div>
                                    <div className="div-block-151 pr-10">
                                        <img loading="lazy" src="https://cdn.prod.website-files.com/66b1e34f1cccd77056bac6df/67a6016f02644c24ae599d2a_wave.svg" alt="" className="image-24" />
                                        <div className="music-timeline-wraper">
                                            <div className="music-player-timeline">
                                            </div>
                                            <div className="music-player-timeline is-playing"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-4 upcoming-music-item justify-between items-center p-3">
                                    <img src={genresImg} className='w-[65px]' alt="" />
                                    <div className="text-center min-w-[200px]">
                                        <p className="text-lg">
                                            Blah black
                                        </p>
                                        <p className="text-gray-400 text-sm">Kidd G</p>
                                    </div>
                                    <div className="div-block-151 pr-10">
                                        <img loading="lazy" src="https://cdn.prod.website-files.com/66b1e34f1cccd77056bac6df/67a6016f02644c24ae599d2a_wave.svg" alt="" className="image-24" />
                                        <div className="music-timeline-wraper">
                                            <div className="music-player-timeline">
                                            </div>
                                            <div className="music-player-timeline is-playing"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right w-full xl:w-3/12">
                                <h2 className='text-2xl'>Upcoming Artists</h2>
                                <Link to="/explore" className='text-sm text-white hover:underline'>See all</Link>

                                <div className="mt-4">
                                    <div className="flex justify-start items-center gap-3 bg-[#0a0a0a] p-2 rounded-[20px]">
                                        <img src={genresImg} className='w-[75px] rounded-[14px]' alt="" />
                                        <div className="content">
                                            <p className="text-lg text-white">
                                                Hannah Montana
                                            </p>
                                            <p className="text-xs flex justify-start items-center gap-3 flex-wrap">
                                                <span className="text-white">EDM</span>
                                                <div className="dot w-[5px] h-[5px] bg-white rounded-full"></div>
                                                <span className="text-[#79787b]">📍Sydney</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-start items-center gap-3 bg-[#0a0a0a] p-2 rounded-[20px]">
                                        <img src={genresImg} className='w-[75px] rounded-[14px]' alt="" />
                                        <div className="content">
                                            <p className="text-lg text-white">
                                                Hannah Montana
                                            </p>
                                            <p className="text-xs flex justify-start items-center gap-3 flex-wrap">
                                                <span className="text-white">EDM</span>
                                                <div className="dot w-[5px] h-[5px] bg-white rounded-full"></div>
                                                <span className="text-[#79787b]">📍Sydney</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-start items-center gap-3 bg-[#0a0a0a] p-2 rounded-[20px]">
                                        <img src={genresImg} className='w-[75px] rounded-[14px]' alt="" />
                                        <div className="content">
                                            <p className="text-lg text-white">
                                                Hannah Montana
                                            </p>
                                            <p className="text-xs flex justify-start items-center gap-3 flex-wrap">
                                                <span className="text-white">EDM</span>
                                                <div className="dot w-[5px] h-[5px] bg-white rounded-full"></div>
                                                <span className="text-[#79787b]">📍Sydney</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-start items-center gap-3 bg-[#0a0a0a] p-2 rounded-[20px]">
                                        <img src={genresImg} className='w-[75px] rounded-[14px]' alt="" />
                                        <div className="content">
                                            <p className="text-lg text-white">
                                                Hannah Montana
                                            </p>
                                            <p className="text-xs flex justify-start items-center gap-3 flex-wrap">
                                                <span className="text-white">EDM</span>
                                                <div className="dot w-[5px] h-[5px] bg-white rounded-full"></div>
                                                <span className="text-[#79787b]">📍Sydney</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-start items-center gap-3 bg-[#0a0a0a] p-2 rounded-[20px]">
                                        <img src={genresImg} className='w-[75px] rounded-[14px]' alt="" />
                                        <div className="content">
                                            <p className="text-lg text-white">
                                                Hannah Montana
                                            </p>
                                            <p className="text-xs flex justify-start items-center gap-3 flex-wrap">
                                                <span className="text-white">EDM</span>
                                                <div className="dot w-[5px] h-[5px] bg-white rounded-full"></div>
                                                <span className="text-[#79787b]">📍Sydney</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-start items-center gap-3 bg-[#0a0a0a] p-2 rounded-[20px]">
                                        <img src={genresImg} className='w-[75px] rounded-[14px]' alt="" />
                                        <div className="content">
                                            <p className="text-lg text-white">
                                                Hannah Montana
                                            </p>
                                            <p className="text-xs flex justify-start items-center gap-3 flex-wrap">
                                                <span className="text-white">EDM</span>
                                                <div className="dot w-[5px] h-[5px] bg-white rounded-full"></div>
                                                <span className="text-[#79787b]">📍Sydney</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-start items-center gap-3 bg-[#0a0a0a] p-2 rounded-[20px]">
                                        <img src={genresImg} className='w-[75px] rounded-[14px]' alt="" />
                                        <div className="content">
                                            <p className="text-lg text-white">
                                                Hannah Montana
                                            </p>
                                            <p className="text-xs flex justify-start items-center gap-3 flex-wrap">
                                                <span className="text-white">EDM</span>
                                                <div className="dot w-[5px] h-[5px] bg-white rounded-full"></div>
                                                <span className="text-[#79787b]">📍Sydney</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-start items-center gap-3 bg-[#0a0a0a] p-2 rounded-[20px]">
                                        <img src={genresImg} className='w-[75px] rounded-[14px]' alt="" />
                                        <div className="content">
                                            <p className="text-lg text-white">
                                                Hannah Montana
                                            </p>
                                            <p className="text-xs flex justify-start items-center gap-3 flex-wrap">
                                                <span className="text-white">EDM</span>
                                                <div className="dot w-[5px] h-[5px] bg-white rounded-full"></div>
                                                <span className="text-[#79787b]">📍Sydney</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-start items-center gap-3 bg-[#0a0a0a] p-2 rounded-[20px]">
                                        <img src={genresImg} className='w-[75px] rounded-[14px]' alt="" />
                                        <div className="content">
                                            <p className="text-lg text-white">
                                                Hannah Montana
                                            </p>
                                            <p className="text-xs flex justify-start items-center gap-3 flex-wrap">
                                                <span className="text-white">EDM</span>
                                                <div className="dot w-[5px] h-[5px] bg-white rounded-full"></div>
                                                <span className="text-[#79787b]">📍Sydney</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-start items-center gap-3 bg-[#0a0a0a] p-2 rounded-[20px]">
                                        <img src={genresImg} className='w-[75px] rounded-[14px]' alt="" />
                                        <div className="content">
                                            <p className="text-lg text-white">
                                                Hannah Montana
                                            </p>
                                            <p className="text-xs flex justify-start items-center gap-3 flex-wrap">
                                                <span className="text-white">EDM</span>
                                                <div className="dot w-[5px] h-[5px] bg-white rounded-full"></div>
                                                <span className="text-[#79787b]">📍Sydney</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-start items-center gap-3 bg-[#0a0a0a] p-2 rounded-[20px]">
                                        <img src={genresImg} className='w-[75px] rounded-[14px]' alt="" />
                                        <div className="content">
                                            <p className="text-lg text-white">
                                                Hannah Montana
                                            </p>
                                            <p className="text-xs flex justify-start items-center gap-3 flex-wrap">
                                                <span className="text-white">EDM</span>
                                                <div className="dot w-[5px] h-[5px] bg-white rounded-full"></div>
                                                <span className="text-[#79787b]">📍Sydney</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-start items-center gap-3 bg-[#0a0a0a] p-2 rounded-[20px]">
                                        <img src={genresImg} className='w-[75px] rounded-[14px]' alt="" />
                                        <div className="content">
                                            <p className="text-lg text-white">
                                                Hannah Montana
                                            </p>
                                            <p className="text-xs flex justify-start items-center gap-3 flex-wrap">
                                                <span className="text-white">EDM</span>
                                                <div className="dot w-[5px] h-[5px] bg-white rounded-full"></div>
                                                <span className="text-[#79787b]">📍Sydney</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-start items-center gap-3 bg-[#0a0a0a] p-2 rounded-[20px]">
                                        <img src={genresImg} className='w-[75px] rounded-[14px]' alt="" />
                                        <div className="content">
                                            <p className="text-lg text-white">
                                                Hannah Montana
                                            </p>
                                            <p className="text-xs flex justify-start items-center gap-3 flex-wrap">
                                                <span className="text-white">EDM</span>
                                                <div className="dot w-[5px] h-[5px] bg-white rounded-full"></div>
                                                <span className="text-[#79787b]">📍Sydney</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


            {/* footer */}
            <div className="footer mb-[85px] bg-[#0A0A0A] py-6 mt-10">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
                        <Link to="/" className='text-[#ffffff9c] text-sm'>
                            <span className='text-[#ffffff9c] text-sm'>Support</span>
                        </Link>
                        <Link to="/" className='text-[#ffffff9c] text-sm'>
                            <span className='text-[#ffffff9c] text-sm'>Exclusivity Program</span>
                        </Link>
                        <Link to="/" className='text-[#ffffff9c] text-sm'>
                            <span className='text-[#ffffff9c] text-sm'>Features/Changelog</span>
                        </Link>
                        <Link to="/" className='text-[#ffffff9c] text-sm'>
                            <span className='text-[#ffffff9c] text-sm'>Careers</span>
                        </Link>
                        <Link to="/" className='text-[#ffffff9c] text-sm'>
                            <span className='text-[#ffffff9c] text-sm'>Investors</span>
                        </Link>
                        <Link to="/" className='text-[#ffffff9c] text-sm'>
                            <span className='text-[#ffffff9c] text-sm'>Urgent Takedown Request</span>
                        </Link>
                    </div>
                </div>
            </div>


            {/* floating music */}
            <div className="floating-music h-[80px] fixed bottom-0 left-0 right-0">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center gap-16">
                        <div className="flex justify-start items-center gap-3">
                            <img src={genresImg} className='w-[55px]' alt="" />
                            <div className="content">
                                <h2 className=''>Teenage Dream - Kidd G</h2>
                                <p className='text-[#ffffff9c] text-sm'>Country</p>
                            </div>
                        </div>

                        <div className="flex jusitify-center items-center gap-5 w-1/2">
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

                        <div className="hidden xl:flex justify-end items-center gap-4">
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
                </div>
            </div>
        </div>
    )
}

export default Explore