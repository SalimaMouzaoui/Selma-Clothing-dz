import React from 'react';

import './collection-item.styles.scss';
//import test from '../../images/shop-img/hats/brown-brim.png'

const CollectionItem = ({ id, name, price, imageUrl}) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />

        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
)

export default CollectionItem;