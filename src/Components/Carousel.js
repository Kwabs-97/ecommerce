/** @format */

import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import product1 from "../assets/images/image-product-1.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";

import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

import styles from "../Styles/Carousel.module.css";

const data = [
  {
    id: 1,
    image: product1,
    alt: "image-product-1",
  },
  {
    id: 2,
    image: product2,
    alt: "image-product-2",
  },
  {
    id: 3,
    image: product3,
    alt: "image-product-3",
  },
];
const Carousel = () => {
  const [slideCount, setSlideCount] = useState(0);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  // const nextSlide = () => {
  //   setSlideCount(slideCount === data.length - 1 ? 0 : slideCount + 1);
  // };
  // const previousSlide = () => {
  //   setSlideCount(slideCount === 0 ? data.length - 1 : slideCount - 1);
  // };
  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {/* <BsFillArrowLeftCircleFill
          className={`${styles.arrow} ${styles.leftArrow}`}
          onClick={previousSlide}
        /> */}
        {/* {data.map((slide, index) => {
          return (
            <img
              src={slide.image}
              key={index}
              height="250"
              className={slideCount === index ? styles.slide : styles.hidden}
            />
          );
        })} */}
        {/* <BsFillArrowRightCircleFill
          className={`${styles.arrow} ${styles.rightArrow}`}
          onClick={nextSlide}
        /> */}

        <div className={styles.embla__slide}>
          <img src={product1} alt="" />
        </div>
        <div className={styles.embla__slide}>
          <img src={product2} alt="" />
        </div>
        <div className={styles.embla__slide}>
          <img src={product3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
