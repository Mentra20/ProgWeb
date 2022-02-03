import React, { useState } from 'react';

export default function SearchBar({onSearchClick}) {
    
    const [searchText,setSearchText] = useState("");

    const onSearchTextChange = (text) =>{
        setSearchText(text);
    }

    return(
    <div>
        <input type="text" id="search-field" onChange={(event)=>onSearchTextChange(event.target.value)}></input>
        <button type="button" onClick={()=>onSearchClick(searchText)}>Do search</button>
    </div>)
}
