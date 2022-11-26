import React from 'react'
import "./home.css"

import { MdApps } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import SearchBar from './SearchBar';
const Home = () => {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className='home__headerLeft'>
                    <p>About</p>
                    <p>Store</p>
                </div>
                <div className='home__headerRight'>
                    <p>Gmail</p>
                    <p>Images</p>
                    <MdApps />
                    <FaUserCircle />
                </div>
            </div>
            <div className="home__body">
                <h1 className="engineX">engineX</h1>
                <SearchBar />
                <div className="searchBtn_container">
                    <button className='searchBtn'>search engineX</button>
                    <button className='searchBtn'>Xplore the search features</button>
                </div>
                <div className="madeWithLoveContainer">
                    <h1>made with</h1>
                    <h1>❤️</h1>
                    <h1>by sudeep sharma</h1>
                </div>
            </div>
        </div>
    )
}

export default Home