import { faArrowRight, faEraser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Input } from 'reactstrap'
const SharedFields = () => {
    return (
        <div className='mb-4'>
            <div className='display__int'>
                <h1>PB</h1>
                <p>Capacidad de peso disponible: <strong>800kg</strong></p>
            </div>
            <form className='form__int'>
                <label>Ingrese por favor el piso al que se dirige</label>
                <Input type="number" placeholder='Piso'/>
                <div className='form__buttons-box align-items-center'>
                    <Button color='danger' className='btn-b col-8 col-md-3'>
                        <FontAwesomeIcon icon={faEraser} />&nbsp; Borrar
                    </Button>
                    <Button color='primary' className='btn-a mb-2 col-12 col-md-7'>
                        <FontAwesomeIcon icon={faArrowRight} />
                        &nbsp; Enviar
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SharedFields