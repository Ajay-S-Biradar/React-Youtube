import React, { useEffect, useState } from 'react';
import { YOUTUBE_AUTO_COMPLETE_API } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [suggestions,setSuggestions] = useState();
  const [active,setActive] = useState(false);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      autoComplete();
    },500);
    return()=>{
      clearTimeout(timer);
    }
  },[search]);

  const autoComplete =async ()=>{
    const data = await fetch(YOUTUBE_AUTO_COMPLETE_API+search);
    const json = await data.json();
    setSuggestions(json[1]);
  }

  const handleSuggestionClick = (a)=>{
    setSearch(a)
    navigate('/results?q='+a);
  }

  return (
    <div className='grid grid-cols-12 relative'>
      <input
        type='text'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onFocus={()=>setActive(true)}
        onBlur={()=>setTimeout(()=>{
          setActive(false)
        },100)}
        className='col-span-9 border-2 border-gray-300 rounded-l-full p-1 px-4'
      />
      <input
        type='submit'
        value='Search'
        onClick={(e) => {
          e.preventDefault();
          navigate('/results?q='+search);
        }}
        className='col-span-3 text-black cursor-pointer border-2 border-gray-300 rounded-r-full'
      />

      {suggestions&& active && <div className='absolute bg-white px-4 top-10 rounded-xl' >
          {
            suggestions.map(a => <h1 className='m-1 px-1 cursor-pointer ' onClick={()=>handleSuggestionClick(a)} >{a}</h1>)
          }
      </div>}
    </div>
  );
};

export default SearchBar;
