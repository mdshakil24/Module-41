import './Bottle.css'

const Bottle = ({bottle,addToCart}) => {

    const {name,price,ratings,img} = bottle;

    return (

        <div className='single-bottle-item'>
            <img src="{img}" alt="BottleImage" />
            <h3>Name: <span>{name}</span></h3>
            <h3>Price: <span>{price}</span></h3>
            <h3>Ratings: <span>{ratings} Star</span></h3>
            <button onClick={() => addToCart(bottle)}>Purchase</button>
        </div>

    )
       
}

export default Bottle;