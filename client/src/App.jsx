import Login from "./components/00-Login/Login.jsx"
import Home from "./components/01-Home/Home.jsx"
import "./reset.css"
import "./App.scss"

const code = new URLSearchParams(window.location.search).get("code")

function App() {
  return code ? <Home code={code}/> : <Login />
}

export default App;
