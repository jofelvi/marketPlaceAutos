import React from 'react'
import './styles.css'

const Button = ({
    label = '$ 5000',
    onClick
}) => {
    return (
        <button className='button' onClick={onClick}>{label}</button>
    )
}

export default Button