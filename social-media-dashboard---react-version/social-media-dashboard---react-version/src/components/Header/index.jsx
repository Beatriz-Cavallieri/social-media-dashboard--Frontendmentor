import React from 'react'
import Slider from '../Slider'
import './style.css'

export default function Header() {
    return (
        <header>
            <div className="page-title">
                <h1>Social Media Dashboard</h1>
                <h3>Total Followers: 23,004</h3>
            </div>
            <div className="mode">
                <h3>Dark Mode</h3>
                <Slider />
            </div>
        </header>
    )
}
