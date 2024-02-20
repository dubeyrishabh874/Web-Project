import React, { useState, useEffect, useCallback } from "react";
import "./Carousel.css";

const Carousel = ({
  images,
  showControls = true,
  showIndicators = true,
  effect = "slide",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      handleNext();
    } else if (event.key === "ArrowLeft") {
      handlePrev();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div
      className={`carousel-wrapper ${effect}`}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      aria-live="polite"
      aria-roledescription="carousel"
    >
      <div
        className="carousel-items"
        style={{ width: "100%", height: "20rem", objectFit: "cover" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
            style={
              effect === "slide"
                ? { transform: `translateX(-${activeIndex * 100}%)` }
                : {}
            }
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <button
            className="carousel-control prev"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            Previous
          </button>
          <button
            className="carousel-control next"
            onClick={handleNext}
            aria-label="Next slide"
          >
            Next
          </button>
        </>
      )}

      {showIndicators && (
        <div className="carousel-pagination">
          {images.map((_, index) => (
            <button
              key={index}
              className={`pagination-indicator ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === activeIndex}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
