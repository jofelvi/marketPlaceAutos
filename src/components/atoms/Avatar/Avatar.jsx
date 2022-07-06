import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import './Avatar.css'

const Avatar = ({ setShowMenu, className }) => {
    return (
        <div className={className ? className : 'content-avatar'} onClick={() => setShowMenu(true)}>
            <img className='avatar' src="https://image.shutterstock.com/image-vector/auto-shop-sports-car-dealership-260nw-1307607703.jpg" alt="" />

            <IoMdArrowDropdown />
        </div>
    )
}

export default Avatar