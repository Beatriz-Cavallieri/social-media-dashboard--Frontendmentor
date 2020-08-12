import React from 'react'
import './style.css'

export default function Slider() {
    return (
        <label className="switch">
            <input type="checkbox" name="theme" />
            <span className="slider"></span>
        </label>
    )
}
