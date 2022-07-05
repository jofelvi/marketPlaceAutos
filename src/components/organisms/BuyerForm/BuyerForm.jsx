import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ImUser } from 'react-icons/im'
import { TiLockClosed } from 'react-icons/ti'
import { HiIdentification } from 'react-icons/hi'
import Input from '../../atoms/Input/Input'
import useOnChange from '../../../hooks/useOnChange'
import { initialValuesBuyer, validateBuyer } from '../../../utils/register/validateRegister'
import './BuyerFormStyles.css'

const BuyerForm = () => {
    const navigate = useNavigate();

    const register = (data) => {
        console.log(data);
        setFormData(data);

        formik.resetForm();
    }

    const { formik, setFormData } = useOnChange(initialValuesBuyer, validateBuyer, register);
    return (
        <div className='content-buyer-form'>
            <form className='form'>
                <p className='title'>Completa tus datos</p>
                <div className="inputs">
                    <Input
                        name='first_name'
                        type='text'
                        placeholder='Nombre'
                        onChange={formik.handleChange}
                        value={formik.values.first_name}
                        formik={formik}
                        Icon={ImUser}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='last_name'
                        type='text'
                        placeholder='Apellido'
                        onChange={formik.handleChange}
                        value={formik.values.last_name}
                        formik={formik}
                        Icon={ImUser}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='identification'
                        type='text'
                        placeholder='C.I'
                        onChange={formik.handleChange}
                        value={formik.values.identification}
                        formik={formik}
                        Icon={HiIdentification}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='email'
                        type='email'
                        placeholder='Correo Electrónico'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        formik={formik}
                        Icon={HiIdentification}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='password'
                        type='password'
                        placeholder='Contraseña'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        formik={formik}
                        Icon={TiLockClosed}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='confirm_password'
                        type='password'
                        placeholder='Confirmar'
                        onChange={formik.handleChange}
                        value={formik.values.confirm_password}
                        formik={formik}
                        Icon={TiLockClosed}
                        width='250px'
                        left='20px'
                    />

                    <label className={formik?.errors['accept'] ? 'checkbox-red' : 'checkbox'}><input type="checkbox" name='accept' value={formik.values.accept} onChange={formik.handleChange} formik={formik} /> {formik?.errors['accept'] ? formik?.errors['accept'] : 'Acepto términos y condiciones'}</label>
                </div>
            </form>
            <div className="content-buttons-register">
                <button className='login' onClick={formik.handleSubmit}>Aceptar</button>
                <button className='buyer' onClick={() => navigate('/selected-buyer-seller')}>Cancelar</button>
            </div>
        </div>
    )
}

export default BuyerForm