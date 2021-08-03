import { useState, useEffect } from "react";
import useAuth from '../../utils/useAuth.js';
import MenuBar from '../02-MenuBar/MenuBar.jsx';
import MainContainer from '../03-MainContainer/MainContainer.jsx';
import SpotifyWebApi from "spotify-web-api-node"

const spotifyApi = new SpotifyWebApi({
    clientId: "e66018a245b7495e89b7460d9ad2b7b6",
})


export default function Home({code}) {
    const accessToken = useAuth(code);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    // console.log(searchResults)

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    //Search Functionality
    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return
    
        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
          if (cancel) return
          setSearchResults(
            res.body.tracks.items.map(track => {
              const smallestAlbumImage = track.album.images.reduce(
                (smallest, image) => {
                  if (image.height < smallest.height) return image
                  return smallest
                },
                track.album.images[0]
              )
    
              return {
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: smallestAlbumImage.url,
              }
            })
          )
        })
    
        return () => (cancel = true)
    }, [search, accessToken])
    





    return (
        <div className="app">
            <MenuBar />
            <MainContainer
                search={search}
                setSearch={setSearch}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
            />
        </div>
    )
}
