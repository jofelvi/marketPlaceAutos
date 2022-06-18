import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ImUser } from 'react-icons/im'
import { TiLockClosed } from 'react-icons/ti'
import { HiIdentification } from 'react-icons/hi'
import Input from '../../atoms/Input'
import './styles.css'

const BuyerForm = () => {
    const navigate = useNavigate();
    return (
        <div className='content-buyer-form'>
            <form className='form'>
                <p className='title'>Completa tus datos</p>
                <div className="inputs">
                    <Input
                        name='first_name'
                        type='text'
                        placeholder='Nombre'
                        onChange={e => console.log(e.target.value)}
                        Icon={ImUser}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='last_name'
                        type='text'
                        placeholder='Apellido'
                        onChange={e => console.log(e.target.value)}
                        Icon={ImUser}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='identification'
                        type='text'
                        placeholder='C.I'
                        onChange={e => console.log(e.target.value)}
                        Icon={HiIdentification}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='email'
                        type='email'
                        placeholder='Correo Electrónico'
                        onChange={e => console.log(e.target.value)}
                        Icon={HiIdentification}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='password'
                        type='text'
                        placeholder='Contraseña'
                        onChange={e => console.log(e.target.value)}
                        Icon={TiLockClosed}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='last_name'
                        type='text'
                        placeholder='Confirmar'
                        onChange={e => console.log(e.target.value)}
                        Icon={TiLockClosed}
                        width='250px'
                        left='20px'
                    />

                    <label className='checkbox'><input type="checkbox" id="cbox1" value="first_checkbox" /> Acepto términos y condiciones</label>
                </div>
            </form>
            <div className="content-buttons-register">

                    <button className='login'>Aceptar</button>
                    <button className='buyer' onClick={() => navigate('/selected-buyer-seller')}>Cancelar</button>
            </div>
        </div>
    )
}

export default BuyerForm