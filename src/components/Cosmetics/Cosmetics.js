import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
/* import { add } from '../../utilities/calculate';
//import add from '../../utilities/calculate'; */

const Cosmetics = () => {
    /* const first = 55;
    const second = 60;
    const total = add(first, second) */
    /*  
     normal style data lode
     const cosmetics = [
         { id: 1, name: 'Alta', price: 200 },
         { id: 2, name: 'Ktla', price: 900 },
         { id: 3, name: 'Palish', price: 400 },
         { id: 4, name: 'Malish', price: 300 },
         { id: 5, name: 'Rui', price: 500 },
         { id: 6, name: 'Magur', price: 600 },
     ] */

    const [cosmetics, setCosmetics] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(jData => setCosmetics(jData))
    }
        , [])

    return (
        <div>
            <h1>Welcome to my Cosmetics store !</h1>
            {/*   <p>Total:{total}</p> */}
            {
                cosmetics.map(cosmatic => <Cosmetic key={cosmatic.id} cosmatic={cosmatic}></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;