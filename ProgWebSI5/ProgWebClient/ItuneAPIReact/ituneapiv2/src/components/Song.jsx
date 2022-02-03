import React from 'react';

export default function Song({song,songClickHandler}) {

    return(
        <div onClick={()=>songClickHandler(song.previewUrl)}>
            <li>
                <h1>{song.artistName}</h1>
                <h2>{song.trackName}</h2>
            </li>
        </div>
    );
}
