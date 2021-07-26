import "./MenuBar.scss"

export default function menuBar() {
    return (
        <div className="menuBar">
            <h2 className="logo">Tune On Me</h2>

            <div className="menuBlock">
                <h3 className="menuTitle">Latest Music</h3>
                <ul>
                    <li className="menuOption"><i class="fas fa-music"></i>New Released</li>
                    <li className="menuOption"><i class="fas fa-music"></i>Rankings</li>
                    <li className="menuOption"><i class="fas fa-video"></i>Music Video</li>
                    <li className="menuOption"><i class="fas fa-compact-disc"></i>Music Radio</li>
                </ul>
                
            </div>

            <div className="menuBlock">
                <h3 className="menuTitle">My Music</h3>
                <ul>
                    <li className="menuOption"><i class="fas fa-heart"></i>Favourites</li>
                    <li className="menuOption"><i class="fas fa-arrow-alt-circle-down"></i>Downloads</li>
                    <li className="menuOption"><i class="far fa-clock"></i>Recent</li>
                </ul>   
            </div>

            <div className="menuBlock">
                <h3 className="menuTitle">My List</h3>
                <ul>
                    <li className="menuOption"><i class="fas fa-list-ul"></i>Taylor</li>
                    <li className="menuOption"><i class="fas fa-list-ul"></i>Ed Sheeran</li>
                    <li className="menuOption"><i class="fas fa-list-ul"></i>Piano</li>
                </ul>
                
            </div>
            
        </div>
    )
}
