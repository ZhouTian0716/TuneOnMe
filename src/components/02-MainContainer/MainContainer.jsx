// import React, { useState } from 'react';
import SearchBar from "../03-SearchBar/SearchBar.jsx";
import Favourites from "../04-DisplayContainer/Favourites.jsx";
import AudioPlayer from "../05-Player/AudioPlayer.jsx";
import "./MainContainer.scss"

export default function MainContainer(props) {
  // const [currentPage, setCurrentPage] = useState('AboutMe');


  // const renderPage = () => {
  //   if (currentPage === 'AboutMe') {
  //     return <AboutMe />;
  //   }
  //   if (currentPage === 'Contact') {
  //     return <Contact />;
  //   }
  //   if (currentPage === 'Portfolio') {
  //     return <Portfolio />;
  //   }
  //   return <Resume />;
  // };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="mainContainer">
      <SearchBar />
      <Favourites />
      <AudioPlayer tracks={props.tracks}/>
      
      
    </div>
  );
}
