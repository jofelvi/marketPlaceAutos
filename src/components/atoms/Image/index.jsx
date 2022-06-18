import React from 'react';
import './styles.css';

const Image = ({
    src
}) => {
    return (
        <img className='banner' src={src} alt="Marketplace" />
    )
}

export default Image