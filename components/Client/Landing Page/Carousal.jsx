import React from 'react';
import { Box, Center, Image } from '@chakra-ui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'

const ImageCarousel = ({ Images }) => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    const boxStyle = {
        background: `url('https://i.pinimg.com/originals/c2/b3/f6/c2b3f61b495f5bc6eb998a661af64d5d.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        objectFit: 'contain',
        fallbacks: {
            background: 'linear-gradient(to bottom, rgba(0, 128, 0, 0.5), rgba(0, 128, 0, 0.2))',
        },
    };
    return (
        <Box style={boxStyle} px={'10rem'}>
            <Slider {...settings}>
                {Images.map((img) => (
                    <Image src={img.src} />
                ))}
            </Slider>
        </Box >
    );

}
export default ImageCarousel;