import React from 'react';
import './Home.css';
import Products from './Products';

function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
                alt=""
            />
            <div className="home__row">
                <Products
                    id="12321"
                    title="aaaaa aaaaaa"
                    price={11.95}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2020/GW/Testing_186x116._SY116_CB406506816_.jpg"
                />
                <Products
                    id="12322"
                    title="bbbbb  bbbbbb"
                    price={15.95}
                    rating={3}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-1_186x116._SY116_CB430773131_.jpg"
                />
            </div>
            <div className="home__row">
                <Products
                    id="12323"
                    title="ccc cccc"
                    price={32}
                    rating={1}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg"
                />
                <Products
                    id="12324"
                    title="ddddd ddddd"
                    price={111.50}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
                />
                <Products
                    id="12325"
                    title="eeeee eeee"
                    price={400.95}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41c2gS6Z+LL.__AC_SY200_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
