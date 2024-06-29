import React from 'react'
import './WarningLine.css'
export default function WarningLine({ text }) {
    return (
        <div className='scrolling-text'>
            <span>{text}</span>
        </div>
    )
}
