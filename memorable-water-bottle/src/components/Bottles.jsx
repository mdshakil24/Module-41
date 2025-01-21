import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import { addCartDataToLS, getStoreCartData,removeFromLs } from "../utilities/localstorage";
import './Bottles.css';
import Cart from "./Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data));
    }, []);

    // load cart data from local storage 
    useEffect(() => {
        // console.log('called the useEffect', bottles.length);
        if(bottles.length > 0) {
            const getId = getStoreCartData();
            // console.log(getId,bottles)
            const getFromLs = [];
            for(const id of getId) {
                // console.log(id)
                const bottleDetails = bottles.find(bottle => bottle.id === id);
                // console.log(bottleDetails)
                if(bottleDetails) {
                    getFromLs.push(bottleDetails);
                }
            }
            setCart(getFromLs)
        }
    },[bottles])


    // Add Cart Data to Cart and Local Storage
    const addToCart = (bottle) => {
        // add to cart 
        const addToCart = [...cart,bottle];
        setCart(addToCart);

        // add to local storage
        addCartDataToLS(bottle.id);
    }

    // Remove Cart From Visual and Local Storage

    const removeCart = (cartBottle) => {
        // Remove From Visual Cart
        const remaingCart = cart.filter(bottle => bottle.id !== cartBottle.id);
        setCart(remaingCart)
        
        // Remove From Local Storage
        removeFromLs(cartBottle.id)

    }


    return (
        <div>
            <h3>Total Bottles: {bottles.length}</h3>

            <Cart removeCart={removeCart} getCart={cart}></Cart>

            {/* {console.log(cart)} */}




            <div className="bottle-wraper">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} addToCart={addToCart} />)
                }
            </div>




        </div>
    );
};

export default Bottles;