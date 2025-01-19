import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data));
    }, []);

    const addToCart = (bottle) => {
        console.log(bottle);
    }


    return (
        <div>
            <h3>Total Bottles: {bottles.length}</h3>
            <h3>Cart: {0}</h3>
            <div className="bottle-wraper">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} addToCart={addToCart} />)
                }
            </div>




        </div>
    );
};

export default Bottles;