import React from 'react'
import Header from '../../components/header'
import LeftSidebar from '../../components/left-sidebar'

const Homepage = () => {
    return (
        <div>
            <Header />
            <main className='container mx-auto'>
                <div className="flex justify-between items-start gap-10">
                    <div className="left-sidebar w-2/12">
                        <LeftSidebar />
                    </div>
                    <div className="left-sidebar w-7/12"></div>
                    <div className="left-sidebar w-3/12"></div>
                </div>
            </main>
        </div>
    )
}

export default Homepage