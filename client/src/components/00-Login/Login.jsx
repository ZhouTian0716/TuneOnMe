import React from 'react'
import "./Login.scss"

// make sure to check client_id
export const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=e66018a245b7495e89b7460d9ad2b7b6&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


export default function Login() {
    return (
        <div>
            <a href={AUTH_URL} id="signIn"><i class="fas fa-sign-in-alt">LOGIN with SPOTIFY</i></a>
        </div>
    )
}
