import React, { useRef, useState, useEffect, useMemo } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import UserTemplate from "../../../components/User/UserTemplate.jsx";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BiDislike, BiLike, BiPause, BiPlay } from "react-icons/bi";
import { Tooltip } from "recharts";
import {
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BsDownload, BsThreeDotsVertical } from "react-icons/bs";
import "../Style.css";
import { MdCancel } from "react-icons/md";
import { useRouter } from "next/router";
import axios from "axios";
import { server } from "../../../components/server";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import PrivateRoute from "../../PrivateRoute";
import Loader from "../../../components/Loader";

const ShowInfo = [
  {
    name: "Dark",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/dark-small.jpg",
  },
  {
    name: "Dark",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/dark-small.jpg",
  },
  {
    name: "Dark",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/dark-small.jpg",
  },
  {
    name: "Dark",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/dark-small.jpg",
  },
  {
    name: "Dark",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/dark-small.jpg",
  },
  {
    name: "Dark",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/dark-small.jpg",
  },
  {
    name: "Dark",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/dark-small.jpg",
  },
];

const Movies = () => {
  const router = useRouter();
  const [MovieData, setMovieData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  // console.log("MovieData: ", MovieData);x
  // const categories = [
  //   "Action",
  //   "Comedy",
  //   "Drama",
  //   "Sci-Fi",
  //   "Fantasy",
  //   "Horror",
  //   "Documentary",
  // ];

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${server}user/getGenres`);
        // console.log(response.data.categories);
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const fetchDataForMovies = async () => {
      try {
        const videoType = "Movie";
        const genreParam = selectedCategory ? `&genre=${selectedCategory}` : "";

        const response = await axios.get(
          `${server}user/allchannels?videoType=${videoType}${genreParam}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          setMovieData(response.data.channels);
        } else if (response.status === 404) {
          setMovieData([]);
        } else {
          console.error(`Error: Unexpected status code ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataForMovies();
  }, [selectedCategory]);

  const allVideos = useMemo(
    () => MovieData.flatMap((channel) => channel.videos),
    [MovieData]
  );

  const videosByGenre = useMemo(() => {
    return allVideos.reduce((acc, video) => {
      if (!acc[video.Genre]) {
        acc[video.Genre] = [];
      }
      acc[video.Genre].push(video);
      return acc;
    }, {});
  }, [allVideos]);

  return (
    <>
      <Carousal />
      {/* <Box px={["2rem", "5rem"]}>
        <Heading size={"lg"}>Continue Watching</Heading>
        <Box>
          <HStack
            maxW="100%"
            overflowX="auto"
            className="scrollable-container"
            spacing={"1rem"}
          >
            {ShowInfo.map((index) => (
              <Box
                key={index}
                mt={"2rem"}
                border={"1px solid transparent"}
                cursor={"pointer"}
                _hover={{ scale: "1.5" }}
                height={"auto"}
                onClick={() => router.push("/User/Preview")}
                minW={["80%", "300px"]}
                mr={"1rem"}
              >
                <Video
                  src={"https://vjs.zencdn.net/v/oceans.mp4"}
                  poster={"/assests/Shows/dark-small.jpg"}
                  name={"Dark"}
                />
              </Box>
            ))}
          </HStack>
        </Box>

        <Divider my={"2rem"} />
      </Box> */}

      <Box px={["2rem", "5rem"]}>
        {isLoading ? (
          <Loader color="#55DF01" />
        ) : (
          <>
            {Object.keys(videosByGenre).length > 0
              ? Object.keys(videosByGenre).map((genre) => (
                  <React.Fragment key={genre}>
                    <Heading size={"lg"}>{genre}</Heading>
                    <Box>
                      <HStack
                        maxW="100%"
                        overflowX="auto"
                        className="scrollable-container"
                        spacing={"1rem"}
                      >
                        {videosByGenre[genre].map((video) => (
                          <Box
                            key={video.id}
                            mt={"2rem"}
                            border={"1px solid transparent"}
                            cursor={"pointer"}
                            _hover={{ scale: "1.5" }}
                            height={"auto"}
                            onClick={() =>
                              router.push(
                                `/User/Preview?creatorId=${video.content_creator_id}&id=${video.id}`
                              )
                            }
                            minW={["80%", "300px"]}
                            mr={"1rem"}
                          >
                            <Video
                              src={"https://vjs.zencdn.net/v/oceans.mp4"}
                              poster={"/assests/Shows/dark-small.jpg"}
                              name={video.name}
                            />
                          </Box>
                        ))}
                      </HStack>
                    </Box>
                  </React.Fragment>
                ))
              : selectedCategory && (
                  <Heading
                    textAlign="center"
                    my={[4, 8]}
                    fontSize={["2xl", "4xl"]}
                  >
                    No Movies Found for Genre: {selectedCategory}
                  </Heading>
                )}
          </>
        )}
      </Box>

      <div>
        <Button
          position="fixed"
          bottom="20px"
          // right="20px"
          right={"20px"}
          zIndex="1"
          height={24}
          w={24}
          rounded={"full"}
          bg={"#414141"}
          color={"#fff"}
          onClick={handleOpen}
        >
          Genre
        </Button>
        <Modal isOpen={isOpen} onClose={handleClose} size="md">
          <ModalOverlay />
          <ModalContent bg={"transparent"}>
            <ModalHeader fontSize={"3xl"} textAlign={"center"} color={"white"}>
              Categories
            </ModalHeader>
            <ModalBody>
              {categories.map((category, index) => (
                <Button
                  key={index}
                  width="100%"
                  my={4}
                  fontSize={"xl"}
                  color={"white"}
                  bg={"transparent"}
                  onClick={() => {
                    setSelectedCategory(category);
                    handleClose();
                  }}
                >
                  {category}
                </Button>
              ))}
            </ModalBody>
            <ModalFooter justifyContent={"center"}>
              <Button
                colorScheme="gray"
                bg={"transparent"}
                h={16}
                w={"max-content"}
                border={"1px solid white"}
                rounded={"full"}
                onClick={handleClose}
              >
                <AiOutlineClose size={32} color="white" />
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export const Video = ({ src, onOptions, poster, name }) => {
  const videoRef = useRef(null);
  const count = useRef(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [streamButton, setStreamButton] = useState(<BiPlay />);

  // Function to toggle full-screen mode
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

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
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("MSFullscreenChange", handleFullScreenChange);
    return () => {
      // Cleanup and dispose of the player
      if (player) {
        player.dispose();
      }
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullScreenChange
      );
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
        setStreamButton(BiPause); // Set the button icon to pause
      } else {
        videoRef.current.pause();
        setStreamButton(BiPlay); // Set the button icon to play
      }
    }
  };

  return (
    <Box>
      <video
        ref={videoRef}
        className="video-js vjs-default-skin"
        style={{
          borderTopRadius: "10px",
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
        poster={poster}
      />

      <HStack
        mb={"2rem"}
        borderBottomRadius={"10px"}
        p={4}
        bg={"#232323"}
        justifyContent={"space-between"}
      >
        <Stack>
          <Button
            borderRadius={"20px"}
            size={"sm"}
            bg={"blackAlpha.600"}
            color="white"
            onClick={togglePlayPause}
          >
            {streamButton}
          </Button>
        </Stack>
        <HStack>
          <Button
            borderRadius={"20px"}
            size={"sm"}
            bg={"blackAlpha.600"}
            color="white"
            p={0}
            onClick={handleOptions}
          >
            <AiOutlineInfoCircle />
          </Button>
          <Button
            borderRadius={"20px"}
            size={"sm"}
            bg={"blackAlpha.600"}
            color="white"
            p={0}
            onClick={toggleFullScreen}
          >
            {isFullScreen ? <FiMinimize2 /> : <FiMaximize2 />}
          </Button>
          <Menu variant={"striped"}>
            <MenuButton
              as={Button}
              borderRadius={"20px"}
              size={"sm"}
              bg={"blackAlpha.600"}
              color="white"
              p={0}
            >
              <Icon as={BsThreeDotsVertical} />
            </MenuButton>
            <MenuList p={0} className="striped-menu">
              <MenuItem className="striped-item">
                <AiOutlineInfoCircle className="striped-icon" />
                <Text className="striped-text" marginLeft={"1rem"}>
                  {" "}
                  Episode Info
                </Text>
              </MenuItem>
              <MenuItem className="striped-item">
                <BsDownload className="striped-icon" />
                <Text className="striped-text" marginLeft={"1rem"}>
                  Buy/Rent/Subscribe
                </Text>
              </MenuItem>
              <MenuItem className="striped-item">
                <BiDislike className="striped-icon" />
                <Text className="striped-text" marginLeft={"1rem"}>
                  Not my type
                </Text>
              </MenuItem>
              <MenuItem className="striped-item">
                <BiLike className="striped-icon" />
                <Text className="striped-text" marginLeft={"1rem"}>
                  My type
                </Text>
              </MenuItem>
              <MenuItem className="striped-item">
                <AiOutlineHeart className="striped-icon" />
                <Text className="striped-text" marginLeft={"1rem"}>
                  Favourite
                </Text>
              </MenuItem>
              <MenuItem className="striped-item">
                <MdCancel className="striped-icon" />
                <Text className="striped-text" marginLeft={"1rem"}>
                  Remove
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </Box>
  );
};

const Channels = () => {
  const router = useRouter();
  const { query } = useRouter();
  const [ChannelData, setChannelData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [ChannelCategory, setChannelCategory] = useState();
  // getAllChannelsQuery
  const categoryList = ["Action", "Drama", "Thriller"];
  useEffect(() => {
    const fetchDataForGenres = async () => {
      const categoryData = {};
      const videoType = "Channel";
      await axios
        .get(`${server}user/allchannels`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          setChannelData(res.data.channels);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchDataForGenres();
  }, []);
  console.log(ChannelData);
  return (
    <>
      {ChannelData.map((channel, index) => {
        const videos = channel.videos;
        const creatorId = channel.content_creator_id;
        console.log("Videos", videos);
        console.log(channel);
        return (
          <Box px={["2rem", "5rem"]} key={index}>
            <Heading size={"lg"}>{channel.name}</Heading>
            <Box>
              <HStack
                maxW="100%"
                overflowX="auto"
                className="scrollable-container"
                spacing={"1rem"}
              >
                {videos.map((video, index) => {
                  return (
                    <Box
                      key={index}
                      mt={"2rem"}
                      border={"1px solid transparent"}
                      cursor={"pointer"}
                      _hover={{ scale: "1.5" }}
                      height={"auto"}
                      onClick={() =>
                        router.push(
                          `/User/Preview?creatorId=${creatorId}&id=${video.id}`
                        )
                      }
                      minW={["80%", "300px"]}
                      mr={"1rem"}
                    >
                      <Video
                        src={"https://vjs.zencdn.net/v/oceans.mp4"}
                        poster={"/assests/Shows/dark-small.jpg"}
                        name={"Dark"}
                      />
                    </Box>
                  );
                })}
              </HStack>
            </Box>
          </Box>
        );
      })}
    </>
  );
};
const Carousal = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div key="1" className="item" data-value="1">
      <Image
        px={"1rem"}
        h={"300px"}
        w={"1500px"}
        src="/assests/Shows/dark.png"
        alt=""
      />
    </div>,
    <div key="2" className="item" data-value="2">
      <Image
        px={"1rem"}
        h={"300px"}
        w={"1500px"}
        src="/assests/Shows/riverdale.jpg"
        alt=""
      />
    </div>,
    <div key="3" className="item" data-value="3">
      <Image
        px={"1rem"}
        h={"300px"}
        w={"1500px"}
        src="/assests/Shows/gameofthrones.jpg"
        alt=""
      />
    </div>,
    <div key="4" className="item" data-value="4">
      <Image
        px={"1rem"}
        h={"300px"}
        w={"1500px"}
        alt=""
        src="/assests/Shows/strangerthings.jpg"
      />
    </div>,
  ];

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      activeIndex={3}
      responsive={responsive}
      disableButtonsControls={true}
      controlsStrategy="alternate"
    />
  );
};

const Shows = () => {
  const router = useRouter();
  const { query } = useRouter();
  const [seriesData, setSeriesData] = useState([]);
  const [seriesCategory, setSeriesCategory] = useState();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  // const categories = [
  //   "Action",
  //   "Comedy",
  //   "Drama",
  //   "Sci-Fi",
  //   "Fantasy",
  //   "Horror",
  //   "Documentary",
  // ];

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${server}user/getGenres`);
        // console.log(response.data.categories);
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const fetchDataForSeries = async () => {
      try {
        const videoType = "Series";
        const genreParam = selectedCategory ? `&genre=${selectedCategory}` : "";

        const response = await axios.get(
          `${server}user/allchannels?videoType=${videoType}${genreParam}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          setSeriesData(response.data.channels);
        } else if (response.status === 404) {
          setSeriesData([]);
        } else {
          console.error(`Error: Unexpected status code ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataForSeries();
  }, [selectedCategory]);

  const allVideos = useMemo(
    () => seriesData.flatMap((channel) => channel.videos),
    [seriesData]
  );

  const videosByGenre = useMemo(() => {
    return allVideos.reduce((acc, video) => {
      if (!acc[video.Genre]) {
        acc[video.Genre] = [];
      }
      acc[video.Genre].push(video);
      return acc;
    }, {});
  }, [allVideos]);

  return (
    <>
      <Carousal />
      {/* <Box px={["2rem", "5rem"]}>
        <Heading size={"lg"}>Continue Watching</Heading>
        <Box>
          <HStack
            maxW="100%"
            overflowX="auto"
            className="scrollable-container"
            spacing={"1rem"}
          >
            {ShowInfo.map((index) => (
              <Box
                key={index}
                mt={"2rem"}
                border={"1px solid transparent"}
                cursor={"pointer"}
                _hover={{ scale: "1.5" }}
                height={"auto"}
                onClick={() => router.push("/User/Preview")}
                minW={["80%", "300px"]}
                mr={"1rem"}
              >
                <Video
                  src={"https://vjs.zencdn.net/v/oceans.mp4"}
                  poster={"/assests/Shows/dark-small.jpg"}
                  name={"Dark"}
                />
              </Box>
            ))}
          </HStack>
        </Box>

        <Divider my={"2rem"} />
      </Box> */}

      <Box px={["2rem", "5rem"]}>
        {isLoading ? (
          <Loader color="#55DF01" />
        ) : (
          <>
            {Object.keys(videosByGenre).length > 0
              ? Object.keys(videosByGenre).map((genre) => (
                  <React.Fragment key={genre}>
                    <Heading size={"lg"}>{genre}</Heading>
                    <Box>
                      <HStack
                        maxW="100%"
                        overflowX="auto"
                        className="scrollable-container"
                        spacing={"1rem"}
                      >
                        {videosByGenre[genre].map((video) => (
                          <Box
                            key={video.id}
                            mt={"2rem"}
                            border={"1px solid transparent"}
                            cursor={"pointer"}
                            _hover={{ scale: "1.5" }}
                            height={"auto"}
                            onClick={() =>
                              router.push(`/User/Preview/${video.id}`)
                            }
                            minW={["80%", "300px"]}
                            mr={"1rem"}
                          >
                            <Video
                              src={"https://vjs.zencdn.net/v/oceans.mp4"}
                              poster={"/assests/Shows/dark-small.jpg"}
                              name={video.name}
                            />
                          </Box>
                        ))}
                      </HStack>
                    </Box>
                  </React.Fragment>
                ))
              : selectedCategory && (
                  <Heading
                    textAlign="center"
                    my={[4, 8]}
                    fontSize={["2xl", "4xl"]}
                  >
                    No Movies Found for Genre: {selectedCategory}
                  </Heading>
                )}
          </>
        )}
      </Box>
      <div>
        <Button
          position="fixed"
          bottom="20px"
          // right="20px"
          right={"20px"}
          zIndex="1"
          height={24}
          w={24}
          rounded={"full"}
          bg={"#414141"}
          color={"#fff"}
          onClick={handleOpen}
        >
          Genre
        </Button>
        <Modal isOpen={isOpen} onClose={handleClose} size="md">
          <ModalOverlay />
          <ModalContent bg={"transparent"}>
            <ModalHeader fontSize={"3xl"} textAlign={"center"} color={"white"}>
              Categories
            </ModalHeader>
            <ModalBody>
              {categories.map((category, index) => (
                <Button
                  key={index}
                  width="100%"
                  my={4}
                  fontSize={"xl"}
                  color={"white"}
                  bg={"transparent"}
                  onClick={() => {
                    setSelectedCategory(category);
                    handleClose();
                  }}
                >
                  {category}
                </Button>
              ))}
            </ModalBody>
            <ModalFooter justifyContent={"center"}>
              <Button
                colorScheme="gray"
                bg={"transparent"}
                h={16}
                w={"max-content"}
                border={"1px solid white"}
                rounded={"full"}
                onClick={handleClose}
              >
                <AiOutlineClose size={32} color="white" />
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

const Dashboard = (text) => {
  const [content, setContent] = useState("shows");
  const handleClick = (text) => {
    setContent(text);
  };

  return (
    <PrivateRoute>
      <UserTemplate>
        <Box px={[4, 8]}>
          <Flex alignItems={"center"}>
            <Flex width={"100%"} py={"2rem"} borderRight={"2px solid black"}>
              <Button
                _active={{ color: "white", bg: "#55DF01" }}
                width={"80%"}
                variant={"outline"}
                onClick={() => handleClick("shows")}
                borderRadius={"0"}
                py={4}
                px={2}
                fontSize={{ base: "sm", md: "md" }}
                className="Content-Bar"
              >
                TV Shows
              </Button>

              <Button
                _active={{ color: "white", bg: "#55DF01" }}
                width={"80%"}
                variant={"outline"}
                onClick={() => handleClick("movies")}
                borderRadius={"0"}
                py={4}
                px={2}
                fontSize={{ base: "sm", md: "md" }}
                className="Content-Bar"
              >
                Movies
              </Button>

              <Button
                _active={{ color: "white", bg: "#55DF01" }}
                width={"80%"}
                variant={"outline"}
                onClick={() => handleClick("channels")}
                borderRadius={"0"}
                py={4}
                px={2}
                fontSize={{ base: "sm", md: "md" }}
                className="Content-Bar"
              >
                Channels
              </Button>
            </Flex>
          </Flex>
        </Box>
        {content === "shows" ? (
          <Shows />
        ) : content === "movies" ? (
          <Movies />
        ) : (
          <Channels />
        )}
      </UserTemplate>
    </PrivateRoute>
  );
};

export default Dashboard;
