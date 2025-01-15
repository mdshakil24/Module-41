import React from 'react';
import './Watch.css'

const Watch = ({watch}) => {

    const {name,price} = watch;

    
    return (
        <div className='single-watch'>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
        </div>
    );
};

export default Watch;