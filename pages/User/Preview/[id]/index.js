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
  Skeleton,
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
import UserTemplate from "../../../../components/User/UserTemplate";
import { FiDownload, FiEdit3, FiShoppingBag } from "react-icons/fi";
import { VideoPlayer } from "../../../../components/Client/Reusable Components/VideoPlayer";
import { Video } from "../../Dashboard";
import "../../Style.css";
import axios from "axios";
import {
  pictureServer,
  server,
  videoServer,
} from "../../../../components/server";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";

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

const MainVideo = ({ src, poster, name, onOptions }) => {
  console.log("src", src);
  console.log("posster:", poster);
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const videoJsOptions = {
      autoplay: false,
      muted: true,
      controls: true,
      fluid: true,
      responsive: true,
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
  }, [src, poster]);

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
          .vjs-big-play-button {
            display: none !important;
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

const Episodes = ({ episodesData, videoData, userId }) => {
  console.log("EPISODE", episodesData);
  const [loading, setLoading] = useState(true);
  const [videoStatus, setVideoStatus] = useState("none");
  const SlashSlice = (fullPath) => {
    return fullPath;
  };

  useEffect(() => {
    const fetchVideoStatus = async () => {
      try {
        const response = await axios.get(
          `${server}user/checkVideoStatus?id=${videoData}&userId=${userId}`,
          {
            headers: {
              "Content-type": "application/json",
            },
            withCredentials: true,
          }
        );

        setVideoStatus(response.data.status);
      } catch (error) {
        console.error("Error fetching video status:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoStatus();
  }, [videoData, userId]);

  return (
    <>
      {episodesData?.map((episode, index) => {
        const poster = SlashSlice(episode?.poster);
        const file = SlashSlice(episode?.file);
        const shouldRenderVideoPlayer =
          videoStatus === "rented" || videoStatus === "purchased";
        return (
          <Stack
            h={"100%"}
            key={index}
            spacing={"3rem"}
            cursor={"pointer"}
            my={"1rem"}
            justifyContent={["center", "normal"]}
            width={"100%"}
            p={["1rem", "2rem"]}
            bg={"#232323"}
            direction={{ base: "column", md: "row" }}
            alignItems={["center", "flex-start"]}
            overflowY={["scroll", "hidden"]}
          >
            {loading ? (
              <Skeleton height="180px" width="50%" />
            ) : shouldRenderVideoPlayer ? (
              <Link href={`/User/Preview/${videoData}/${episode.id}`} passHref>
                <Box maxWidth="100%" height={{ base: "100%", md: "auto" }}>
                  <VideoPlayer
                    poster={`${pictureServer}/${poster || "No_Image.jpg"}`}
                    name={episode?.title}
                    src={`${videoServer}/${file || "v2.mp4"}`}
                  />
                </Box>
              </Link>
            ) : (
              <></>
            )}
            <Stack
              w={"full"}
              justifyContent={"space-between"}
              direction={["column-reverse", "row"]}
            >
              <VStack
                h={"100%"}
                alignItems={["center", "flex-start"]}
                justifyContent={["center", "space-evenly"]}
              >
                <Heading size={"md"}>
                  Episode {index + 1} : {episode?.title}
                </Heading>
                {/* <Text>{episode?.Duration} min</Text> */}
                <Text textAlign={["center", "left"]} mt={[0, 20]}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  fugit veritatis totam doloremque sunt aperiam quos, animi
                  veniam quia fuga esse similique repellat fugiat officiis nulla
                  culpa maiores magni ratione?Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. At non cupiditate praesentium
                  maiores ipsa aperiam unde explicabo aspernatur, laboriosam
                  expedita pariatur! Molestiae iusto voluptatem recusandae sequi
                  omnis laborum quod enim?
                </Text>
              </VStack>
              <Stack
                direction={{ base: "row", md: "column" }}
                alignSelf={["center", "normal"]}
              >
                <Icon as={FiDownload} boxSize={6} />
              </Stack>
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

const Trailers = ({ trailersData, setSelectedTrailer }) => {
  console.log(trailersData);

  const handleTrailerClick = (trailer) => {
    setSelectedTrailer(trailer);
  };
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
          onClick={() => handleTrailerClick(data)}
        >
          {/* {console.log("ME DATA:", data.file)} */}
          <Video
            src={`${videoServer}/${data?.file || "v2.mp4"}`}
            poster={`${pictureServer}/${data?.poster || "No_Image.jpg"}`}
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
      _hover={{ color: "#55DF01", border: "1px solid #55DF01" }}
      _focus={{ color: "#55DF01", border: "1px solid #55DF01" }}
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

function PurchaseModal({
  onClose,
  isOpen,
  rentedAmount,
  purchasingAmount,
  video_id,
}) {
  const router = useRouter();

  const handleBuyNowClick = () => {
    router.push({
      pathname: "/User/PurchaseForm",
      query: { videoId: video_id },
    });
  };

  const handleRentNowClick = () => {
    router.push({
      pathname: "/User/RentForm",
      query: { videoId: video_id },
    });
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent
          margin={["1rem", "auto"]}
          alignItems={"center"}
          bg={"#323232"}
        >
          <ModalCloseButton />
          <ModalBody p={[8, 10]} w={"100%"} justifyContent={"center"}>
            <Heading mb={8} size={"md"} textAlign={"center"}>
              Purchase Plan
            </Heading>
            <HStack
              p={2}
              borderRadius={"5px"}
              mb={4}
              bg={"#414141"}
              justifyContent={"space-between"}
              spacing={[2, 8]}
            >
              <p>Rent Video</p>
              {/* <p>UHD</p> */}
              <p>${rentedAmount}</p>
              <Button size={"sm"} p={4} onClick={handleRentNowClick}>
                Rent Now
              </Button>
            </HStack>
            <HStack
              p={2}
              borderRadius={"5px"}
              mb={4}
              bg={"#414141"}
              justifyContent={"space-between"}
              spacing={[2, 8]}
            >
              <p>Buy Video</p>
              {/* <p>SD</p> */}
              <p>${purchasingAmount}</p>
              <Button size={"sm"} p={4} onClick={handleBuyNowClick}>
                Buy Now
              </Button>
            </HStack>
            <Flex justifyContent={"center"}>
              <Button px={[10, 16]} my={[4, 8]} onClick={onClose}>
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
  const [content, setContent] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [videoData, setVideoData] = useState();
  const [creatorData, setCreatorData] = useState();
  const [episodesData, setEpisodesData] = useState();
  const [trailersData, setTrailersData] = useState();
  const [videoStatus, setVideoStatus] = useState("none");
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const Cast = videoData?.Cast;
  const Genre = videoData?.Genre;
  const Category = videoData?.category;
  const userData = JSON.parse(localStorage.getItem("User"));
  const userId = userData?.user?.userId;
  console.log("SELCTEDTrailer", selectedTrailer);
  console.log("TrailerDATA", trailersData);
  const replaceSpacesWithPercent20 = (inputString) => {
    return inputString.replace(/ /g, "%20");
  };
  useEffect(() => {
    const fetchVideo = async () => {
      const { id } = router.query;
      console.log(id);
      if (id) {
        try {
          const response = await axios.get(`${server}user/getSerie?id=${id}`, {
            headers: {
              "Content-type": "application/json",
            },
            withCredentials: true,
          });

          setVideoData(response?.data.video);
          setCreatorData(response?.data.contentCreator);
          setTrailersData(response?.data.video?.trailers);
          setEpisodesData(response?.data.video?.episodes);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchVideo();
  }, [router.query.id]);

  useEffect(() => {
    const fetchVideoStatus = async () => {
      try {
        const response = await axios.get(
          `${server}user/checkVideoStatus?id=${videoData.id}&userId=${userId}`,
          {
            headers: {
              "Content-type": "application/json",
            },
            withCredentials: true,
          }
        );

        setVideoStatus(response.data.status);
      } catch (error) {
        console.error("Error fetching video status:", error);
      }
    };

    fetchVideoStatus();
  }, [videoData, userId]);

  const toggleReadMore = () => {
    setisReadMoreOpen(!isReadMoreOpen);
  };

  const AddToFavourite = async () => {
    const userData = JSON.parse(localStorage.getItem("User"));
    const userId = userData?.user?.userId;
    const videoId = videoData.id;

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
        {trailersData && trailersData.length >= 0 && (
          <MainVideo
            src={
              trailersData && trailersData.length > 0
                ? `${videoServer}/${replaceSpacesWithPercent20(
                    trailersData[0]?.file
                  )}`
                : selectedTrailer
                ? `${videoServer}/${replaceSpacesWithPercent20(
                    selectedTrailer.file
                  )}`
                : `${videoServer}/${"v2.mp4"}`
            }
            poster={
              trailersData && trailersData.length > 0
                ? `${pictureServer}/${replaceSpacesWithPercent20(
                    trailersData[0]?.poster
                  )}`
                : selectedTrailer
                ? `${pictureServer}/${replaceSpacesWithPercent20(
                    selectedTrailer?.poster
                  )}`
                : `${pictureServer}/${"No_Image.jpg"}`
            }
            // poster={
            //   selectedTrailer
            //     ? `${pictureServer}/${selectedTrailer.poster}`
            //     : `${pictureServer}/No_Image.jpg`
            // }
            name={selectedTrailer ? selectedTrailer.title : ""}
          />
        )}
      </Box>
      <Box mx={["1rem", "2rem"]}>
        <VStack w={"100%"} alignItems={"flex-start"} mt={[4, 8]}>
          {/* <Heading fontWeight={"semibold"} textAlign={"start"} size={"lg"}>
            Preview
          </Heading> */}
          {/* <HStack spacing={"0.5rem"}>
            <InfoOutline>On Trending</InfoOutline>
            <InfoOutline>4.5</InfoOutline>
            <InfoOutline>18+</InfoOutline>
            <InfoOutline>HD</InfoOutline>
          </HStack> */}
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
                {videoData?.name ? videoData.name : ""}
              </Heading>
              {/* <HStack>
                <BsDot size={32} />
                <Text>2017</Text>
                <BsDot size={32} />
                <Text>3 seasons</Text>
                <BsDot size={32} />
                <Text>Thriler</Text>
              </HStack> */}
            </Box>
            <Stack
              w={["100%", "auto"]}
              direction={["column", "row"]}
              spacing={"1rem"}
            >
              {/* <Button leftIcon={<BiPlay size={24} />} variant={"outline"}>
                Resume
              </Button> */}
              {videoStatus === "none" && (
                <Button
                  leftIcon={<FiShoppingBag size={20} />}
                  variant={"outline"}
                  onClick={onOpen}
                >
                  Purchase
                </Button>
              )}
              {/* <Button leftIcon={<BiPlay size={24} />} variant={"outline"}>
                Trailer
              </Button> */}
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

            {/* <EpisodeOutline text="Similar titles" setContent={setContent}>
              Similar Titles
            </EpisodeOutline> */}

            <EpisodeOutline text="Trailers" setContent={setContent}>
              Trailers
            </EpisodeOutline>

            <EpisodeOutline text="Crew" setContent={setContent}>
              Cast/Crew
            </EpisodeOutline>
          </Flex>
        </Flex>
        {content === "Episodes" ? (
          <Episodes
            episodesData={episodesData}
            videoData={videoData?.id}
            userId={userId}
          />
        ) : content === "Trailers" ? (
          <Trailers
            trailersData={trailersData}
            setSelectedTrailer={setSelectedTrailer}
          />
        ) : content === "Crew" ? (
          <Crew Cast={Cast} Genre={Genre} Category={Category} />
        ) : null}
        {/* : content === "Similar titles" ? (
          <Similar_Titles />
        ) */}
      </Box>
      <PurchaseModal
        onClose={onClose}
        isOpen={isOpen}
        rentedAmount={videoData?.rented_amount}
        purchasingAmount={videoData?.purchasing_amount}
        video_id={videoData?.id}
        user_id={userId}
      />
    </UserTemplate>
  );
};

export default Preview;
