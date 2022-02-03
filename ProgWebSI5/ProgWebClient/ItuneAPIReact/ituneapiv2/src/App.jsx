import './App.css';
import SearchBar from './components/SearchBar';
import SongList from './components/SongList';
import React, {useState} from 'react';

function App() {

  // const audioPlayer = <audio
  //     controls
  //     src="">
  //         Your browser does not support the
  //         <code>audio</code> element.
  // </audio>;
  const audioPlayer = new Audio();

  const [searchResult, setSearchResult] = useState([]);

  const doSearch = (searchText) => {
    let searchData = searchText.replaceAll(' ','+')
    
    fetch(`https://itunes.apple.com/search?term=${searchData}&country=fr`)
      .then(res => res.json())
      .then((searchResult)=>{
        if(searchResult.resultCount){
          const songs = searchResult.results.filter((r) => r.kind === 'song');
          console.log(songs);
          setSearchResult(songs);
        }
      });
  };

  const playMusic = (previewUrl) =>{
    audioPlayer.src = previewUrl;
    audioPlayer.play()
  }

  console.log(audioPlayer)
  return (
    <div className="App">
      <SearchBar onSearchClick={doSearch}/>
      <SongList songList={searchResult} onSongClick={playMusic}/>
      
    </div>
  );
}

export default App;
