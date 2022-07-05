import React from 'react'
import { getFormErrorMessage } from '../../../utils/getFormErrorMessage';
import './SelectStyles.css'

const Select = ({
    name,
    value,
    label,
    formik,
    options,
    disabled,
    selectTransparent,
    selectBorder,
    defaultValue,
    Icon,
    onChange,
}) => {
    return (
        <div>
            <div className={selectTransparent ? 'content-select-transparent' : formik?.errors[name] && !selectBorder ? 'content-select-error' : selectBorder && !formik?.errors[name] ? 'content-select-border' : selectBorder && formik?.errors[name] ? 'content-select-border-error' : 'content-select'}>
                {label && <label>{label}</label>}

                {Icon && <Icon className={formik?.errors[name] ? 'icon-red ' : 'icon'} size={22} style={{ left: 'left' }} />}

                <select className={!label && !selectBorder ? 'ajust-select select' : selectBorder ? 'select-border' : !label ? 'ajust-select' : 'select'} name={name} value={value} onChange={onChange} disabled={disabled}>
                    {options.length > 0 ? options.map((option, key) => (
                        <option key={key} value={option.value}>{option.name}</option>
                    )) :
                        <option value={''}>{defaultValue}</option>
                    }
                </select>
            </div>
            {getFormErrorMessage(name, formik)}
        </div>
    )
}

export default Select