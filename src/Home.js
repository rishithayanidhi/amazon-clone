import React from "react";
import "./Home.css";
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
          alt="prime"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="495380942"
            title="Light Up Basketball - Glow in the Dark Basketball - Sports Gear Accessories Gifts for Boys 8-15+ Year Old - Kids, Teens Gift Ideas - Cool Teen Boy Toys Ages 8 9 10 11 12 13 14 15 Age Outdoor Teenage"
            price={212.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/819XtJfgt5L._AC_SX569_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="908293321"
            title="NZXT Kraken 280 RGB - RL-KR280-W1 - 280mm AIO CPU Liquid Cooler - Customizable 1.54 Square LCD Display for Images, Performance Metrics - High-Performance Pump - 2 x F140 RGB Core Fans - White"
            price={144.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/51HtavdQluL._AC_UY218_.jpg"
          />
          <Product
            id="9082933212"
            title="GEEKOM A8 AI Mini PC, AMD Ryzen 9 8945HS Mini Computers (up to 5.2GHz), 32GB DDR5 5600MHz RAM&2TB PCIe 4.0 SSD, Windows 11 Pro Mini Desktop, AMD Ryzen AI/Radeon 780M/WiFi 6E/BT5.2/USB4/8K/Quad Display"
            price={849}
            rating={5}
            image="https://m.media-amazon.com/images/I/61q4U9iK2WL._AC_SX425_.jpg"
          />
        </div>

      </div>
    </div>
    );
};

export default Home;