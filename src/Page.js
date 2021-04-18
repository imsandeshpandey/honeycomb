import React from 'react'
import Community from './Community'
import Landing from './Landing'
import './Page.css'

function Page() {
    return (
        <div className="page">
            <Landing/>
            <Community/>
        </div>
    )
}

export default Page
