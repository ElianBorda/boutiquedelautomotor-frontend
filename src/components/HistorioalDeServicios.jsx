import React from 'react'
import { Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/ancho.css"
import { useFetch } from '../function/useFetch'

const HistorioalDeServicios = () => {
    const { data } = useFetch("http://localhost:8080/servicio")

    return (
        <div>
            <h2 className='text-center mt-3'>Historial de servicios</h2>
            <Table className='ancho align-middle text-center mx-auto mt-5'striped bordered hover responsive size='lg'>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Nombre de servicio
                        </th>
                        <th>
                            Cliente que lo solicito
                        </th>
                        <th>
                            Vehiculo
                        </th>
                        <th>
                            Precio
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map(servicio => 
                            <tr key={servicio.id}>
                                <td>{servicio.id}</td>
                                <td>{servicio.nombreServicio}</td>
                                <td>{servicio.turno.cliente.nombre + " " + servicio.turno.cliente.apellido}</td>
                                <td>{servicio.turno.cliente.patenteVehiculo}</td>
                                <td>{servicio.precio}</td>
                            </tr>)
                            
                    }
                </tbody>
            </Table>

        </div>
    )
}

export default HistorioalDeServicios