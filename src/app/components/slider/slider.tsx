"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import style from "./slider.module.scss";

interface Photo {
  url: string;
  title: string;
}

interface SliderProps {
  photos: Photo[];
}

const Slider: React.FC<SliderProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<Photo>(photos[0]);
  const [isTransitioning, setTransitioning] = useState<boolean>(false);

  const previous = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentImage(photos[currentIndex]);
      setTransitioning(false);
    }, 300); 
  }, [currentIndex, photos]);

  return (
    <div className={style.slider}>
      <button onClick={previous}>{"<"}</button>
      <Image
        src={currentImage.url}
        width={1360}
        height={768}
        alt={currentImage.title}
        className={`${style.image} ${isTransitioning ? style["image-transition"] : ""}`}
      />
      <button onClick={next}>{">"}</button>
    </div>
  );
};

export default Slider;