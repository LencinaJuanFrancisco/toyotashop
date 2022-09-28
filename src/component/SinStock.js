import React from 'react'
import {Link} from 'react-router-dom'

function SinStock() {
  return (
    <div className='mt-5 justify-content-center'>
        <p className=' text-danger p-3 fw-bold '>Sin Stock disponible</p>
        <Link to='/' ><button className='btn  btn-outline-secondary'>volvere</button></Link>
    </div>
  )
}

export default SinStock