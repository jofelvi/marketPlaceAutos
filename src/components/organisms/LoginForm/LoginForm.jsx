import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { TiLockClosed } from 'react-icons/ti'
import { ImUser } from 'react-icons/im'
import { useSelector, useDispatch } from 'react-redux'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import Input from '../../atoms/Input/Input'
import useOnChange from '../../../hooks/useOnChange'
import { initialValuesLogin, validateLogin } from '../../../utils/login/validateLogin'
import { loginRedux } from '../../../store/auth/actions'
import './LoginFormStyles.css'

const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'var(--white-bg-color)' }} spin />

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { profile, loading } = useSelector(state => state.auth);

    const login = (data) => {
        dispatch(loginRedux(data))
    }

    useEffect(() => {
        if(!profile.access_token) return;
        
        navigate('/profile')
        return;

    }, [profile.access_token]);

    const { formik } = useOnChange(initialValuesLogin, validateLogin, login);

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

                <button className='login' disabled={loading}>Iniciar sesión {loading && <Spin indicator={antIcon} />}</button>
                <button onClick={() => navigate('/selected-buyer-seller')} disabled={loading} className='register'>Registrate</button>
            </div>
        </form>
    )
}

export default LoginForm