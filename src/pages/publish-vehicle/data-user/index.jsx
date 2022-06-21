import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { HiIdentification } from 'react-icons/hi'
import { ImUser } from 'react-icons/im'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Input from '../../../components/atoms/Input'
import useOnChange from '../../../hooks/useOnChange'
import './styles.css'
import { initialValuesPublishVehicle, validatePublishVehicle } from '../../../utils/publish-vehicle/validatePublishVehicle'

const DataUser = ({ formik }) => {
    return (
        <div className='content-form-data'>
            <form className='form'>
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

                    <Input
                        name='phone'
                        type='phone'
                        placeholder='Teléfono'
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        formik={formik}
                        Icon={BsFillTelephoneFill}
                        width='250px'
                        left='20px'
                    />

                </div>
            </form>
        </div>
    )
}

export default DataUser