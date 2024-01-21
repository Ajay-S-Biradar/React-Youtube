import React, { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState(null);

  return (
    <div className='grid grid-cols-12'>
      <input
        type='text'
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className='col-span-9 border-2 border-gray-300 rounded-l-full p-1 px-4'
      />
      <input
        type='submit'
        value='Search'
        onClick={(e) => {
          e.preventDefault();
          console.log(search);
        }}
        className='col-span-3 text-black cursor-pointer border-2 border-gray-300 rounded-r-full'
      />
    </div>
  );
};

export default SearchBar;
