import React from 'react'

import { TbSearch } from "react-icons/tb";
import { MdMic } from "react-icons/md";
import { HiCamera } from "react-icons/hi";
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useStateValue } from '../StateProvider.js'
import { actionTypes } from '../reducer.js';

const SearchBar = () => {

    const history = useHistory();

    const [{ term }] = useStateValue();

    const [searchInput, setSearchInput] = useState(term);

    const [data, dispatch] = useStateValue();

    const search = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        // console.log(searchInput);
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: searchInput
        })
        history.push("/search");
    }

    return (
        <>
            <div className="searchInput_container">
                <TbSearch />
                <input className='searchInput' type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} onKeyDown={(e) => e.code === "Enter" && search(e)} />
                {
                    window.screen.width > 576 && (
                        <>
                            <MdMic />
                            <HiCamera />
                        </>
                    )
                }
                <button className='searchResBtn' onClick={e => search(e)} >
                    <TbSearch />
                    search
                </button>
            </div>
        </>
    )
}

export default SearchBar