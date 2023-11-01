import {
  Box,
  Button,
  Collapse,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  Tooltip,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineInfoCircle,
  AiOutlineSetting,
  AiOutlineShareAlt,
} from "react-icons/ai";
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
import axios from "axios";
import { server } from "../../components/server";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const EpisodeData = [
  {
    name: "Dark",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8",
    episodes: [
      {
        name: "Episode 1",
        Duration: "25",
        src: "https://vjs.zencdn.net/v/oceans.mp4",
        poster:
          "https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam aperiam explicabo similique reprehenderit eligendi. Aliquam ad atque tempore in. Accusamus ipsum tempore animi sapiente veritatis ipsam similique blanditiis inventore!",
      },
      {
        name: "Episode 2",
        Duration: "30",
        src: "https://vjs.zencdn.net/v/oceans.mp4",
        poster:
          "https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam aperiam explicabo similique reprehenderit eligendi. Aliquam ad atque tempore in. Accusamus ipsum tempore animi sapiente veritatis ipsam similique blanditiis inventore!",
      },
      {
        name: "Episode 3",
        Duration: "30",
        src: "https://vjs.zencdn.net/v/oceans.mp4",
        poster:
          "https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam aperiam explicabo similique reprehenderit eligendi. Aliquam ad atque tempore in. Accusamus ipsum tempore animi sapiente veritatis ipsam similique blanditiis inventore!",
      },
      {
        name: "Episode 4",
        Duration: "30",
        src: "https://vjs.zencdn.net/v/oceans.mp4",
        poster:
          "https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam aperiam explicabo similique reprehenderit eligendi. Aliquam ad atque tempore in. Accusamus ipsum tempore animi sapiente veritatis ipsam similique blanditiis inventore!",
      },
      {
        name: "Episode 5",
        Duration: "30",
        src: "https://vjs.zencdn.net/v/oceans.mp4",
        poster:
          "https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam aperiam explicabo similique reprehenderit eligendi. Aliquam ad atque tempore in. Accusamus ipsum tempore animi sapiente veritatis ipsam similique blanditiis inventore!",
      },
    ],
  },
];

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

const MainVideo = ({ src, onOptions, poster, name }) => {
  const videoRef = useRef(null);

  const [streamButton, setStreamButton] = useState(<BiPlay size={32} />);
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

    const player = videojs(videoRef.current, videoJsOptions, function () {
      // Player is ready
    });

    // Add event listeners
    player.on("play", () => {
      // Video play event
    });

    player.on("pause", () => {
      // Video pause event
    });

    player.on("ended", () => {
      // Video ended event
    });

    return () => {
      // Cleanup and dispose of the player
      if (player) {
        player.dispose();
      }
    };
  }, []);

  const handleOptions = () => {
    // Implement your logic to show options, e.g., open a modal
    console.log("Options clicked");
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      // Check if the video is paused and toggle accordingly
      if (videoRef.current.paused) {
        videoRef.current.play();
        setStreamButton(<BiPause size={32} />); // Set the button icon to pause
      } else {
        videoRef.current.pause();
        setStreamButton(<BiPlay size={32} />); // Set the button icon to play
      }
    }
  };

  return (
    <Box position="relative" overflow={"hidden"}>
      <style>
        {`
                .video-js.vjs-fluid:not(.vjs-audio-only-mode),
                .video-js.vjs-16-9:not(.vjs-audio-only-mode),
                .video-js.vjs-4-3:not(.vjs-audio-only-mode),
                .video-js.vjs-9-16:not(.vjs-audio-only-mode),
                .video-js.vjs-1-1:not(.vjs-audio-only-mode) {
                    height: 60vh; /* Reset the height to its default value */
                }
                `}
      </style>

      <video
        ref={videoRef}
        className="video-js vjs-default-skin"
        style={{
          padding: "0",
          maxWidwth: "100vw",
          maxHeight: "60vh",
          objectFit: "cover",
        }}
        poster={poster}
      />
      <Button
        position="absolute"
        top="30%"
        left="50%"
        boxSize={16}
        transform="translate(-50%, -50%)"
        rounded={"full"}
        size="sm"
        bg="blackAlpha.600"
        color="white"
        onClick={togglePlayPause}
      >
        {streamButton}
      </Button>
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

const Episodes = ({ episodesData }) => {
  const SlashSlice = (fullPath) => {
    return fullPath;
  };
  return (
    <>
      {episodesData?.map((episode, index) => {
        const poster = SlashSlice(episode?.poster);
        const file = SlashSlice(episode?.file);

        return (
          <Stack
            h={"100%"}
            key={index}
            spacing={"3rem"}
            cursor={"pointer"}
            my={"1rem"}
            justifyContent={["center", "space-between"]}
            width={"100%"}
            p={"1.5rem"}
            bg={"#232323"}
            direction={{ base: "column", md: "row" }}
            alignItems={"center"}
          >
            <Box
              maxWidth="100%" // Ensure the player doesn't exceed its original size
              height={{ base: "100%", md: "auto" }}
            >
              <VideoPlayer
                poster={`http://localhost:5000/uploadPicture/${poster}`}
                name={episode?.title}
                src={`http://localhost:5000/uploadVideos/${file}`}
              />
            </Box>
            <VStack
              h={"100%"}
              alignItems={"flex-start"}
              justifyContent={"space-between"}
            >
              <Heading size={"md"}>{episode?.title}</Heading>
              <Text>{episode?.Duration} min</Text>
              <Text>{episode?.description}</Text>
            </VStack>
            <Stack
              direction={{ base: "row", md: "column" }}
              alignSelf={["center", "normal"]}
            >
              <Icon as={FiDownload} boxSize={6} />
            </Stack>
          </Stack>
        );
      })}
    </>
  );
};

const Similar_Titles = () => {
  return (
    <>
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
            <Text>Dark</Text>
          </Box>
        ))}
      </HStack>
    </>
  );
};

