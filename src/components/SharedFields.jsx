import { faArrowRight, faEraser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SharedFields = () => {
    return (
        <>
            <div className='display__int'></div>
            <form className='form__int'>
                <label>Ingrese por favor el piso al que se dirige</label>
                <input type="number" placeholder='Piso'/>
                <div>
                    <button className='danger'>
                        <FontAwesomeIcon icon={faEraser} /> Borrar
                    </button>
                    <button className='success'>
                        <FontAwesomeIcon icon={faArrowRight} />
                        Enviar
                    </button>
                </div>
            </form>
        </>
    )
}

export default SharedFields