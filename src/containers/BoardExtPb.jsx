import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
const BoardExtPb = () => {
    return(
        <div className='container __ext--pb'>
            <div className='button__pb'>
                <Link to='/int'>
                    <FontAwesomeIcon icon={faChevronUp} className='icon__pb'/>
                </Link>
            </div>
        </div>
    )
}

export default BoardExtPb