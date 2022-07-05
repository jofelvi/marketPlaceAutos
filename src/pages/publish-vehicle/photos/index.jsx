import React, { useState } from 'react'
import DragOnDrop from '../../../components/atoms/DragOnDrop/DragOnDrop';
import './styles.css'

const Photos = ({ formik }) => {
    const [imgFront, setImgFront] = useState(null);
    const [imgLeft, setImgLeft] = useState(null);
    const [imgRight, setImgRight] = useState(null);

    return (
        <div className='content-uploads'>
            <DragOnDrop
                name='imgFront'
                formik={formik}
                onChangeImg={setImgFront}
                defaultImage='/assets/publish-vehicle/upload1.svg'
                selectedImage={imgFront}
                error={formik.errors.imgFront}
            />

            <DragOnDrop
                name='imgLeft'
                formik={formik}
                onChangeImg={setImgLeft}
                defaultImage='/assets/publish-vehicle/upload2.svg'
                selectedImage={imgLeft}
                error={formik.errors.imgLeft}
            />

            <DragOnDrop
                name='imgRight'
                formik={formik}
                onChangeImg={setImgRight}
                defaultImage='/assets/publish-vehicle/upload3.svg'
                selectedImage={imgRight}
                error={formik.errors.imgRight}
            />
        </div>
    )
}

export default Photos