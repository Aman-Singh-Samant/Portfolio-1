//spy is how to tell react-scroll what element it should watch to apply the activeClass
//activeClass will change the style of the list element in the navbar when the scroll is over the component

import React,{useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import contactImg from '../../assets/contact.png'
import menu from '..//..//assets/menu.png'
const Navbar = () =>{
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='logo'></img>
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem' activeClass='active' to='intro' duration={500} smooth={true} offset={-100} spy={true}>Home</Link>
                <Link className='desktopMenuListItem'activeClass='active' to='skills' duration={500} smooth={true} offset={-90} spy={true}>About</Link>
                <Link className='desktopMenuListItem' activeClass='active' to='works' duration={500} smooth={true} offset={-90} spy={true}>Portfolio</Link>
                <Link className='desktopMenuListItem'activeClass='active' to='clients' duration={500} smooth={true} offset={-80} spy={true}>Clients</Link>
                
            </div>
            
            <button className='desktopMenuBtn' onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'})
            }}  >
                <img src={contactImg} alt='desktopMenuImg' className='desktopMenuImg'/>Contact me
            </button>
            <img src={menu} alt='menu' className='mobMenuImg' onClick={()=>setShowMenu(!showMenu)}></img>
            <div className='mobMenu' style={{display: showMenu? 'flex': 'none'}}>
                <Link className='listItem' activeClass='active' to='intro' duration={500} smooth={true} offset={-100} spy={true} onClick={()=>setShowMenu(false)}>Home</Link>
                <Link className='listItem'activeClass='active' to='skills' duration={500} smooth={true} offset={-80} spy={true} onClick={()=>setShowMenu(false)}>About</Link>
                <Link className='listItem' activeClass='active' to='works' duration={500} smooth={true} offset={-80} spy={true} onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link className='listItem'activeClass='active' to='clients' duration={500} smooth={true} offset={-80} spy={true} onClick={()=>setShowMenu(false)}>Clients</Link>
                
            </div>
        </nav>
    )
}

export default Navbar