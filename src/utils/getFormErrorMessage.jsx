export const getFormErrorMessage = (name, formik) => {
    return formik?.errors[name] && <small className="p-error">{formik?.errors[name]}</small>
};