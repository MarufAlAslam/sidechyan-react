import React from 'react'
import Header from '../../components/header'
import LeftSidebar from '../../components/left-sidebar'
import Contents from '../../components/contents'
import UpNext from '../../components/up-next'

const Homepage = () => {
    return (
        <div>
            <Header />
            <main className='container mx-auto'>
                <div className="flex justify-between xl:flex-row flex-col items-start gap-12">
                    <div className="left-sidebar w-full xl:w-2/12 rounded-[30px]">
                        <LeftSidebar />
                    </div>
                    <div className="contents-wrapper w-full xl: w-7/12">
                        <Contents />
                    </div>
                    <div className="up-next w-full xl:w-3/12">
                        <UpNext />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Homepage