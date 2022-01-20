//

console.log("It works")

function DoSearch(){

    const songList = document.getElementById("song-list");
    const searchField = document.getElementById("search-field");
    console.log(searchField);

    songList.innerHTML = "";

    let result = fetch(`https://itunes.apple.com/search?term=${searchField.value}&country=fr`).then(result=>result.json())
    .then((songResList)=>{
        songResList.results.map((song) => {
            let songEl = new MusicElement(song)
            songList.appendChild(songEl.render())
        })
    });
}

const MusicElement = function(song){
    this.song = song
    this.render= function(){
        return document.createRange().createContextualFragment(`
        <li>
           <div>
                <h1>${this.song.artistName}</h1>
                <h2>${this.song.trackName}<h2>
           </div>
        </li>`)
    }
}


