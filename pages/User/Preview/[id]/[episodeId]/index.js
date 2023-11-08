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
import UserTemplate from "../../../../../components/User/UserTemplate";
import { FiDownload, FiEdit3, FiShoppingBag } from "react-icons/fi";
import { VideoPlayer } from "../../../../../components/Client/Reusable Components/VideoPlayer";
import { Video } from "../../../Dashboard";
import "../../../Style.css";
import axios from "axios";
import {
  pictureServer,
  server,
  videoServer,
} from "../../../../../components/server";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Link from "next/link";

const MainVideo = ({ src, poster, name, onOptions }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const videoJsOptions = {
      autoplay: false,
      muted: false,
      responsive: true,
      controls: true,
      disablePictureInPicture: true,
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

    player.on("play", () => {
      setPlaying(true);
    });

    player.on("pause", () => {
      setPlaying(false);
    });

    player.on("ended", () => {
      setPlaying(false);
    });

    // return () => {
    //   if (player) {
    //     player.dispose();
    //   }
    // };
  }, []);

  const handleClick = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
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
        playsInline
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

const EpisodeOutline = ({ children, setContent, text }) => {
  const handleClick = (text) => {
    setContent(text);
  };

  return (
    <Button
      _hover={{ color: "#55DF01", border: "1px solid #55DF01" }}
      _focus={{ color: "#55DF01", border: "1px solid #55DF01" }}
      _active={{ color: "#55DF01", border: "1px solid #55DF01" }}
      width={"100%"}
      bg={"transparent"}
      fontWeight={["normal", "bold"]}
      border={"1px solid #55DF01"}
      color={"#55DF01"}
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

const Preview = () => {
  const router = useRouter();
  const [isReadMoreOpen, setisReadMoreOpen] = useState(false);
  const [content, setContent] = useState("Episodes");
  const [videoData, setVideoData] = useState();
  // const [creatorData, setCreatorData] = useState();
  const [episodesData, setEpisodesData] = useState();
  const [episodeData, setEpisodeData] = useState();
  const userData = JSON.parse(localStorage.getItem("User"));
  const userId = userData?.user?.userId;
  const replaceSpacesWithPercent20 = (inputString) => {
    return inputString.replace(/ /g, "%20");
  };
  useEffect(() => {
    const fetchVideo = async () => {
      const { id } = router.query;
      if (id) {
        try {
          const response = await axios.get(`${server}user/getSerie?id=${id}`, {
            headers: {
              "Content-type": "application/json",
            },
            withCredentials: true,
          });
          setVideoData(response?.data.video);
          setEpisodesData(response?.data.video?.episodes);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchVideo();
  }, [router.query.id]);

  useEffect(() => {
    const fetchEpisode = async () => {
      const { episodeId } = router.query;
      console.log("EPISODE ID", episodeId);
      if (episodeId) {
        try {
          const episodeResponse = await axios.get(
            `${server}creator/episodes/${episodeId}`,
            {
              headers: {
                "Content-type": "application/json",
              },
              withCredentials: true,
            }
          );

          console.log("EPI RES:", episodeResponse.data.episode);
          setEpisodeData(episodeResponse?.data.episode);
        } catch (err) {
          console.error(err);
        }
      }
    };

    fetchEpisode();
  }, [router.query.episodeId]);

  const toggleReadMore = () => {
    setisReadMoreOpen(!isReadMoreOpen);
  };

  return (
    <UserTemplate>
      <Box
        mt={"1rem"}
        border={"1px solid transparent"}
        cursor={"pointer"}
        maxW={"100vw"}
        overflow={"hidden"}
      >
        {episodeData && (
          <MainVideo
            src={
              episodeData
                ? `${videoServer}/${replaceSpacesWithPercent20(
                    episodeData?.file
                  )}`
                : `${videoServer}/${"v2.mp4"}`
            }
            poster={
              episodeData
                ? `${pictureServer}/${replaceSpacesWithPercent20(
                    episodeData?.poster
                  )}`
                : `${videoServer}/${"No_Image.jpg"}`
            }
            name={episodeData?.title}
          />
        )}
      </Box>
      <Box mx={["1rem", "2rem"]}>
        <VStack w={"100%"} alignItems={["center", "flex-start"]} mb={[10, 20]}>
          <Stack
            w={"100%"}
            direction={["column", "row"]}
            my={"1rem"}
            spacing={"1rem"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box w={"70%"}>
              <Heading size={"xl"} fontWeight={"bold"}>
                {episodeData?.title ? episodeData.title : ""}
              </Heading>
              <span>{episodeData?.views} Views</span>
            </Box>
            {/* <Stack
              w={["100%", "auto"]}
              direction={["column", "row"]}
              spacing={"1rem"}
            > */}
            <Button
              leftIcon={<ArrowBackIcon size={20} />}
              variant={"outline"}
              w={"auto"}
              onClick={() => router.back()}
            >
              Go Back
            </Button>
            {/* </Stack> */}
          </Stack>

          <Box w={["100%", "40%"]}>
            <Collapse startingHeight={"20"} isOpen={isReadMoreOpen}>
              <Text>{episodeData?.description}</Text>
            </Collapse>
            <Button size="sm" onClick={toggleReadMore}>
              Show {isReadMoreOpen ? "Less" : "More"}
            </Button>
          </Box>
        </VStack>

        <Flex
          width={"100%"}
          py={["auto", "2rem"]}
          borderRight={"2px solid black"}
        >
          <EpisodeOutline text="Episodes" setContent={setContent}>
            Episodes
          </EpisodeOutline>
        </Flex>
        {content === "Episodes" ? (
          <Episodes
            episodesData={episodesData}
            videoData={videoData?.id}
            userId={userId}
          />
        ) : null}
      </Box>
    </UserTemplate>
  );
};

export default Preview;
