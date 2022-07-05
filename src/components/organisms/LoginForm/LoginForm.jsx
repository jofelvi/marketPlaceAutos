import React from 'react'
import { TiLockClosed } from 'react-icons/ti'
import { ImUser } from 'react-icons/im'
import Input from '../../atoms/Input/Input'
import { useNavigate } from 'react-router-dom'
import useOnChange from '../../../hooks/useOnChange'
import { initialValuesLogin, validateLogin } from '../../../utils/login/validateLogin'
import './LoginFormStyles.css'

const LoginForm = () => {
    const navigate = useNavigate();

    const login = (data) => {
        console.log(data);
        setFormData(data);

        formik.resetForm();
    }

    const { formik, setFormData } = useOnChange(initialValuesLogin, validateLogin, login);

    return (
        <form className='form-login' onSubmit={formik.handleSubmit}>
            <p className='title'>Inicia Sesión</p>

            <div className="content-inputs">
                <Input
                    name='email'
                    type='email'
                    placeholder='Correo'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    formik={formik}
                    Icon={ImUser}
                />

                <Input
                    name='password'
                    type='password'
                    placeholder='Contraseña'
                    isPassword
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    formik={formik}
                    Icon={TiLockClosed}
                />
            </div>
            <br />
            <div className="content-buttons">
                <p className='recovery-password'>¿Olvidaste tu contraseña?</p>

                <button className='login'>Iniciar sesión</button>
                <button onClick={() => navigate('/selected-buyer-seller')} className='register'>Registrate</button>
            </div>
        </form>
    )
}

export default LoginForm