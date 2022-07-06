import React from 'react'
import { useSelector } from 'react-redux'
import { BiWorld } from 'react-icons/bi'
import { HiIdentification } from 'react-icons/hi'
import { ImUser } from 'react-icons/im'
import { BsFillTelephoneFill } from 'react-icons/bs'
import Input from '../../../components/atoms/Input/Input'
import Select from '../../../components/atoms/Select/Select'
import './styles.css'

const DataUser = ({ formik }) => {
    const { cities } = useSelector(state => state.ubications);

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
                        placeholder='Correo Electrónico'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        formik={formik}
                        Icon={HiIdentification}
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

                    <Select
                        name='ubication'
                        formik={formik}
                        value={formik.values.ubication}
                        selectBorder
                        Icon={BiWorld}
                        onChange={formik.handleChange}
                        options={cities}
                    />

                </div>
            </form>
        </div>
    )
}

export default DataUser