import React from 'react'
import './styles.css'

const Photos = () => {
    return (
        <div className='content-uploads'>
            <div className='upload-image'>
                <img src={`/assets/publish-vehicle/upload1.svg`} alt="" />
            </div>
            <div className='upload-image'>
                <img src={`/assets/publish-vehicle/upload2.svg`} alt="" />
            </div>
            <div className='upload-image'>
                <img src={`/assets/publish-vehicle/upload3.svg`} alt="" />
            </div>
        </div>
    )
}

export default Photos