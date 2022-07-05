import React from 'react';
import './ImageStyles.css';

const Image = ({
    src
}) => {
    return (
        <img className='banner' src={src} alt="Marketplace" />
    )
}

export default Image