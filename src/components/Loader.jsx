import React from 'react'
import Loading from '../images/giphy.gif'
const Loader = () => {
    return (
        <div className='loader'>
            <img  src={Loading} alt='loading...' width='200px' height='200px' style={{
                borderRadius:'50%'
            }}/>
        </div>
    )
}

export default Loader
