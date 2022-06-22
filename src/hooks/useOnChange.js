import { useFormik } from 'formik';
import { useState } from 'react'

const useOnChange = (initialValues, validate, onSubmit) => {
    const [formData, setFormData] = useState({});
    const [showMessage, setShowMessage] = useState(false);

    const formik = useFormik({
        initialValues: initialValues,
        validate: (data) => validate(data),
        onSubmit: (data) => onSubmit(data)
    });

    return { formData, showMessage, formik, setShowMessage, setFormData }
}

export default useOnChange