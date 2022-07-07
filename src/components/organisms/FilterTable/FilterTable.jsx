import React from 'react'
import { useState } from 'react'
import './FilterTable.css'

const FilterTable = () => {
    const [showFilter, setShowFilter] = useState(false)
    return (
        <>
            <div className='content-filter-pb'>
                <img src="/assets/filter.svg" alt="Filtrar y ordenar" onClick={() => setShowFilter(!showFilter)} />
                <p>Filtrar y ordenar</p>
            </div>

            {showFilter &&
                <div className="selected-filter-pb">
                    <div className="item-filter-pb">Fecha</div>
                    <div className="item-filter-pb">Precio</div>
                    <div className="item-filter-pb">Estado</div>
                </div>
            }
        </>
    )
}

export default FilterTable