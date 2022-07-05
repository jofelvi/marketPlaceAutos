import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone';
import './DragOnDropStyles.css';

const DragOnDrop = ({
    name,
    formik,
    error,
    defaultImage,
    selectedImage,
    onChangeImg
}) => {
    const onDrop = useCallback((acceptedFiles, r, e) => {
        onChangeImg(URL.createObjectURL(acceptedFiles[0]))
        formik.values[name] = acceptedFiles[0]
        formik.setTouched({ ...formik.touched, [name]: false });
        //eslint-disable-next-line
    }, []);

    const onDropRejected = useCallback((acceptedFiles) => {
        console.log(acceptedFiles[0].errors[0].message);
        //eslint-disable-next-line
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        onDropRejected,
        multiple: false,
    });

    return (
        <div
            name={name}
            {...getRootProps({
                onChange: e => formik.handleChange(e)
            })}
            className={error ? 'upload-image-error' : 'upload-image'}

        >
            <input name={name} {...getInputProps({
                onChange: e => formik.handleChange(e)
            })} />
            {error && <p className='error-img'>{error}</p>}
            <img className={selectedImage ? 'image' : ''} src={selectedImage ? selectedImage : defaultImage} alt="" />
        </div>
    )
}

export default DragOnDrop