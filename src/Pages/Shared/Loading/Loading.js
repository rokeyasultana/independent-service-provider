import React from 'react';
import { Spinner } from 'react-bootstrap';

const loading = () => {
    return (
        <div>
            <Spinner style={{height:'200px'}}
            className='w-100 d-flex justify-content-center align-items-center'
            animation="border" variant="primary" /> 
        </div>
    );
};

export default loading;