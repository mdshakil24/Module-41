import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('Bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data));
    }, []);

    const handleAddToCart = bottle => {

        const newCart = [...cart, bottle];
        setCart(newCart);

        // console.log(bottle);
    }

    return (
        <div>
            <h2>Bottle Available: {bottles.length}</h2>
            <h2>Cart:  {cart.length}</h2>
            <div className="bottle-container">
                {
                    bottles.map((bottle) => <Bottle
                        key={bottle.id}
                        bottlee={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
            </div>
        </div>


    )

}

export default Bottles;