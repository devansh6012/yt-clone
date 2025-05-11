import React, { cache, useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const disptach = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // make an api call after every key press
    // but if the difference between 2 API calls is < 200ms
    // decline the API call
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }
      else {
        getSearchSuggestions()
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json[1]);

    // update cache
    console.log("dispatch");
    disptach(cacheResults({
      [searchQuery]: json[1]
    }))
  };

  const toggleMenuHandler = () => {
    disptach(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-md">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
        />

        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg"
        />
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {(showSuggestions && suggestions.length > 0) && (
          <div className="fixed bg-white py-2 px-2 w-[34rem]">
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion} className="py-2 hover:bg-gray-100">
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9JnQ9na8gQRbuCAWGniTCqlVbcKSHW8U_Zw&s"
        />
      </div>
    </div>
  );
};

export default Head;
