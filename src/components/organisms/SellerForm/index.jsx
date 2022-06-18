import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HiIdentification } from 'react-icons/hi'
import { ImUser } from 'react-icons/im'
import { TiLockClosed } from 'react-icons/ti'
import { BiWorld } from 'react-icons/bi'
import Input from '../../atoms/Input'
import './styles.css'

const SellerForm = () => {
    const navigate = useNavigate();
    return (
        <div className='content-seller-form'>
            <form className='form'>
                <p className='title'>Completa tus datos</p>
                <div className="inputs">
                    <Input
                        name='business_name'
                        type='text'
                        placeholder='Representación legal'
                        onChange={e => console.log(e.target.value)}
                        Icon={ImUser}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='phone'
                        type='phone'
                        placeholder='Teléfono'
                        onChange={e => console.log(e.target.value)}
                        Icon={ImUser}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='identification'
                        type='text'
                        placeholder='R.I.F'
                        onChange={e => console.log(e.target.value)}
                        Icon={HiIdentification}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='social_name'
                        type='text'
                        placeholder='Razón social'
                        onChange={e => console.log(e.target.value)}
                        Icon={ImUser}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='state'
                        type='text'
                        placeholder='Estado'
                        onChange={e => console.log(e.target.value)}
                        Icon={HiIdentification}
                        width='250px'
                        left='20px'
                    />

                    <Input
                        name='email'
                        type='email'
                        placeholder='Correo electrónico'
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

                    <Input
                        name='ubication'
                        type='text'
                        placeholder='Ubicación'
                        onChange={e => console.log(e.target.value)}
                        Icon={BiWorld}
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

export default SellerForm