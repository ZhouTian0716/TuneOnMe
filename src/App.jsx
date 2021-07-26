import MenuBar from "./components/01-MenuBar/MenuBar.jsx"
import MainContainer from "./components/02-MainContainer/MainContainer.jsx"
import "./reset.css"
import "./App.scss"


function App() {
  return (
    <div className="app">
      <MenuBar /> 
      <MainContainer /> 
    </div>
  );
}

export default App;
