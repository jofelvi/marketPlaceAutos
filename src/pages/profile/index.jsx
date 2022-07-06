import React, { useEffect, useState } from 'react'
import { ImUser } from 'react-icons/im'
import { TiLockClosed } from 'react-icons/ti'
import { HiIdentification } from 'react-icons/hi'
import { FiEdit } from 'react-icons/fi'
import { MdOutlineClose } from 'react-icons/md'
import { BiWorld } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../components/atoms/Input/Input'
import useOnChange from '../../hooks/useOnChange';
import { initialValuesBuyer, validateBuyer } from '../../utils/register/validateRegister';
import Select from '../../components/atoms/Select/Select'
import { getCities } from '../../store/ubications/action'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { getInfoUser, setInfoProfile } from '../../store/auth/actions'
import './styles.css'

const Profile = () => {
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();
    const { cities } = useSelector(state => state.ubications);
    const { profile } = useSelector(state => state.auth);
    
    const editProfile = (data) => {
        console.log(data);
        setFormData(data);

        formik.resetForm();
    }

    useEffect(() => {
        if(profile.id) return;

        dispatch(getInfoUser())
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        dispatch(getCities())
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        if(!profile.id) return;
        dispatch(setInfoProfile(formik))
        //eslint-disable-next-line
    }, [profile]);

    const { formik, setFormData } = useOnChange(initialValuesBuyer, validateBuyer, editProfile);
    return (
        <div className='content-profile'>
            <div className="content-avatar">
                {edit ? <MdOutlineClose size={20} onClick={() => setEdit(false)} /> : <FiEdit size={20} onClick={() => setEdit(true)} />}

                <img src="https://image.shutterstock.com/image-vector/auto-shop-sports-car-dealership-260nw-1307607703.jpg" />

                <p>{profile?.username}</p>
            </div>

            <div className="content-info-user">
                <p>Datos personales</p>

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
                        disabled={edit ? false : true}
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
                        disabled={edit ? false : true}
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
                        disabled={edit ? false : true}
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
                        disabled={edit ? false : true}
                    />

                    <Select
                        name='ubication'
                        formik={formik}
                        value={formik.values.ubication}
                        selectBorder
                        Icon={BiWorld}
                        onChange={formik.handleChange}
                        options={cities}
                        disabled={edit ? false : true}
                    />

                    <Input
                        name='phone'
                        type='text'
                        placeholder='Número de contacto'
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        formik={formik}
                        Icon={BsFillTelephoneFill}
                        width='250px'
                        left='20px'
                        disabled={edit ? false : true}
                    />

                    {edit &&
                        <>
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
                        </>
                    }

                </div>
            </div>
        </div>
    )
}

export default Profile