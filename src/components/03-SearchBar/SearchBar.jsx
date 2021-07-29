import "./SearchBar.scss"
import userIcon from "./me.jpg"

export default function SearchBar() {
    

    return (
        <div className="searchBar">
            <div id="searchBox">
                <input  type="text" />
                <i id="searchBtn" class="fas fa-search"></i> 
            </div>
            
            <div id="userBox">
                <img id="userIcon" src={userIcon} alt="userIcon" />
                <span id="userName">Hi, Egglord</span>
                <i class="fas fa-sign-out-alt"></i>
            </div>
            
        </div>
    )
}
