import React from 'react'
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import './styles.css'

const Input = ({
    name,
    value,
    type,
    placeholder,
    isPassword,
    onChange,
    Icon
}) => {
    return (
        <div className="content-input">

            <Icon className='icon' size={22} />

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