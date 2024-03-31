import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import DatosDeServiciosSolicitados from './DatosDeServiciosSolicitados';

const ServiciosSolicitados = ({servicios, precioTotal}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Ver servicios y precios
            </Button>

            <Modal show={show} onHide={handleClose} size='xl'>
                <Modal.Header closeButton>
                <Modal.Title>Servicios y precios</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DatosDeServiciosSolicitados servicios={servicios} precioTotal={precioTotal}/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ServiciosSolicitados