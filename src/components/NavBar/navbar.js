import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import contactImg from '../../assets/contact.png'

const Navbar = () =>{
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='logo'></img>
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem'>Home</Link>
                <Link className='desktopMenuListItem'>About</Link>
                <Link className='desktopMenuListItem'>Client</Link>
                <Link className='desktopMenuListItem'>Portfolio</Link>
            </div>
            <button className='desktopMenuBtn'>
                <img src={contactImg} alt='desktopMenuImg' className='desktopMenuImg'/>Contact me
            </button>
        </nav>
    )
}

export default Navbar