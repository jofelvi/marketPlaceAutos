import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HiIdentification } from 'react-icons/hi'
import { ImUser } from 'react-icons/im'
import { TiLockClosed } from 'react-icons/ti'
import { BiWorld } from 'react-icons/bi'
import Input from '../../atoms/Input/Input'
import { initialValuesSeller, validateSeller } from '../../../utils/register/validateRegister'
import useOnChange from '../../../hooks/useOnChange'
import './SellerFormStyles.css'

const SellerForm = () => {
    const navigate = useNavigate();

    const register = (data) => {
        console.log(data);
        setFormData(data);

        formik.resetForm();
    }

    const { formik, setFormData } = useOnChange(initialValuesSeller, validateSeller, register);
    
    return (
        <div className='content-seller-form'>
            <form className='form'>
                <p className='title'>Completa tus datos</p>
                <div className="inputs">
                    <Input
                        name='business_name'
                        type='text'
                        placeholder='Representación legal'
                        onChange={formik.handleChange}
                        value={formik.values.business_name}
                        formik={formik}
                        Icon={ImUser}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='phone'
                        type='phone'
                        placeholder='Teléfono'
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        formik={formik}
                        Icon={ImUser}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='identification'
                        type='text'
                        placeholder='R.I.F'
                        onChange={formik.handleChange}
                        value={formik.values.identification}
                        formik={formik}
                        Icon={HiIdentification}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='social_name'
                        type='text'
                        placeholder='Razón social'
                        onChange={formik.handleChange}
                        value={formik.values.social_name}
                        formik={formik}
                        Icon={ImUser}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='state'
                        type='text'
                        placeholder='Estado'
                        onChange={formik.handleChange}
                        value={formik.values.state}
                        formik={formik}
                        Icon={HiIdentification}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='email'
                        type='email'
                        placeholder='Correo electrónico'
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

                    <Input
                        name='ubication'
                        type='text'
                        placeholder='Ubicación'
                        onChange={formik.handleChange}
                        value={formik.values.ubication}
                        formik={formik}
                        Icon={BiWorld}
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

export default SellerForm