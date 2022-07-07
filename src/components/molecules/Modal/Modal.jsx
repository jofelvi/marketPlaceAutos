import { Modal as ModalAntd } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { closeErrorModal, closeInfoModal, closeSuccessModal } from '../../../store/notifications/actions';
import './ModalStyles.css'

const Modal = () => {
    const dispatch = useDispatch();
    const { info, showModal } = useSelector(state => state.notifications);

    const handleCancel = () => {
        if (info.type === 'success') {
            dispatch(closeSuccessModal())
        } else if (info.type === 'info') {
            dispatch(closeInfoModal())
        } if (info.type === 'error') {
            dispatch(closeErrorModal())
        }
    }

    return (
        <ModalAntd visible={showModal} onCancel={handleCancel} footer={null}>
            <h2>{info.title}</h2>
            {info.image && <img src={info.image} alt={info.title} />}

            <div className="info-inputs">
                {info.inputs && info.inputs.map((input) => (
                    <div className="content-data">
                        <label>{input.label}:</label>
                        <p>{input.value}</p>
                    </div>
                ))}
            </div>
        </ModalAntd>
    );
};

export default Modal;