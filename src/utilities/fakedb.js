//use local storage to manage cart data
const addTODb = id => {

    let shoppingCart = {};


    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }







    //add quantity

    const quantity = shoppingCart[id];
    console.log(quantity)
    if (quantity) {


        const newQuantity = +quantity + 1;

        shoppingCart[id] = newQuantity;
        console.log(shoppingCart[id])
    }
    else {
        /*  console.log('new item')
         localStorage.setItem(id, 1) */
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))



}


const removeToDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            delete shoppingCart[id];

            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }

    }

}


const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}
export { addTODb, removeToDb, deleteShoppingCart }