import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, rating, price }) {
    const [,dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

    return (
        <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>&#x20B9;</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <StarIcon className="product__ratingstar"/>
                    ))
                }
            </div>
        </div>
            <img 
            className="product__image"
            src={image}
            alt=""/>
            <button onClick={addToBasket} className="product__button">Add to cart</button>
        </div>

    )
}

export default Product
