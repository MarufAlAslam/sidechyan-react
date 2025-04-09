import React, { useState } from 'react'
import albumCover from "../../assets/album-cover.jpg"
import userAvatar from "../../assets/user-avatar.jpg"
import AnimatedButton from '../animated-button'
import dotsIcon from "../../assets/dots.png"

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState(3)

    const songList = [
        {
            id: 1,
            points: "new",
            title: "Blah Black",
            artist: "Drake",
            user: "User3442",
            duration: "4:22"
        },
        {
            id: 2,
            points: "22",
            title: "Blah Black",
            artist: "Drake",
            user: "User3442",
            duration: "4:22"
        },
        {
            id: 2,
            points: "22",
            title: "Blah Black",
            artist: "Drake",
            user: "User3442",
            duration: "4:22"
        },
        {
            id: 2,
            points: "22",
            title: "Blah Black",
            artist: "Drake",
            user: "User3442",
            duration: "4:22"
        },
        {
            id: 2,
            points: "22",
            title: "Blah Black",
            artist: "Drake",
            user: "User3442",
            duration: "4:22"
        },
        {
            id: 2,
            points: "22",
            title: "Blah Black",
            artist: "Drake",
            user: "User3442",
            duration: "4:22"
        },
        {
            id: 2,
            points: "22",
            title: "Blah Black",
            artist: "Drake",
            user: "User3442",
            duration: "4:22"
        },
        {
            id: 2,
            points: "22",
            title: "Blah Black",
            artist: "Drake",
            user: "User3442",
            duration: "4:22"
        },
    ]


    // comments
    const comments = [
        {
            id: 1,
            userAvatar: userAvatar,
            userName: "User3442",
            comment: "I think self-publishing is probably a lot easier now because of social media and other ways to marke",
            date: "5h ago",
            hearts: 25,
            thumbs: 5,
            replies: [
                {
                    id: 1,
                    userAvatar: userAvatar,
                    userName: "User3442",
                    comment: "I think self-publishing is probably a lot easier now because of social media and other ways to marke",
                    date: "5h ago",
                    hearts: 25,
                    thumbs: 5,
                },
            ]
        },
        {
            id: 1,
            userAvatar: userAvatar,
            userName: "User3442",
            comment: "I think self-publishing is probably a lot easier now because of social media and other ways to marke",
            date: "5h ago",
            hearts: 25,
            thumbs: 5,
            replies: [
                {
                    id: 1,
                    userAvatar: userAvatar,
                    userName: "User3442",
                    comment: "I think self-publishing is probably a lot easier now because of social media and other ways to marke",
                    date: "5h ago",
                    hearts: 25,
                    thumbs: 5,
                }
            ]
        },
        {
            id: 1,
            userAvatar: userAvatar,
            userName: "User3442",
            comment: "I think self-publishing is probably a lot easier now because of social media and other ways to marke",
            date: "5h ago",
            hearts: 25,
            thumbs: 5,
            replies: [
                {
                    id: 1,
                    userAvatar: userAvatar,
                    userName: "User3442",
                    comment: "I think self-publishing is probably a lot easier now because of social media and other ways to marke",
                    date: "5h ago",
                    hearts: 25,
                    thumbs: 5,
                }
            ]
        },
    ]
    return (
        <div>
            <div className="tabs-wrapper bg-[#141414] p-3 rounded-[30px]">
                <div className="flex justify-between items-center gap-3">
                    <button onClick={() => setCurrentTab(1)} className={`tab-btn w-full cursor-pointer text-center py-3 rounded-full font-500 ${currentTab === 1 ? 'bg-black' : ''}`}>
                        <span className='text-[#ffffff] text-sm'>More Like This</span>
                    </button>
                    <button onClick={() => setCurrentTab(2)} className={`tab-btn w-full cursor-pointer text-center py-3 rounded-full font-500 ${currentTab === 2 ? 'bg-black' : ''}`}>
                        <span className='text-[#ffffff] text-sm'>Remixes</span>
                    </button>
                    <button onClick={() => setCurrentTab(3)} className={`tab-btn w-full cursor-pointer text-center py-3 rounded-full font-500 ${currentTab === 3 ? 'bg-black' : ''}`}>
                        <span className='text-[#ffffff] text-sm'>Comments</span>
                    </button>
                </div>
            </div>

            {/* tab panes */}
            <div className="tab-panes mt-5 p-6">
                {
                    currentTab === 1 && (
                        <div className="tab-pane">
                            <h2 className='text-[#ffffff] text-sm'>Genres</h2>

                            <div className="mt-14">
                                <h2 className='text-[#ffffff] text-sm'>Songs</h2>
                                <form action="" className='search-wrapper mt-5 w-full' style={{ width: "80%", marginTop: "15px" }}>
                                    <input type="text" className='search-field text-sm' name="" placeholder='Suggest Song' id="" />
                                </form>

                                <table className='table mt-10 w-full'>
                                    <tbody>
                                        {
                                            songList.map((item, index) => (
                                                <tr key={index} className='table-row'>
                                                    <td className='text-center pr-4 py-4'>
                                                        <span>💎</span> <br />
                                                        <span className='text-[#ffffff] text-sm'>{item.points}</span>
                                                    </td>
                                                    <td className='text-left py-4'>
                                                        <div className="flex justify-start items-center gap-3">
                                                            <img src={albumCover} className='w-[65px] h-[65px] rounded-[20px]' alt="" />
                                                            <div className="text">
                                                                <h2 className='text-[#ffffff] text-sm text-[17px]'>{item.title}</h2>
                                                                <p className='text-[#ffffff9c] text-[15px]]'>{item.artist}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='text-left py-4'>
                                                        <div className="flex justify-start items-center gap-3">
                                                            <img src={userAvatar} className='w-[35px] h-[35px] rounded-full' alt="" />
                                                            <div className="text">
                                                                <h2 className='text-[#a8a8a8] text-sm text-[15px]'>{item.user}</h2>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='text-left py-4'>
                                                        <p className='text-[#a8a8a8] text-[15px]'>{item.duration}</p>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                }
                {
                    currentTab === 2 && (
                        <div className="tab-pane">
                            <table className='table w-full'>
                                <tbody>
                                    {
                                        songList.map((item, index) => (
                                            <tr key={index} className='table-row'>
                                                <td className='text-center pr-4 py-4'>
                                                    <span>💎</span> <br />
                                                    <span className='text-[#ffffff] text-sm'>{item.points}</span>
                                                </td>
                                                <td className='text-left py-4'>
                                                    <div className="flex justify-start items-center gap-3">
                                                        <img src={albumCover} className='w-[65px] h-[65px] rounded-[20px]' alt="" />
                                                        <div className="text">
                                                            <h2 className='text-[#ffffff] text-sm text-[17px]'>{item.title}</h2>
                                                            <p className='text-[#ffffff9c] text-[15px]]'>{item.artist}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-left py-4'>
                                                    <div className="flex justify-start items-center gap-3">
                                                        <img src={userAvatar} className='w-[35px] h-[35px] rounded-full' alt="" />
                                                        <div className="text">
                                                            <h2 className='text-[#a8a8a8] text-sm text-[15px]'>{item.user}</h2>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-left py-4'>
                                                    <p className='text-[#a8a8a8] text-[15px]'>{item.duration}</p>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>

                            <div className="mt-6 w-[230px] mx-auto">
                                <AnimatedButton text='Upload Your Remix' />
                            </div>
                        </div>
                    )
                }
                {
                    currentTab === 3 && (
                        <div className="tab-pane">
                            <form action="" className='search-wrapper w-full' style={{ width: "100%", marginTop: "15px" }}>
                                <input type="text" className='search-field text-sm' name="" placeholder='Write a comment' id="" />
                            </form>


                            <div className="comments mt-6">
                                {
                                    comments.map((item, index) => (
                                        <div key={index} className="flex justify-between items-start gap-4 my-8">
                                            <div className="flex justify-start items-start gap-3">
                                                <img src={item.userAvatar} className='w-[50px] h-[50px] rounded-full' alt="" />
                                                <div className="content">
                                                    <div className="flex justify-start items-center gap-3">
                                                        <h3 className='text-[22px] text-white'>{item.userName}</h3>
                                                        <div className="dot w-1.5 h-1.5 bg-[#686868] rounded-full"></div>
                                                        <h4 className='text-lg text-[#686868]'>{item.date}</h4>
                                                    </div>

                                                    <p className='text-[#b3b3b3] mb-5'>
                                                        {item.comment}
                                                    </p>

                                                    <div className="flex justify-start items-center gap-3">
                                                        <p className='text-sm bg-[#131313] px-3 py-2 rounded-[20px]'>❤️ {item.hearts}</p>
                                                        <p className='text-sm bg-[#131313] px-3 py-2 rounded-[20px]'>👍 {item.thumbs}</p>
                                                        <button className='text-sm bg-[#131313] px-3 py-2 rounded-[20px]'>Reply</button>
                                                    </div>

                                                    <div className="replies mt-6 ml-8 bg-[#131313] p-3 rounded-[20px]">
                                                        {
                                                            item?.replies?.map((reply, index) => (
                                                                <div key={index} className="flex m-4 justify-start items-start gap-3">
                                                                    <img src={reply.userAvatar} className='w-[50px] h-[50px] rounded-full' alt="" />
                                                                    <div className="content">
                                                                        <div className="flex justify-start items-center gap-3">
                                                                            <h3 className='text-[22px] text-white'>{reply.userName}</h3>
                                                                            <div className="dot w-1.5 h-1.5 bg-[#686868] rounded-full"></div>
                                                                            <h4 className='text-lg text-[#686868]'>{reply.date}</h4>
                                                                        </div>

                                                                        <p className='text-[#b3b3b3] mb-5'>
                                                                            {reply.comment}
                                                                        </p>

                                                                        <div className="flex justify-start items-center gap-3">
                                                                            <p className='text-sm bg-[#131313] px-3 py-2 rounded-[20px]'>❤️ {reply.hearts}</p>
                                                                            <p className='text-sm bg-[#131313] px-3 py-2 rounded-[20px]'>👍 {reply.thumbs}</p>
                                                                            <button className='text-sm bg-[#131313] px-3 py-2 rounded-[20px]'>Reply</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <button className=''>
                                                <img src={dotsIcon} alt="" className='w-[28px]' />
                                            </button>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Tabs