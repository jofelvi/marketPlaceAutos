import React from 'react'
import './styles.css'

const Select = ({
    name,
    value,
    label,
    options,
    disabled,
    selectTransparent,
    onChange
}) => {
    return (
        <div className={selectTransparent ? 'content-select-transparent' : 'content-select'}>
            <label>{label}</label>
            <select className={!label ? 'ajust-select': ''} name={name} value={value} onChange={onChange} disabled={disabled}>
                {options.map((option, key) => (
                    <option key={key} value={option.value}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select