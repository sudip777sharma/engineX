import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./searchResult.css"

// https://programmablesearchengine.google.com/controlpanel/create/congrats?cx=51b6d1f72c7484e46
// https://developers.google.com/custom-search/v1/overview

import { TbSearch } from "react-icons/tb";
import { CiShoppingTag } from "react-icons/ci";
import { BiNews } from "react-icons/bi";
import { MdImageSearch } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import SearchBar from './SearchBar';
import { useStateValue } from '../StateProvider';
import useGSearch from '../useGSearch';
import { ResultContext } from './ResultContext';

const SearchResult = () => {

    const [{ term }] = useStateValue();
    useGSearch(term);
    const { state, dispatchResult } = useContext(ResultContext);

    const data = state.result;
    // console.log("data: ", data);

    return (
        <div className='searchResult_container'>
            <div className='searchResult__header'>
                <div className="logoNSearch_container">
                    <h1 className='engineX_sr'><Link to="/">engineX</Link> </h1>
                    <SearchBar />
                </div>

                <div className="searchOptions">
                    <div>
                        {window.screen.width > 576 && (<TbSearch />)}
                        All
                    </div>
                    <div>
                        {window.screen.width > 576 && (<CiShoppingTag />)}
                        shopping
                    </div>
                    <div>
                        {window.screen.width > 576 && (<BiNews />)}
                        News
                    </div>
                    <div>
                        {window.screen.width > 576 && (<MdImageSearch />)}
                        Images
                    </div>
                    <div>
                        {window.screen.width > 576 && (<MdVideoLibrary />)}
                        videos
                    </div>
                    <div>
                        {window.screen.width > 576 && (<BsThreeDotsVertical />)}
                        More
                    </div>
                </div>
            </div>
            {
                term && data?.searchInformation && (
                    <div className='searchResult__body'>
                        <p className='resultCount' >About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime
                        } seconds) </p>
                        <div className="searchResults">
                            {
                                data.items && data?.items.map((item) => (
                                    <div className="searchResult">
                                        <a href={item.link} className='searchResultLink'>
                                            {item.displayLink}
                                            <img src="" alt="" />
                                        </a>
                                        <a href={item.link} className='searchResultTitle' >
                                            <h2 className='searchResultTitle_h2' >{item.title}</h2>
                                        </a>
                                        <p className='searchResultDescription' >
                                            {item.snippet}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SearchResult