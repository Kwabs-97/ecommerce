/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../Styles/Home.module.css";
import Carousel from "../Components/Carousel";
import ProductItem from "../Components/ProductItem";

import img1 from "../assets/images/image-product-1.jpg";
import img2 from "../assets/images/image-product-2.jpg";
import img3 from "../assets/images/image-product-3.jpg";
import img4 from "../assets/images/image-product-4.jpg";

import { productsData } from "../Data/Products";
import Cart from "../Cart/Cart";

const Home = (props) => {
  const showcart = useSelector((state) => state.uiReducer.cartIsVisible);

  const imgs = [
    { id: 0, imgSrc: img1 },
    { id: 1, imgSrc: img2 },
    { id: 2, imgSrc: img3 },
    { id: 3, imgSrc: img4 },
  ];

  const [sliderData, setSliderData] = useState(imgs[0]);

  const handleClick = (index) => {
    console.log(index);
    const slider = imgs[index];
    setSliderData(slider);
  };

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        {showcart && <Cart />}

        <div className={styles.imgContainer}>
          <Carousel />
          <section className={styles.subImg}></section>
        </div>

        <div className={styles.bigCarousel}>
          <img src={sliderData.imgSrc} height="200" width="200" />

          <div className={styles.multiImgs}>
            {imgs.map((img, index) => (
              <img
                src={img.imgSrc}
                key={imgs.id}
                height="50"
                width="50"
                onClick={() => handleClick(index)}
                className={styles.thumbnail}
              />
            ))}
          </div>
        </div>
        {productsData.map((product) => (
          <ProductItem
            name={product.name}
            key={product.id}
            price={product.price}
            discount={product.discount}
            discountPrice={product.discountPrice}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