const Trailers = ({ trailersData }) => {
  console.log(trailersData);
  return (
    <HStack
      maxW="100%"
      overflowX="auto"
      className="scrollable-container"
      spacing={"1rem"}
    >
      {trailersData?.map((data, index) => (
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
          <Video
            src={`http://localhost:5000/uploadVideos/${data.file}`}
            poster={`http://localhost:5000/uploadPicture/${data.poster}`}
            name={data.title}
          />
        </Box>
      ))}
    </HStack>
  );
};

const Crew = ({ Cast, Genre, Category }) => {
  return (
    <>
      <Text fontSize={"1.2rem"} color={"white"} mb={"1rem"}>
        <b>Cast: </b>
        {Cast}
      </Text>
      <Text fontSize={"1.2rem"} color={"white"} mb={"1rem"}>
        <b>Genre:</b> {Genre}
      </Text>
      <Text fontSize={"1.2rem"} color={"white"} mb={"1rem"}>
        <b>Category:</b> {Category}
      </Text>
    </>
  );
};

const EpisodeOutline = ({ children, setContent, text }) => {
  const handleClick = (text) => {
    setContent(text);
  };

  return (
    <Button
      _active={{ color: "#55DF01", border: "1px solid #55DF01" }}
      width={"80%"}
      bg={"transparent"}
      fontWeight={["normal", "bold"]}
      border={"1px solid #232323"}
      color={"white"}
      onClick={() => handleClick(text)}
      borderRadius={"0"}
      py={4}
      px={2}
      fontSize={{ base: "sm", md: "md" }}
    >
      {children}
    </Button>
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

const Preview = () => {
  const router = useRouter();
  const [isReadMoreOpen, setisReadMoreOpen] = useState(false);
  const [content, setContent] = useState("Episodes");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [videoData, setVideoData] = useState();
  const [creatorData, setCreatorData] = useState();
  const [episodesData, setEpisodesData] = useState();
  const [trailersData, setTrailersData] = useState();
  const Cast = videoData?.Cast;
  const Genre = videoData?.Genre;
  const Category = videoData?.Category;

  const { creatorId, id } = router.query;
  console.log(videoData);

  useEffect(() => {
    const fetchVideo = async () => {
      await axios
        .get(`${server}user/getSerie?creatorId=${creatorId}&id=${id}`, {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        })
        .then((resp) => {
          setVideoData(resp?.data.video);
          setCreatorData(resp?.data.creator);
        })
        .catch((err) => console.log(err));
    };

    fetchVideo();
  }, [creatorId, id]);

  useEffect(() => {
    if (videoData) {
      setTrailersData(videoData?.trailers);
      setEpisodesData(videoData?.episodes);
    }
  }, [videoData]);

  const toggleReadMore = () => {
    setisReadMoreOpen(!isReadMoreOpen);
  };

  const { user } = useSelector((state) => state.auth);
  const AddToFavourite = async (user) => {
    const userId = user?.user?.userId;
    const videoId = videoData.id;

    console.log(userId, videoId);

    try {
      const response = await axios.post(
        `${server}user/favourites`,
        { userId, videoId },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
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
              <Button
                leftIcon={<AiFillHeart size={24} color="#55DF01" />}
                variant={"outline"}
                onClick={AddToFavourite}
              >
                Add to Favourite
              </Button>
            </Stack>
          </Stack>

          <Box w={["100%", "40%"]}>
            <Collapse startingHeight={"20"} in={isReadMoreOpen}>
              <Text>{videoData?.description}</Text>
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
              <AiOutlineShareAlt size={16} />
              <Text marginLeft={"0.5rem"}>Share</Text>
            </Flex>
          </HStack>
        </VStack>

        <Flex alignItems={"center"}>
          <Flex
            width={"100%"}
            py={["auto", "2rem"]}
            borderRight={"2px solid black"}
          >
            <EpisodeOutline text="Episodes" setContent={setContent}>
              Episodes
            </EpisodeOutline>

            <EpisodeOutline text="Similar titles" setContent={setContent}>
              Similar Titles
            </EpisodeOutline>

            <EpisodeOutline text="Trailers" setContent={setContent}>
              Trailers
            </EpisodeOutline>

            <EpisodeOutline text="Crew" setContent={setContent}>
              Cast/Crew
            </EpisodeOutline>
          </Flex>
        </Flex>
        {content === "Episodes" ? (
          <Episodes episodesData={episodesData} />
        ) : content === "Similar titles" ? (
          <Similar_Titles />
        ) : content === "Trailers" ? (
          <Trailers trailersData={trailersData} />
        ) : content === "Crew" ? (
          <Crew Cast={Cast} Genre={Genre} Category={Category} />
        ) : null}
      </Box>
      <PurchaseModal onClose={onClose} isOpen={isOpen} />
    </UserTemplate>
  );
};

export default Preview;
