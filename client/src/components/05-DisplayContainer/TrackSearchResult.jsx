import React from 'react'

export default function TrackSearchResult({ track }) {
    return (
        <tr>
          <td><i class="far fa-heart"></i></td>
          <td><img src={track.albumUrl}/></td>
          <td>{track.title}</td>
          <td>{track.artist}</td>
        </tr>
    )
}
