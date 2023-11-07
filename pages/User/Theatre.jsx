import {
  Box,
  Button,
  Collapse,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Divider,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiLike, BiPause, BiPlay } from "react-icons/bi";
import React, { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
import UserTemplate from "../../components/User/UserTemplate";
import { FiDownload, FiEdit3, FiShoppingBag } from "react-icons/fi";
import { VideoPlayer } from "../../components/Client/Reusable Components/VideoPlayer";
import { Video } from "./Dashboard";
import "./Style.css";
import { InfoIcon } from "@chakra-ui/icons";

const ShowInfo = [
  {
    name: "Dark",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/dark-small.jpg",
  },
  {
    name: "Stranger Things",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/strangerthings-small.jpg",
  },
  {
    name: "Breaking Bad",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/breakingbad-small.jpg",
  },
  {
    name: "The Crown",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/crown-small.jpg",
  },
  {
    name: "Game of Thrones",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/gameofthrones-small.jpg",
  },
  {
    name: "The Mandalorian",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/mandalorian-small.jpg",
  },
];

const MainVideo = ({ src, poster, name }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const videoJsOptions = {
      autoplay: false,
      muted: true,
      controls: false,
      responsive: true,
      fluid: true,
      sources: [
        {
          src,
          type: "video/mp4",
          poster,
        },
      ],
    };

    const player = videojs(videoRef.current, videoJsOptions, function () {});

    // Add event listeners
    player.on("play", () => {
      setPlaying(true);
    });

    player.on("pause", () => {
      setPlaying(false);
    });

    player.on("ended", () => {
      setPlaying(false);
    });

    return () => {
      // Cleanup and dispose of the player
      if (player) {
        player.dispose();
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleClick = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <Box position="relative" overflow="hidden">
      <style>
        {`
          .video-js.vjs-fluid:not(.vjs-audio-only-mode),
          .video-js.vjs-16-9:not(.vjs-audio-only-mode),
          .video-js.vjs-4-3:not(.vjs-audio-only-mode),
          .video-js.vjs-9-16:not(.vjs-audio-only-mode),
          .video-js.vjs-1-1:not(.vjs-audio-only-mode) {
            height: 60vh;
          }
        `}
      </style>

      <video
        ref={videoRef}
        className="video-js vjs-default-skin"
        style={{
          padding: "0",
          maxWidth: "100vw",
          maxHeight: "60vh",
          objectFit: "cover",
        }}
        poster={poster}
        onClick={handleClick}
      />

      {!playing && (
        <Button
          position="absolute"
          top="50%"
          left="50%"
          boxSize={16}
          transform="translate(-50%, -50%)"
          rounded="full"
          size="sm"
          bg="blackAlpha.600"
          color="white"
          onClick={togglePlayPause}
        >
          <BiPlay size={32} />
        </Button>
      )}
    </Box>
  );
};

const InfoOutline = ({ children }) => (
  <Box
    borderRadius={"5px"}
    color={"#55DF01"}
    fontSize={"0.8rem"}
    p={"0.5rem"}
    bg={"black"}
    border={"1px solid #55DF01"}
  >
    {children}
  </Box>
);

const TheatreMovies = () => {
  return (
    <HStack
      maxW="100%"
      overflowX="auto"
      className="scrollable-container"
      spacing={"1rem"}
    >
      {ShowInfo.map((data, index) => (
        <Box
          key={index}
          mt={"2rem"}
          border={"1px solid transparent"}
          cursor={"pointer"}
          _hover={{ scale: "1.5" }}
          height={"auto"}
          minW={["80%", "300px"]}
          mr={"1rem"}
        >
          <Video src={data.src} poster={data.poster} name={data.name} />
        </Box>
      ))}
    </HStack>
  );
};

function PurchaseModal({ onClose, isOpen }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent
          margin={["1rem", "auto"]}
          alignItems={"center"}
          bg={"#323232"}
        >
          <ModalCloseButton />
          <ModalBody p={[12, 20]} w={"100%"} justifyContent={"center"}>
            <Heading mb={8} size={"md"} textAlign={"center"}>
              Purchase Plan
            </Heading>
            <HStack
              p={2}
              borderRadius={"5px"}
              mb={4}
              bg={"#414141"}
              justifyContent={"space-between"}
            >
              <p>Rent Video</p>
              <p>UHD</p>
              <p>$15</p>
            </HStack>
            <HStack
              p={2}
              borderRadius={"5px"}
              mb={4}
              bg={"#414141"}
              justifyContent={"space-between"}
            >
              <p>Buy Video</p>
              <p>SD</p>
              <p>$45</p>
            </HStack>
            <Flex justifyContent={"center"}>
              <Button px={[10, 16]} onClick={onClose}>
                Cancel
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

const Theatre = () => {
  const [isReadMoreOpen, setisReadMoreOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleReadMore = () => {
    setisReadMoreOpen(!isReadMoreOpen);
  };
  return (
    <UserTemplate>
      <Box
        mt={"1rem"}
        border={"1px solid transparent"}
        cursor={"pointer"}
        minH={"max-content"}
        maxH={"60%"}
        maxW={"100vw"}
        overflow={"hidden"}
      >
        <MainVideo
          src={"https://vjs.zencdn.net/v/oceans.mp4"}
          poster={"/assests/Shows/dark.png"}
          name={"Dark"}
        />
      </Box>

      <Box mx={["1rem", "2rem"]}>
        <VStack w={"100%"} alignItems={"flex-start"}>
          <Heading fontWeight={"semibold"} textAlign={"start"} size={"lg"}>
            Preview
          </Heading>
          <HStack spacing={"0.5rem"}>
            <InfoOutline>On Trending</InfoOutline>
            <InfoOutline>4.5</InfoOutline>
            <InfoOutline>18+</InfoOutline>
            <InfoOutline>HD</InfoOutline>
          </HStack>
        </VStack>

        <VStack w={"100%"} alignItems={["center", "flex-start"]}>
          <Stack
            w={"100%"}
            direction={["column", "row"]}
            my={"1rem"}
            spacing={"1rem"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box w={"100%"}>
              <Heading size={"xl"} fontWeight={"bold"}>
                Dark
              </Heading>
              <HStack>
                <BsDot size={32} />
                <Text>2017</Text>
                <BsDot size={32} />
                <Text>3 seasons</Text>
                <BsDot size={32} />
                <Text>Thriler</Text>
              </HStack>
            </Box>
            <Stack
              w={["100%", "auto"]}
              direction={["column", "row"]}
              spacing={"1rem"}
            >
              <Button leftIcon={<BiPlay size={24} />} variant={"outline"}>
                Resume
              </Button>
              <Button
                leftIcon={<FiShoppingBag size={20} />}
                variant={"outline"}
                onClick={onOpen}
              >
                Purchase
              </Button>
              <Button leftIcon={<BiPlay size={24} />} variant={"outline"}>
                Trailer
              </Button>
            </Stack>
          </Stack>

          <Box w={["100%", "40%"]}>
            <Collapse startingHeight={"20"} in={isReadMoreOpen}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                fuga dignissimos aliquam sit, facilis deserunt ratione est
                laudantium dolores aut recusandae vel libero. Delectus error
                maiores, reprehenderit minima qui laboriosam?
              </Text>
            </Collapse>
            {!isReadMoreOpen && (
              <Button onClick={toggleReadMore} size="sm" variant="link">
                Read More
              </Button>
            )}
            {isReadMoreOpen && (
              <Button onClick={toggleReadMore} size="sm" variant="link">
                Read Less
              </Button>
            )}
          </Box>
          <HStack w={["100%", "40%"]} justifyContent={"space-evenly"}>
            <Flex alignItems={"center"}>
              <AiOutlineHeart size={16} />
              <Text marginLeft={"0.5rem"}>Favourites</Text>
            </Flex>
            <Flex alignItems={"center"}>
              <BiLike size={16} />
              <Text marginLeft={"0.5rem"}>Rate</Text>
            </Flex>
            <Flex alignItems={"center"}>
              <InfoIcon size={16} />
              <Text marginLeft={"0.5rem"}>Info</Text>
            </Flex>
          </HStack>
        </VStack>
        <Divider my={8} />
        <TheatreMovies />
      </Box>

      <PurchaseModal onClose={onClose} isOpen={isOpen} />
    </UserTemplate>
  );
};

export default Theatre;
