import './Bottle.css'

const Bottle = ({bottlee,handleAddToCart}) => {

    const {name, img, price } = bottlee;

    // console.log(bottlee,img)

    
    return (
        <div className='single-bottle'>
            <h3>Bottle Name: <span>{name}</span></h3>
            <img src={img} alt="BottleImage" />
            <h3>Price: $ {price}</h3>
            <button onClick={() => handleAddToCart(bottlee)}>Purchase</button>
        </div>
    )
}

export default Bottle;