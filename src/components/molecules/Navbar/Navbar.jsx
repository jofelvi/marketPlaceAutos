import React, { useRef, useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useOuterClick } from '../../../hooks/useOuterClick'
import Avatar from '../../atoms/Avatar/Avatar'
import MenuUser from '../MenuUser/MenuUser'
import { items, itemsLogged } from './items'
import useAuth from '../../../hooks/useAuth'
import './NavbarStyles.css'

const Navbar = () => {
    const { access_token } = useAuth();
    const [showMenu, setShowMenu] = useState(false);
    const itemsNav = access_token ? itemsLogged : items;
    const innerRef = useRef(null);

    const validateModal = (e) => {
        if (showMenu) {
            setShowMenu(false)
        }
    }

    useOuterClick(
        e => validateModal(e),
        innerRef
    );

    return (
        <nav className='navbar'>
            <h1 className='logo'>Marketplace.com</h1>

            <div className='content-items'>
                <Link to='/' className='item-nav'><AiFillHome size={18} /></Link>
                {itemsNav.map((item) => (
                    <Link to={item.route} className='item-nav' key={item.id}>{item.label}</Link>
                ))}

                {access_token &&
                    <div className={!showMenu ? 'content-menu-user' : 'content-menu-user-show'} ref={innerRef}>
                        <Avatar setShowMenu={setShowMenu} className={showMenu ? 'ocult' : ''} />

                        {showMenu && <MenuUser validateModal={validateModal} />}
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar