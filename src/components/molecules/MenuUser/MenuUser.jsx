import React from 'react'
import { IoMdArrowDropup } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutRedux } from '../../../store/auth/actions'
import './MenuUser.css'

const MenuUser = ({ validateModal }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className='content-menu'>
            <div className='content-info-user'>
                <img className='avatar' src="https://image.shutterstock.com/image-vector/auto-shop-sports-car-dealership-260nw-1307607703.jpg" alt="" />
                <p>cjmp99</p>
                <IoMdArrowDropup className='icon' onClick={validateModal} size={18}/>
            </div>
            <li>Publicaciones</li>
            <li>Ventas</li>
            <li>Favoritos</li>
            <li onClick={() => navigate('/profile')}>Cuenta</li>
            <li>Centro mensajes</li>
            <li onClick={() => dispatch(logoutRedux())}>Cerrar sesión</li>
        </div>
    )
}

export default MenuUser