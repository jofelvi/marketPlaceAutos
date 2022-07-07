import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Table from '../../components/molecules/Table/Table'
import FilterTable from '../../components/organisms/FilterTable/FilterTable'
import { getPublicationsByUser } from '../../store/publications/actions'
import './styles.css'

const Publications = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPublicationsByUser());
        //eslint-disable-next-line
    }, []);

    return (
        <div className='content-publications'>
            <p className='title'>Publicaciones</p>
            <FilterTable/>
            <Table/>
        </div>
    )
}

export default Publications