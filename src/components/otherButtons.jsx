import { faArrowLeft, faArrowRight, faBell, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'reactstrap'

const OtherButtons = () => {
    return(
        <div className='d-md-flex col-12 justify-content-around pt-3'>
            <div className="container__other-buttons col-md-5">
                <Button outline color='warning'  className='mb-3 col-12'>
                    <FontAwesomeIcon icon ={faArrowLeft} />
                    &nbsp;
                    <FontAwesomeIcon icon ={faArrowRight} />
                </Button>
                <Button outline color='warning' className='mb-3 col-12'>
                    <FontAwesomeIcon icon ={faArrowRight} />
                    &nbsp;
                    <FontAwesomeIcon icon ={faArrowLeft} />
                </Button>
            </div>
            <div className="container__other-buttons col-md-5">
                <Button outline color='warning' className='mb-3 col-12'>
                    <FontAwesomeIcon icon ={faLightbulb} />
                </Button>
                <Button color='danger'  className='mb-3 col-12'>
                    <FontAwesomeIcon icon ={faBell} />
                </Button>
            </div>
        </div>
    )
}

export default OtherButtons