import { useFormik } from 'formik';
import { useState } from 'react'

const useOnChange = (initialValues, validate) => {
    const [formData, setFormData] = useState({});
    const [showMessage, setShowMessage] = useState(false);

    const formik = useFormik({
        initialValues: initialValues,
        validate: (data) => validate(data),
        onSubmit: (data) => {
            console.log(data);
            setFormData(data);
            setShowMessage(true);

            formik.resetForm();
        }
    });

    return { formData, showMessage, formik, setShowMessage }
}

export default useOnChange