import React from 'react';
import { addTODb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    //console.log(props)
    const { name, price, id } = props.cosmatic

    const addToCart = (id) => {

        addTODb(id)
    }
    //const addToCartWithParam = () => addToCart(id);

    return (
        <div className='product'>
            <h1> Name:{name}</h1>
            <h3>Price:{price}</h3>
            <p><small>it has id: {id}</small></p>
            {/* <button onClick={addToCartWithParam}>Add to cart</button> */}
            <button onClick={() => addToCart(id)}>Add to cart:Short cart</button>


        </div>
    );
};

export default Cosmetic;