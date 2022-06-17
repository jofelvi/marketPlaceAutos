import React from 'react'
import { items } from '../../../utils/categories'
import './styles.css'

const Categories = () => {
    return (
        <div className='container'>
            <p>Categorías</p>
            <div className='categories'>
                {items.map(category => (
                    <div className='category' key={category.label}>
                        <img src={category.image} alt="" />
                        <span>{category.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories