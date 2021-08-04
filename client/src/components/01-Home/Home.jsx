import { useState, useEffect } from "react";
import useAuth from '../../utils/useAuth.js';
import MenuBar from '../02-MenuBar/MenuBar.jsx';
import MainContainer from '../03-MainContainer/MainContainer.jsx';
import SpotifyWebApi from "spotify-web-api-node"

const spotifyApi = new SpotifyWebApi({
    clientId: "a64546f1c27541cca025fc19bce260c3",
})


export default function Home({code}) {
    const accessToken = useAuth(code);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])


    useEffect(() => {
      if (!accessToken) return
      spotifyApi.getMe().then(function(data) {
        console.log('Some information about the authenticated user', data.body);
      }, function(err) {
      console.log('Something went wrong!', err);
      });
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
              accessToken={accessToken}
              search={search}
              setSearch={setSearch}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
        </div>
    )
}
