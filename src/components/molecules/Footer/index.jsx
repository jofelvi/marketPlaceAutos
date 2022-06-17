import React from 'react'
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import './styles.css'

const Footer = () => {
    return (
        <footer>
            <p className='title'>Contáctanos</p>
            <p className='sub-title'>Horario de atención</p>
            <p className='schedule'>Lunes a Sábado | 8:00 AM a 6:00 PM</p>
            <p className='schedule'>Domingos | 8:00 AM a 12:00 PM (Vía online)</p>

            <div className="content-icons">
                <FaWhatsapp size={25}/>
                <FaFacebookSquare size={25}/>
                <FaInstagram size={25}/>
                <BsFillTelephoneFill size={25}/>
            </div>
        </footer>
    )
}

export default Footer