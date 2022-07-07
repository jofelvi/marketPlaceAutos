import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Table from '../../components/molecules/Table/Table'
import FilterTable from '../../components/organisms/FilterTable/FilterTable'
import { getFavoritesByUser } from '../../store/publications/actions'

const Favorites = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFavoritesByUser());
        //eslint-disable-next-line
    }, []);

    return (
        <div className='content-publications'>
            <p className='title'>Favoritos</p>
            <FilterTable/>
            <Table/>
        </div>
    )
}

export default Favorites