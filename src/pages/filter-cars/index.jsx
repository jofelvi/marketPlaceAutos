import React, { useState } from 'react'
import Button from '../../components/atoms/Button'
import RecentCars from '../../components/molecules/RecentCars'
import Sidebar from '../../components/molecules/Sidebar'
import './styles.css'

const FilterCars = () => {
    const [showMenu, setShowMenu] = useState(true)
    return (
        <div className='content-filtercars'>
            <div className={`content-sidebar ${!showMenu ? 'remove-width-content-sidebar' : ''}`}>
                <Button label={showMenu ? 'Minimizar filtro' : 'Desplegar filtro'} onClick={() => setShowMenu(!showMenu)}/>

                {showMenu &&
                    <Sidebar />
                }
            </div>
            <div className="content-info">
                <RecentCars />
            </div>
        </div>
    )
}

export default FilterCars