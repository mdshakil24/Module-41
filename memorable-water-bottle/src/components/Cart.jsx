import './Cart.css'
import PropTypes from 'prop-types';

const Cart = ({ getCart,removeCart }) => {



    return (
        <div>
            <h3>Cart: {getCart.length}</h3>
            <div className='bottle-cart-container'>
                {getCart.map((cartBottle,idx) => <div className='single-item' key={idx}>
                    <img src={cartBottle.img}></img>
                    <button onClick={() => removeCart(cartBottle)}>Remove</button>
                </div>)}
                
            </div>

        </div>
    );
};

export default Cart;

Cart.propTypes = {
    getCart: PropTypes.array.isRequired,
    removeCart: PropTypes.func.isRequired
}