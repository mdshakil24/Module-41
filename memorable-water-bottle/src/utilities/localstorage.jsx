

// const saveCartToLS = (cart) => {
//     const cartStringified = JSON.stringify(cart);
//     localStorage.setItem('cart',cartStringified);

//     localStorage.setItem('cart',JSON.stringify(cart));
// }

// const getStoreCart = () => {
//     const storeCartString = localStorage.getItem('cart');
//     if(storeCartString) {
//         return JSON.parse(storeCartString);
//     }
//     return [];
// }

// const addToLS = (bottle) => {
//     const 

//     const addItem = localStorage.setItem('cart', bottle); 
// }

// const getStoreData = () => {
//     const getCartData = localStorage.getItem('cart');
//     if(getCartData) {
//         return JSON.parse(getCartData);
//     }
//     return [];
// }

// const addCartToLS = (id) => {
//     const getCart = getStoreData();
//     getCart.push(id);

//     // save to local storage
//     localStorage.setItem('cart',JSON.stringify(getCart));
// }

// Get  data from Local Storage
const getStoreCartData = () => {
    const getCartData = localStorage.getItem('cart');
    if(getCartData) {
        return JSON.parse(getCartData);
    }
    return [];
}

// Add or Save Cart Data to Local Storage
const addCartDataToLS = (cartDataId) => {
    const getData = getStoreCartData();
    getData.push(cartDataId);

    // save to local storage 
    // localStorage.setItem('cart', JSON.stringify(getData)); 

    // or 
    saveCartData(getData);

}

// or you can use function to save the data 
const saveCartData = (cartData) => {
    const cartDataStringified = JSON.stringify(cartData);
    localStorage.setItem('cart',cartDataStringified);
}

// Remove From Local Storage

const removeFromLs = (id) => {
    const getLsData = getStoreCartData();
    
    const remaing = getLsData.filter(lsId => lsId !== id);

    saveCartData(remaing);

}
removeFromLs()
export {getStoreCartData,addCartDataToLS,removeFromLs};