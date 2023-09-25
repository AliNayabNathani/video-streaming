import React, { useState } from 'react';
import { Box, Center, Image } from '@chakra-ui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'
// const ImageCarousel = ({ Images }) => {

//     const settings = {
//         className: "center",
//         centerMode: true,
//         infinite: true,
//         centerPadding: "60px",
//         slidesToShow: 3,
//         speed: 500
//     };
//     const boxStyle = {
//         background: `url('https://i.pinimg.com/originals/c2/b3/f6/c2b3f61b495f5bc6eb998a661af64d5d.jpg')`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         objectFit: 'contain',
//         fallbacks: {
//             background: 'linear-gradient(to bottom, rgba(0, 128, 0, 0.5), rgba(0, 128, 0, 0.2))',
//         },
//     };
//     return (
//         <Box style={boxStyle} px={'10rem'}>
//             <Slider {...settings}>
//                 {Images.map((img) => (
//                     <Image src={img.src} />
//                 ))}
//             </Slider>
//         </Box >
//     );

// }


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
                            <div className='item'>
                                <img src="assests/Carousal/Image1.jpg" alt="picture" />
                            </div>
                        </label>
                        <label class="item" for="t-2">
                            <div className='item'>
                                <img src="assests/Carousal/Image2.jpg" alt="picture" />
                            </div>
                        </label>
                        <label class="item" for="t-3">
                            <div className='item'>
                                <img src="assests/Carousal/Image3.jpg" alt="picture" />
                            </div>
                        </label>
                        <label class="item" for="t-4">
                            <div className='item'>
                                <img src="assests/Carousal/Image4.jpg" alt="picture" />
                            </div>
                        </label>
                        <label class="item" for="t-5">
                            <div className='item'>
                                <img src="assests/Carousal/Image2.jpg" alt="picture" />
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