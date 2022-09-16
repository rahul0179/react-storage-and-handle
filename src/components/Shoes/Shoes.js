
import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 5;
    const second = 30
    const total = multiply(first, second)
    return (
        <div>
            <h3>This is shoes compo</h3>
            <h3>Quentity:{total}</h3>

        </div>
    );
};

export default Shoes;