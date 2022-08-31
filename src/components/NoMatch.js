import React from 'react'
import { Link } from 'react-router-dom'
import './noMatch.css'

export default function NoMatch() {
    return (<div className='noMatch'>
        <h1>No Match found</h1>
        <Link to="/" className='btn'>Return To Home</Link>
    </div>
    
  )
}
