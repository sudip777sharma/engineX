import react, { useContext, useEffect, useState } from 'react'
import API_KEY from './Keys'
import { ResultContext } from './pages/ResultContext';

const CONTEXT_KEY = "51b6d1f72c7484e46"

const useGSearch = (term) => {

    const { data, dispatchResult } = useContext(ResultContext);

    useEffect(() => {
        const fetchData = async() => {
            const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`;
            fetch(url).then((res) => res.json()).then((result) => {
                dispatchResult({ type: "SET_SEARCH_RESULT", payload: result });
                // console.log("dispatchResult ", result);
            })
        }
        fetchData();
    }, [term]);
}


export default useGSearch;