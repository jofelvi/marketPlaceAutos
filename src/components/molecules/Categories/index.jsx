import React from 'react'
import { useNavigate } from 'react-router-dom'
import { items } from '../../../utils/categories'
import './styles.css'

const Categories = () => {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <p>Categorías</p>
            <div className='categories'>
                {items.map(category => (
                    <div className='category' key={category.label} onClick={() => navigate('/filter-cars')}>
                        <img src={category.image} alt="" />
                        <span>{category.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories