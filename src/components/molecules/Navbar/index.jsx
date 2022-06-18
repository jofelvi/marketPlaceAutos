import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { items } from './items'
import './styles.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='logo'>Marketplace.com</h1>

            <div className='content-items'>
                <Link to='/' className='item-nav'><AiFillHome size={18}/></Link>
                {items.map((item) => (
                    <Link to={item.route} className='item-nav' key={item.id}>{item.label}</Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar