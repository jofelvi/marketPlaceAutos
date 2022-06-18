import React from 'react'
import Select from '../../atoms/Select'
import './styles.css'

const FilterCars = () => {
    const categories = [
        {
            name: 'Buscar autos',
            value: ''
        },
        {
            name: 'Carros',
            value: 'cars'
        },
        {
            name: 'Camionetas',
            value: 'vans'
        },
        {
            name: 'Suv',
            value: 'suv'
        },
        {
            name: 'Motos',
            value: 'motorcycles'
        },
        {
            name: 'Camiones',
            value: 'buses'
        },
        {
            name: 'Maquinaria',
            value: 'machinery'
        },
    ]
    const brands = [
        {
            name: 'Marcas',
            value: ''
        }
    ]
    const models = [
        {
            name: 'Model',
            value: ''
        }
    ]
    const regions = [
        {
            name: 'Región',
            value: ''
        }
    ]
    const minyear = [
        {
            name: 'Año Min',
            value: ''
        }
    ]
    const maxyear = [
        {
            name: 'Año max',
            value: ''
        }
    ]
    const pricemin = [
        {
            name: 'Precio Min',
            value: ''
        }
    ]
    const pricemax = [
        {
            name: 'Precio Max',
            value: ''
        }
    ]
    return (
        <div className='content-filter'>
            <div className="content-selects">
                <Select
                    name='carsCategories'
                    label='Categorías de vehículos'
                    options={categories}
                />
                <Select
                    name='brandsCars'
                    options={brands}
                />
                <Select
                    name='modelCars'
                    options={models}
                />
                <button>Buscar</button>
            </div>
            <div className="content-selects-transparent">
                <Select
                    name='region'
                    selectTransparent
                    options={regions}
                />
                <Select
                    name='minyear'
                    selectTransparent
                    options={minyear}
                />
                <Select
                    name='maxyear'
                    selectTransparent
                    options={maxyear}
                />
                <Select
                    name='pricemin'
                    selectTransparent
                    options={pricemin}
                />
                <Select
                    name='pricemax'
                    selectTransparent
                    options={pricemax}
                />
            </div>
        </div>
    )
}

export default FilterCars