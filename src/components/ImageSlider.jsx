
import { useState } from "react";
import "./ImageSlider.css";

const images = [
  {
    src: "/images/img_sld1.jpg",
    alt: "College Building",
  },
  {
    src: "/images/img_sld2.jpg",
    alt: "College Campus",
  },
  {
    src: "/images/img_sld3.jpg",
    alt: "College Hospital",
  },
   
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <section className="image-slider">
      <img
        key={currentIndex}
        className="slider-image"
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
      />

      <button
        className="slider-arrow slider-prev"
        onClick={previousImage}
        aria-label="Previous image"
      >
        &#10094;
      </button>

      <button
        className="slider-arrow slider-next"
        onClick={nextImage}
        aria-label="Next image"
      >
        &#10095;
      </button>

      <div className="slider-dots">
        {images.map((image, index) => (
          <button
            key={image.src}
            className={`slider-dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
