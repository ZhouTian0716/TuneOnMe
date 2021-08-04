import { useState, useEffect } from "react"
import SearchBar from '../04-SearchBar/SearchBar.jsx';
import SearchResults from '../05-DisplayContainer/SearchResults.jsx';
import CustomPlayer from '../06-Player/CustomPlayer.jsx';
import "./MainContainer.scss"


export default function MainContainer({accessToken, search, setSearch, searchResults, setSearchResults}) {
  const [playingTrack, setPlayingTrack] = useState()
  // const [lyrics, setLyrics] = useState("")

  function chooseTrack(track) {
    setPlayingTrack(track)
  }

  return (
    <div className="mainContainer">
      <SearchBar search={search} setSearch={setSearch}/>

      

      <SearchResults searchResults={searchResults} setSearchResults={setSearchResults} chooseTrack={chooseTrack}/>


      <CustomPlayer accessToken={accessToken} trackUri={playingTrack?.uri} />
      
    </div>
  );
}
