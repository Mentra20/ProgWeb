import React from 'react';
import Song from './Song';

export default function SongList({songList, onSongClick}) {
  return (
  <div>
      {songList.map((song,i) => {return <Song key={song.trackId} songClickHandler={onSongClick} song={song}/>})}
  </div>);
}
