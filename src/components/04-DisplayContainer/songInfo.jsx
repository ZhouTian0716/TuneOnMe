import React from 'react'

export default function SongInfo({title, artist, album}) {
    return (
        <tr>
            <td>{title}</td>
            <td>{artist}</td>
            <td>{album}</td>
        </tr>
    )
}
