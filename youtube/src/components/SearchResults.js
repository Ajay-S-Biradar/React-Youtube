import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { YOUTUBE_API_KEY, YOUTUBE_SUGGESTIONS_API } from '../utils/constants';
import ResultVideoCard from './ResultVideoCard';

const SearchResults = () => {
    const [searchq]= useSearchParams();
    const query = (searchq.get('q'));
    const [results,setResults] = useState(null);
    useEffect(()=>{
        movieResults();
    },[]);
    const movieResults =async ()=>{
        const data = await fetch(YOUTUBE_SUGGESTIONS_API+query+"&key="+YOUTUBE_API_KEY);
        const json = await data.json();
        setResults(json.items);
    }
    if(!results) return;
  return (
    <div className='flex flex-col items-center justify-center gap-6' >
      {
        results.map(x=><ResultVideoCard card={x} />)
      }
    </div>
  )
}

export default SearchResults