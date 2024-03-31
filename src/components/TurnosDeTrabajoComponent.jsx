import React from 'react'
import { Button, Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/ancho.css"
import ServiciosSolicitados from './ServiciosSolicitados'

const TurnosDeTrabajoComponent = () => {

    const dummyData = [
        {
            "id": 1,
            "fechaYHora": "21-3-2023 21:40",
            "patente": "ASS291",
            "nombre": "Jose",
            "apellido": "Gonzales",
            "servicios": [
                {
                    "id": 1,
                    "servicio": "Servicio de lavado",
                    "categoriaLavado": "BASICO",
                    "precio": 300
                },
                {
                    "id": 2,
                    "servicio": "Servicio de cambio de aceite y filtro",
                    "categoriaEficacia": "ALTO_RENDIMIENTO",
                    "motor": "NAFTEROS",
                    "precio": 1350
                },
                {
                    "id": 3,
                    "servicio": "Servicio de alineacion y balanceo",
                    "incluyeCambiosCubiertas": 1,
                    "precio": 900
                }
            ],
            "premium": 1,
            "precioTotal": 2550 
        },
        {
            "id": 2,
            "fechaYHora": "22-3-2023 10:30",
            "patente": "ABC123",
            "nombre": "María",
            "apellido": "López",
            "servicios": [
                {
                    "id": 1,
                    "servicio": "Servicio de lavado",
                    "categoriaLavado": "COMPLETO",
                    "precio": 500
                },
                {
                    "id": 2,
                    "servicio": "Servicio de cambio de aceite y filtro",
                    "categoriaEficacia": "ALTO_RENDIMIENTO",
                    "motor": "DISEL",
                    "precio": 1300
                },
                {
                    "id": 3,
                    "servicio": "Servicio de alineacion y balanceo",
                    "incluyeCambiosCubiertas": 0,
                    "precio": 400
                }
            ],
            "premium": 0,
            "precioTotal": 2200 
        },
        {
            "id": 3,
            "fechaYHora": "23-3-2023 15:20",
            "patente": "XYZ789",
            "nombre": "Juan",
            "apellido": "Martínez",
            "servicios": [
                {
                    "id": 1,
                    "servicio": "Servicio de lavado",
                    "categoriaLavado": "PREMIUM",
                    "precio": 800
                },
                {
                    "id": 2,
                    "servicio": "Servicio de cambio de aceite y filtro",
                    "categoriaEficacia": "BASICO",
                    "motor": "NAFTEROS",
                    "precio": 1050
                }
            ],
            "premium": 1,
            "precioTotal": 1850 
        },
        {
            "id": 4,
            "fechaYHora": "24-3-2023 09:00",
            "patente": "DEF456",
            "nombre": "Ana",
            "apellido": "Rodríguez",
            "servicios": [
                {
                    "id": 1,
                    "servicio": "Servicio de lavado",
                    "categoriaLavado": "BASICO",
                    "precio": 300
                },
                {
                    "id": 2,
                    "servicio": "Servicio de cambio de aceite y filtro",
                    "categoriaEficacia": "ALTO_RENDIMIENTO",
                    "motor": "DISEL",
                    "precio": 1300
                },
                {
                    "id": 3,
                    "servicio": "Servicio de alineacion y balanceo",
                    "incluyeCambiosCubiertas": 1,
                    "precio": 900
                }
            ],
            "premium": 0,
            "precioTotal": 2500 
        },
        {
            "id": 5,
            "fechaYHora": "25-3-2023 14:15",
            "patente": "GHI789",
            "nombre": "Pedro",
            "apellido": "López",
            "servicios": [
                {
                    "id": 1,
                    "servicio": "Servicio de lavado",
                    "categoriaLavado": "COMPLETO",
                    "precio": 500
                },
                {
                    "id": 2,
                    "servicio": "Servicio de cambio de aceite y filtro",
                    "categoriaEficacia": "BASICO",
                    "motor": "DISEL",
                    "precio": 1050
                },
                {
                    "id": 3,
                    "servicio": "Servicio de alineacion y balanceo",
                    "incluyeCambiosCubiertas": 0,
                    "precio": 400
                }
            ],
            "premium": 0,
            "precioTotal": 1950 
        },
        {
            "id": 6,
            "fechaYHora": "26-3-2023 11:30",
            "patente": "JKL123",
            "nombre": "Laura",
            "apellido": "Fernández",
            "servicios": [
                {
                    "id": 1,
                    "servicio": "Servicio de lavado",
                    "categoriaLavado": "PREMIUM",
                    "precio": 800
                },
                {
                    "id": 2,
                    "servicio": "Servicio de cambio de aceite y filtro",
                    "categoriaEficacia": "ALTO_RENDIMIENTO",
                    "motor": "NAFTEROS",
                    "precio": 1350
                }
            ],
            "premium": 1,
            "precioTotal": 2150 
        },
        {
            "id": 7,
            "fechaYHora": "27-3-2023 08:45",
            "patente": "MNO456",
            "nombre": "Carlos",
            "apellido": "Gómez",
            "servicios": [
                {
                    "id": 1,
                    "servicio": "Servicio de lavado",
                    "categoriaLavado": "BASICO",
                    "precio": 300
                },
                {
                    "id": 2,
                    "servicio": "Servicio de cambio de aceite y filtro",
                    "categoriaEficacia": "BASICO",
                    "motor": "NAFTEROS",
                    "precio": 1050
                }
            ],
            "premium": 0,
            "precioTotal": 1350 
        },
        {
            "id": 8,
            "fechaYHora": "28-3-2023 13:20",
            "patente": "PQR789",
            "nombre": "Sofía",
            "apellido": "Díaz",
            "servicios": [
                {
                    "id": 1,
                    "servicio": "Servicio de lavado",
                    "categoriaLavado": "COMPLETO",
                    "precio": 500
                },
                {
                    "id": 2,
                    "servicio": "Servicio de cambio de aceite y filtro",
                    "categoriaEficacia": "ALTO_RENDIMIENTO",
                    "motor": "DISEL",
                    "precio": 1300
                },
                {
                    "id": 3,
                    "servicio": "Servicio de alineacion y balanceo",
                    "incluyeCambiosCubiertas": 1,
                    "precio": 900
                }
            ],
            "premium": 1,
            "precioTotal": 2700 
        },
        {
            "id": 9,
            "fechaYHora": "29-3-2023 10:10",
            "patente": "STU456",
            "nombre": "Diego",
            "apellido": "Pérez",
            "servicios": [
                {
                    "id": 1,
                    "servicio": "Servicio de lavado",
                    "categoriaLavado": "BASICO",
                    "precio": 300
                },
                {
                    "id": 2,
                    "servicio": "Servicio de cambio de aceite y filtro",
                    "categoriaEficacia": "BASICO",
                    "motor": "DISEL",
                    "precio": 1050
                },
                {
                    "id": 3,
                    "servicio": "Servicio de alineacion y balanceo",
                    "incluyeCambiosCubiertas": 0,
                    "precio": 400
                }
            ],
            "premium": 0,
            "precioTotal": 1750 
        },
        {
            "id": 10,
            "fechaYHora": "30-3-2023 16:50",
            "patente": "VWX789",
            "nombre": "Valentina",
            "apellido": "Romero",
            "servicios": [
                {
                    "id": 1,
                    "servicio": "Servicio de lavado",
                    "categoriaLavado": "COMPLETO",
                    "precio": 500
                },
                {
                    "id": 2,
                    "servicio": "Servicio de cambio de aceite y filtro",
                    "categoriaEficacia": "BASICO",
                    "motor": "NAFTEROS",
                    "precio": 1050
                },
                {
                    "id": 3,
                    "servicio": "Servicio de alineacion y balanceo",
                    "incluyeCambiosCubiertas": 1,
                    "precio": 900
                }
            ],
            "premium": 1,
            "precioTotal": 2450 
        }
    ];
    

    return (
        <div>
            <h2 className='text-center mt-3'>Lista de turnos</h2>
            <Table className='ancho align-middle text-center mx-auto mt-5'striped bordered hover responsive size='lg'>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Fecha y Hora
                        </th>
                        <th>
                            Nombre y Apellido
                        </th>
                        <th>
                            Patente de vehiculo
                        </th>
                        <th>Servicios solicitados</th>
                        <th>
                            Premium
                        </th>
                        <th>
                            Precio Total
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dummyData.map(turno => 
                            <tr key={turno.id}>
                                <td>{turno.id}</td>
                                <td>{turno.fechaYHora}</td>
                                <td>{turno.nombre + " " + turno.apellido}</td>
                                <td>{turno.patente}</td>
                                <td><ServiciosSolicitados /></td>
                                <td>{turno.premium}</td>
                                <td>{turno.precioTotal}</td>
                            </tr>)
                    }
                </tbody>
            </Table>

        </div>
    )
}

export default TurnosDeTrabajoComponent