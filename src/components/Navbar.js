import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import {Link } from 'react-router-dom'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
                <h1>Cryp<span className='primary'>To</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Featured'>Featured</Link>
                    </li>
                    <li>
                        <Link to='/News'>News</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contact</Link>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='btn btn-color'>Connect Wallet</button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar