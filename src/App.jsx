import MenuBar from "./components/01-MenuBar/MenuBar.jsx"
import MainContainer from "./components/02-MainContainer/MainContainer.jsx"
import "./reset.css"
import "./App.scss"


function App(props) {
  return (
    <div className="app">
      <MenuBar /> 
      <MainContainer tracks={props.tracks}/> 
    </div>
    
  );
}

export default App;
