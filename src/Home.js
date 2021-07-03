import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
            className="home__banner"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"
            alt=""
            />

            <div className="home__row">
                <Product 
                    id="1234321"
                    title="THE 5AM CLUB:Own your Morning, Elevate your life"
                    price={159}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71eijJe2ntL.jpg"
                />

                <Product 
                    id="4321234"
                    title="Amazon Echo (2nd Gen), Certified Refurbished, Black – Smart speaker with Alexa"
                    price={3199}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61eIoarXhsL._SL1000_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="5678765"
                    title="Call of Duty: Black Ops Cold War (PS4)"
                    price={4899}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81cYBaaAQKL._AC_UY436_QL65_.jpg"
                />

                <Product 
                    id="8765678"
                    title="Sony MDR-AS210 Active Sports Open-Ear Headphones (Black)"
                    price={999}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/51FofNVti2L._AC_UY436_QL65_.jpg"
                />

                <Product 
                    id="2345432"
                    title="New Apple iPhone 12 Mini (64GB) - (Product) RED"
                    price={61999}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71Sa8+9H3xL._AC_UL640_QL65_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="3456543"
                    title="LG UltraWide 34 Inch WFHD (2560 x 1080) IPS Display - HDR 10, AMD Free sync, sRGB 99%, Multitasking and Gaming Monitor - 34WL500"
                    price={26499}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71xMxbdxrsL._AC_UY436_QL65_.jpg"
                />
            </div>
            
        </div>
    )
}

export default Home
