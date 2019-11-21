import React from 'react'

const Spinner = () => {
    return (
    <div className='m-5 d-flex justify-content-center'>
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>)
}

export default Spinner