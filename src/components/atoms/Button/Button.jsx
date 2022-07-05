import React from 'react'
import './ButtonStyles.css'

const Button = ({
    label = '$ 5000',
    disabled,
    onClick,
}) => {
    return (
        <button className={disabled ? 'button-disabled' : 'button'} disabled={disabled} onClick={onClick}>{label}</button>
    )
}

export default Button