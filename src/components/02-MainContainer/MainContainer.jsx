// import React, { useState } from 'react';
// import Searchbar from "../03-SearchBar/SearchBar.jsx";
import AudioPlayer from "../05-Player/AudioPlayer.jsx";
// import AboutMe from "../aboutMe/AboutMe.jsx";
// import Contact from "../contact/Contact.jsx";
// import Portfolio from "../portfolio/Portfolio.jsx";
// import Resume from "../resume/Resume.jsx";
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
      
      <AudioPlayer tracks={props.tracks}/>
      
      
    </div>
  );
}
