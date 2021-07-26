import "./MenuBarr.scss"

export default function menuBar() {
    return (
        <div className="menuBar">
            <h2 className="Logo">Tune On Me</h2>

            <div className="menuBlock">
                <h3 className="menuTitle">OnLine Music</h3>
                <h3 className="menuOption"><i class="fas fa-music"></i>Music Room</h3>
                <h3 className="menuOption"><i class="fas fa-music"></i>Trending</h3>
                <h3 className="menuOption"><i class="fas fa-music"></i>Music Video</h3>
                <h3 className="menuOption"><i class="fas fa-music"></i>Music Radio</h3>
            </div>

            <div className="menuBlock">
                <h3 className="menuTitle">My Music</h3>
                <h3 className="menuOption"><i class="fas fa-music"></i>My Likes</h3>
                <h3 className="menuOption"><i class="fas fa-music"></i>My Downloads</h3>
                <h3 className="menuOption"><i class="fas fa-music"></i>Recent Played</h3>
            </div>
            
        </div>
    )
}
