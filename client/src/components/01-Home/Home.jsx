import React from 'react'
import useAuth from '../../utils/useAuth.js'

export default function Home({code}) {
    const accessToken = useAuth(code)
    return (
        <div>
            {code}
        </div>
    )
}
