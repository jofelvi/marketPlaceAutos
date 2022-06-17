import React from 'react'
import { items } from './items'
import './styles.css'
import { AiFillHome } from 'react-icons/ai'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='logo'>Marketplace.com</h1>

            <div className='content-items'>
                <span className='item-nav'><AiFillHome size={18}/></span>
                {items.map((item) => (
                    <span className='item-nav' key={item.id}>{item.label}</span>
                ))}
            </div>
        </nav>
    )
}

export default Navbar