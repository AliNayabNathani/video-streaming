import {
  Box,
  CSSReset,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import ImageCarousel from "./Carousal";
import { MainButton } from "../Reusable Components/MainButton";
import { Video, VideoPlayer } from "../Reusable Components/VideoPlayer";
import { useState } from "react";
import "./videoCarousal.css";

const Images = [
  { src: "assests/Carousal/Image1.jpg" },
  { src: "assests/Carousal/Image2.jpg" },
  { src: "assests/Carousal/Image3.jpg" },
  { src: "assests/Carousal/Image4.jpg" },
];

const videoData = [
  {
    src: "saddwsd",
  },
  {
    src: "",
  },
  {
    src: "",
  },
  {
    src: "",
  },
];

const Header = () => (
  <Stack
    my={10}
    spacing={10}
    direction="column"
    justifyContent={"center"}
    alignItems={"center"}
  >
    <Heading textAlign={"center"} size={{ base: "md", md: "xl" }}>
      Become a Content Creator
    </Heading>
    <MainButton>Create Account</MainButton>
  </Stack>
);

const VideoOutline = () => (
  <Flex
    // Adjust the width as needed
    maxWidth="100%" // Ensure the player doesn't exceed its original size
    margin="0 auto" // Center the player horizontally
    height={{ base: "100%", md: "100%" }}
    justifyContent={"center"}
  >
    <Box
      mt={"2rem"}
      border={"1px solid transparent"}
      borderRadius={5}
      cursor={"pointer"}
      _hover={{ scale: "1.5" }}
      width={["100%", "700px"]}
      mr={"1rem"}
    >
      <Video
        poster="https://pbblogassets.s3.amazonaws.com/uploads/2019/12/02140921/thumbnail-cover.jpg"
        name={"Blue Beetle"}
        src={"https://vjs.zencdn.net/v/oceans.mp4"}
      />
    </Box>
  </Flex>
);

const VideoCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : videoData.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < videoData.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div>
      <div className="carousel">
        <button className="prev-button" onClick={handlePrevClick}>
          &lt;
        </button>
        <div className="carousel-content">
          {videoData.map((video, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <VideoOutline />
            </div>
          ))}
        </div>
        <button className="next-button" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div>
  );
};

const Features = ({ direction, text }) => (
  <Stack
    my={10}
    display={{ base: "block", md: "flex" }}
    direction={direction}
    justifyContent={"center"}
    spacing={32}
  >
    <VStack p={5} alignItems={"start"} justifyContent={"center"}>
      <Heading fontSize={["2rem", "3rem"]} color={"#55DF01"}>
        {text}
      </Heading>
      <Text fontSize={{ base: "1rem", md: "1.3rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        officia neque sapiente inventore suscipit saepe veniam, aut accusantium
        voluptatem asperiores aspernatur obcaecati, optio aliquam adipisci
        blanditiis ipsum. Illum, aliquam voluptates?
      </Text>
    </VStack>
    <Image width={"400px"} src={"/assests/Carousal/Image1.jpg"} />
  </Stack>
);

export default function Content() {
  return (
    <>
      <CSSReset />
      <div className="carouselBody">
        <ImageCarousel Images={Images} />
      </div>
      <Box mx={{ base: 16, md: 64 }}>
        <Header />
        <Features text={"Feature 1"} direction={"row"} />
        <Features text={"Feature 2"} direction={"row-reverse"} />
        <Divider />
        <Box my={10} justifyContent={"center"}>
          <Heading mb={10} textAlign={"center"} color={"#55DF01"}>
            Videos
          </Heading>
          <VideoCarousal />
        </Box>
      </Box>
    </>
  );
}
