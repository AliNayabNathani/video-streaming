import {
  Box,
  Button,
  Flex,
  GridItem,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineHeart, AiOutlineInfoCircle } from "react-icons/ai";
import { BiDislike, BiLike, BiPause, BiPlay } from "react-icons/bi";
import {
  BsDownload,
  BsFillClockFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import videojs from "video.js";
import UserTemplate from "../../components/User/UserTemplate";
import { MdCancel } from "react-icons/md";
import "video.js/dist/video-js.css";
import { Router } from "next/router";

const Liveshows = [
  {
    name: "Aus vs SriLanka (Cricket)",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/cricket-stream.jpg",
    date: "Dec 1",
    viewers: "3000",
    start_time: "4:30 AM",
    end_time: "6:30 AM",
    start_date: "24-10-2023",
    end_date: "24-10-2023",
  },
  {
    name: "World Cup Final (Football)",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/cricket-stream.jpg",
    date: "Jan 15",
    viewers: "5000",
    start_time: "7:00 PM",
    end_time: "9:30 PM",
    start_date: "24-10-2023",
    end_date: "24-10-2023",
  },
  {
    name: "Cricket Match 1",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/cricket-stream.jpg",
    date: "Feb 28",
    viewers: "4000",
    start_time: "2:15 PM",
    end_time: "4:45 PM",
    start_date: "24-10-2023",
    end_date: "24-10-2023",
  },
  {
    name: "Football Friendly Match",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/cricket-stream.jpg",
    date: "Mar 10",
    viewers: "6000",
    start_time: "6:45 PM",
    end_time: "9:00 PM",
    start_date: "24-10-2023",
    end_date: "24-10-2023",
  },
  {
    name: "Cricket Tournament Final",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/cricket-stream.jpg",
    date: "Apr 2",
    viewers: "3500",
    start_time: "3:30 PM",
    end_time: "5:45 PM",
    start_date: "24-10-2023",
    end_date: "24-10-2023",
  },
  {
    name: "Football Championship Semifinal",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster: "/assests/Shows/cricket-stream.jpg",
    date: "May 20",
    viewers: "7000",
    start_time: "8:15 PM",
    end_time: "10:30 PM",
    start_date: "24-10-2023",
    end_date: "24-10-2023",
  },
];

const MainVideo = ({ src, onOptions, poster, name, viewers, date }) => {
  const videoRef = useRef(null);
  const count = useRef(0);
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
    <Box position={"relative"}>
      <video
        ref={videoRef}
        className="video-js vjs-default-skin"
        style={{
          borderTop: "10px",
          width: "100%",
          height: "50vh",
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
      <HStack
        mb={"2rem"}
        borderBottomRadius={"10px"}
        p={4}
        bg={"#232323"}
        justifyContent={"space-between"}
      >
        <VStack>
          <Heading size={"md"}>{name}</Heading>
          <Text>
            {viewers} watching {date}
          </Text>
        </VStack>

        <HStack>
          <Button
            borderRadius={"20px"}
            size={"sm"}
            bg={"blackAlpha.600"}
            color="white"
            p={0}
            onClick={handleOptions}
          >
            <BsFillClockFill />
          </Button>

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

const Video = ({ src, onOptions, poster, name, viewers, date }) => {
  const videoRef = useRef(null);
  const count = useRef(0);
  const [streamButton, setStreamButton] = useState(<BiPlay />);
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
    <Box position={"relative"}>
      <video
        ref={videoRef}
        className="video-js vjs-default-skin"
        style={{
          borderTop: "10px",
          width: "100%",
          height: "250px",
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
      <HStack
        mb={"2rem"}
        borderBottomRadius={"10px"}
        p={4}
        bg={"#232323"}
        justifyContent={"space-between"}
      >
        <VStack>
          <Heading size={"md"}>{name}</Heading>
          <Text>
            {viewers} watching {date}
          </Text>
        </VStack>

        <HStack>
          <Button
            borderRadius={"20px"}
            size={"sm"}
            bg={"blackAlpha.600"}
            color="white"
            p={0}
            onClick={handleOptions}
          >
            <BsFillClockFill />
          </Button>

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

const PPVContent = () => {
  return (
    <Box p={0}>
      <Stack direction={["column", "row"]} justifyContent={"space-around"}>
        <Box
          mt={"2rem"}
          border={"1px solid transparent"}
          cursor={"pointer"}
          _hover={{ scale: "1.5" }}
          height={"auto"}
          minW={["100%", "60vw"]}
          mr={"1rem"}
          justifyContent={"flex-start"}
        >
          <MainVideo
            src={Liveshows[0].src}
            date={Liveshows[0].date}
            viewers={Liveshows[0].viewers}
            poster={Liveshows[0].poster}
            name={Liveshows[0].name}
          />
        </Box>
        <VStack mt={8} justifyContent={"flex-start"} alignItems={"flex-start"}>
          <Text>Start Date: {Liveshows[0].start_date}</Text>
          <Text>Start Time: {Liveshows[0].start_time}</Text>
          <Text>End Date: {Liveshows[0].end_date}</Text>
          <Text>End Time: {Liveshows[0].end_time}</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

const Sports = ({ setContent, setCategories }) => {
  const handleContent = () => {
    setContent(true);
    setCategories("");
  };
  return (
    <SimpleGrid columns={[1, 2]}>
      {Liveshows.map((data, index) => (
        <GridItem>
          <Box
            key={index}
            mt={"2rem"}
            border={"1px solid transparent"}
            cursor={"pointer"}
            _hover={{ scale: "1.5" }}
            onClick={handleContent}
            height={"auto"}
            minW={["80%", "300px"]}
            mr={"1rem"}
          >
            <Video
              src={data.src}
              date={data.date}
              viewers={data.viewers}
              poster={data.poster}
              name={data.name}
            />
          </Box>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

const EpisodeOutline = ({ children, setCategories, setContent, text }) => {
  const handleClick = (text) => {
    setCategories(text);
    setContent(false);
  };

  return (
    <Button
      _active={{ color: "#55DF01", border: "1px solid #55DF01" }}
      width={"80%"}
      bg={"transparent"}
      variant={"outline"}
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

const PPV = () => {
  const [content, setContent] = useState(false);
  const [Categories, setCategories] = useState("Sports");
  return (
    <UserTemplate>
      <Box px={["2rem", "5rem"]}>
        <Heading></Heading>
        <Flex alignItems={"center"}>
          <Flex
            width={"100%"}
            py={"2rem"}
            display={{ base: "none", md: "none", lg: "none", xl: "flex" }}
            borderRight={"2px solid black"}
          >
            <EpisodeOutline
              setCategories={setCategories}
              setContent={setContent}
              text="Sports"
            >
              Sports
            </EpisodeOutline>

            <EpisodeOutline
              setCategories={setCategories}
              setContent={setContent}
              text="Education"
            >
              Education
            </EpisodeOutline>

            <EpisodeOutline
              setCategories={setCategories}
              setContent={setContent}
              text="Live Shopping"
            >
              Live Shopping
            </EpisodeOutline>

            <EpisodeOutline
              setCategories={setCategories}
              setContent={setContent}
              text="Online Classes"
            >
              Online Classes
            </EpisodeOutline>
          </Flex>
        </Flex>
        {Categories === "Sports" ? (
          <Sports setContent={setContent} setCategories={setCategories} />
        ) : Categories === "Education" ? (
          <Sports />
        ) : Categories === "Live Shopping" ? (
          <Sports />
        ) : Categories === "Online Classes" ? (
          <Sports />
        ) : null}

        {content && <PPVContent />}
      </Box>
    </UserTemplate>
  );
};

export default PPV;
