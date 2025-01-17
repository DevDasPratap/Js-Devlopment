import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(()=>{
    if(location.pathname.includes('collection')){
        setVisible(true)
    }else{
        setVisible(false)
    }
  },[location])

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center py-4">
      <div className="relative inline-flex items-center justify-center border border-gray-400 px-4 py-2 rounded-full w-3/4 sm:w-1/2 bg-white">
        {/* Search Input */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          aria-label="Search"
          className="flex-1 outline-none bg-inherit text-sm px-2"
        />
        {/* Search Icon */}
        <button
          type="button"
          aria-label="Search Button"
          className="flex items-center justify-center"
        >
          <img src={assets.search_icon} className="w-5 h-5" alt="Search Icon" />
        </button>
      </div>
      {/* Close Icon */}
      <button
        type="button"
        onClick={() => setShowSearch(false)}
        aria-label="Close Search"
        className="mt-3"
      >
        <img
          src={assets.cross_icon}
          className="inline w-5 h-5 cursor-pointer"
          alt="Close Icon"
        />
      </button>
    </div>
  ) : null;
};

export default SearchBar;
