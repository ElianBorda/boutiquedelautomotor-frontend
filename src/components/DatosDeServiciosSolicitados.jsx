import React from 'react'
import { Table } from 'react-bootstrap';

const DatosDeServiciosSolicitados = (props) => {
    const servicios = props.servicios
    const nombre1 = "Servicio de Cambio de Aceite y Filtro"
    const nombre2 = "Servicio de Alineacion y Balanceo"
    const nombre3 = "Servicio de lavado"
  
    return (
      <Table borderLess className='align-middle text-center mx-auto'>
            <tbody>
              {servicios?.map(servicio => {
                  if (servicio.nombreServicio == nombre1){
                    return(<React.Fragment key={servicio.id}>
                              <tr key={servicio.id}>
                                <td rowSpan={2} >{servicio.nombreServicio}</td>
                                <td>{servicio.categoria}</td>
                                <td rowSpan={2}>{servicio.precio}</td>
                              </tr>
                              <tr>
                                  <td>{servicio.motor}</td>
                                  
                              </tr>
                            </React.Fragment>)
                  } else if (servicio.nombreServicio == nombre2){
                    return(<React.Fragment key={servicio.id}>
                              <tr key={servicio.id}>
                                <td rowSpan={2} >{servicio.nombreServicio}</td>
                                <td>{String(servicio.incluyeCambioDeCubierta) == "true" ? "Incluye cambios de cubierta" : "No incluye cambios de cubierta"}</td>
                                <td rowSpan={2}>{servicio.precio}</td>
                              </tr>
                            </React.Fragment>)
                  } else if (servicio.nombreServicio == nombre3){
                    return(<React.Fragment key={servicio.id}>
                              <tr key={servicio.id}>
                                <td rowSpan={2} >{servicio.nombreServicio}</td>
                                <td>{servicio.categoriaLavado}</td>
                                <td rowSpan={2}>{servicio.precio}</td>
                              </tr>
                            </React.Fragment>)
                }})}
                <tr>
                  <td className="p-4">Precio total</td>
                  <td>{props.precioTotal}</td>
                </tr>
          </tbody>
    </Table>
  )
}

export default DatosDeServiciosSolicitados