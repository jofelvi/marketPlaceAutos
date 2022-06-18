import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

const SelectedBuyerSeller = () => {
    const naviagate = useNavigate();
    return (
        <div className="content-actions">
            <form>
                <div className="content-buttons">
                    <p className='title'>Registrarse</p>
                    <button className='buyer' onClick={() => naviagate('/register-buyer')}>Comprador</button>
                    <button className='seller' onClick={() => naviagate('/register-seller')}>Agencia</button>
                </div>
                <button className='buyer' onClick={() => naviagate('/login')}>Atrás</button>
            </form>
        </div>
    )
}

export default SelectedBuyerSeller