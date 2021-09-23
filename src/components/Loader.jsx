import React from 'react'
import Loading from '../images/giphy.gif'
const Loader = () => {
    return (
        <div className='loader'>
            <img src={Loading} alt='loading...'/>
        </div>
    )
}

export default Loader
