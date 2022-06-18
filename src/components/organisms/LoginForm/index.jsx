import React from 'react'
import { TiLockClosed } from 'react-icons/ti'
import { ImUser } from 'react-icons/im'
import Input from '../../atoms/Input'
import './styles.css'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const navigate = useNavigate();
    return (
        <form className='form-login'>
            <p className='title'>Inicia Sesión</p>

            <div className="content-inputs">
                <Input
                    name='email'
                    type='email'
                    placeholder='Correo'
                    onChange={e => console.log(e.target.value)}
                    Icon={ImUser}
                />

                <Input
                    name='password'
                    type='password'
                    placeholder='Contraseña'
                    isPassword
                    onChange={e => console.log(e.target.value)}
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