import React, { useState } from 'react';
// import Topbar from "../topbar/Topbar.jsx";
// import AboutMe from "../aboutMe/AboutMe.jsx";
// import Contact from "../contact/Contact.jsx";
// import Portfolio from "../portfolio/Portfolio.jsx";
// import Resume from "../resume/Resume.jsx";
import "./MainContainer.scss"

export default function SectionContainer() {
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
    <div>
      <Topbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="sectionContainer">
        {renderPage()}
      </div>
      
    </div>
  );
}
