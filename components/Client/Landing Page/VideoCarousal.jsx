import React, { useState } from "react";
import { Box, Center, Image } from "@chakra-ui/react";
import "./Carousel.css";

function ImageCarousel({ Images }) {
  const [currentSlide, setCurrentSlide] = useState(2); // Initialize with the third slide

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      {/* Radio buttons for each slide */}
      {[1, 2, 3, 4, 5].map((index) => (
        <input
          key={index}
          type="radio"
          name="testimonial"
          id={`t-${index}`}
          checked={currentSlide === index}
          onChange={() => handleSlideChange(index)}
        />
      ))}

      <div className="testimonials">
        {/* Testimonial items */}
        {[1, 2, 3, 4, 5].map((image, index) => (
          <>
            <label class="item" for="t-1">
              <div className="item">
                <Image src="assests/Carousal/Image1.jpg" alt="picture" />
              </div>
            </label>
            <label class="item" for="t-2">
              <div className="item">
                <Image src="assests/Carousal/Image2.jpg" alt="picture" />
              </div>
            </label>
            <label class="item" for="t-3">
              <div className="item">
                <Image src="assests/Carousal/Image3.jpg" alt="picture" />
              </div>
            </label>
            <label class="item" for="t-4">
              <div className="item">
                <Image src="assests/Carousal/Image4.jpg" alt="picture" />
              </div>
            </label>
            <label class="item" for="t-5">
              <div className="item">
                <Image src="assests/Carousal/Image2.jpg" alt="picture" />
              </div>
            </label>
          </>
        ))}
      </div>

      <div className="dots">
        {/* Dot indicators */}
        {[1, 2, 3, 4, 5].map((index) => (
          <label
            key={index}
            htmlFor={`t-${index}`}
            className={currentSlide === index ? "active" : ""}
          ></label>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
