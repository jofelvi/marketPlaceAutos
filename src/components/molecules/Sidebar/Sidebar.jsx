import React from 'react'
import { itemsFilter } from './items'
import './SidebarStyles.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            {itemsFilter.map((item, key) => (
                <>
                    {item.dropdown ?
                        <select key={key}>
                            <option value="">{item.label}</option>
                            {item.options.map((option, key) => (
                                <option key={key}>{option.label}</option>
                            ))}
                        </select>
                        :
                        <button key={key}>{item.label}</button>
                    }
                </>
            ))}
        </div>
    )
}

export default Sidebar