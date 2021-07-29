import "./DisplayContainer.scss"
import tracks from "../../tracks";
import SongInfo from "./songInfo";

export default function Favourites() {
    

    return (
        <div className="displayContainer">
            <h2>Favourites</h2>
            <h3>
                <span><i class="fas fa-music"></i>: 10</span>
                <span><i class="fas fa-list-ul"></i>: 10</span>
                <span><i class="fas fa-compact-disc"></i>: 10</span>
            </h3>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Album</th>
                    </tr>
                </thead>
                <tbody>
                    {tracks.map(track => 
                        <SongInfo
                            key={track.id} title={track.title} artist={track.artist}
                            album={track.album}
                        />
                    )}
                </tbody>
            </table>
        </div>
    )
}
