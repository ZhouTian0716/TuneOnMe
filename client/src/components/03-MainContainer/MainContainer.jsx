
import SearchBar from '../04-SearchBar/SearchBar.jsx';
import SearchResults from '../05-DisplayContainer/SearchResults.jsx';
import AudioPlayer from '../06-Player/AudioPlayer.jsx';
import "./MainContainer.scss"


export default function MainContainer(props) {


  return (
    <div className="mainContainer">
      <SearchBar search={props.search} setSearch={props.setSearch}/>

      <SearchResults searchResults={props.searchResults} setSearchResults={props.setSearchResults}/>

      <AudioPlayer />
      
    </div>
  );
}
