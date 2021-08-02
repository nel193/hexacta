import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
const BoardExtPb = () => {
    return(
        <div className='container __ext--pb'>
            <Link to='/int'>
            <div className='button__pb'>
                    <FontAwesomeIcon icon={faChevronUp} className='icon__pb'/>
            </div>
            </Link>
        </div>
    )
}

export default BoardExtPb