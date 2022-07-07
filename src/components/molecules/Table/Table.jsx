import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'
import { useSelector } from 'react-redux'
import './Table.css'

const Table = () => {
    const { publications } = useSelector(state => state.publications);

    return (
        <table>
            <tbody>
                {publications.map((pub, key) => (
                    <tr key={key}>
                        <td>
                            <img className='img-td' src={pub.image} alt={pub.vehicle} />
                        </td>
                        <td>
                            <div className='content-info-vehicle'>
                                <p>#{pub.id}</p>
                                <p>{pub.vehicle}</p>
                                <p>{pub.units} unidades</p>
                            </div>
                        </td>
                        <td>
                            <div className="min-table">
                                <div className="col">
                                    <label>Fecha</label>
                                    <p>{pub.date}</p>
                                </div>
                                <div className="col">
                                    <label>Precio</label>
                                    <p>$ {pub.price}</p>
                                </div>
                                <div className="col">
                                    <label>Visitas</label>
                                    <p>{pub.views}</p>
                                </div>
                                <div className="col">
                                    <label>Estado</label>
                                    <p>{pub.status}</p>
                                </div>
                                <div className="col">
                                    <label>Editar</label>
                                    <p><FiEdit size={20} /></p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="button-edit">
                                <MdDeleteOutline size={20} />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table