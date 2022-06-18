import React from 'react'
import './styles.css'

const Input = ({
    name,
    value,
    type,
    placeholder,
    width = '100%',
    left = '20px',
    onChange,
    Icon
}) => {
    return (
        <div className="content-input" style={{width: width}}>

            <Icon className='icon' size={22} style={{left: left}}/>

            <input
                name={name}
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className='input'
            />


        </div>
    )
}

export default Input