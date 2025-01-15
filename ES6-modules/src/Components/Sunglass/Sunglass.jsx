// import React from 'react';
import './Sunglass.css';
import Watch from "../Watch/Watch";
// import calculator from '../../Utils/calculate';

import {add,subtraction,dividedTwoNumberOnSuglassComponents as divide} from '../../Utils/calculate';



const Sunglass = ({watch}) => {

console.log(watch.id)

    // const {add,subtraction} = calculator;

    const first = 10;
    const second = 20;

    const output = add(first,second);

    const subt = subtraction(first,second);

    const vaag = divide(first,second);

    console.log(output,subt,vaag);


    return (
        <div>
            <Watch key={watch.id} watch={watch}></Watch>




            
        </div>
    );
};

export default Sunglass;