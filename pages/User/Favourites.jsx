import React, { useRef, useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import UserTemplate from "../../components/User/UserTemplate";
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
import { BiDislike, BiLike, BiPlay } from "react-icons/bi";
import { Tooltip } from "recharts";
import { AiOutlineHeart, AiOutlineInfoCircle } from "react-icons/ai";
import { BsDownload, BsThreeDotsVertical } from "react-icons/bs";
import "./Style.css";
import { MdCancel } from "react-icons/md";
import { useRouter } from "next/router";
import axios from "axios";
import { server } from "../../components/server";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";

const NetflixCategoriesModal = ({ setCategory }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const categories = [
        "Action",
        "Comedy",
        "Drama",
        "Sci-Fi",
        "Fantasy",
        "Horror",
        "Documentary",
    ];

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div>
            <Button
                position="fixed"
                bottom="20px"
                right="20px"
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
                <ModalContent bg={"#232323"}>
                    <ModalHeader fontSize={"2xl"} textAlign={"center"} color={"#414141"}>
                        Choose a Category
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {categories.map((category, index) => (
                            <Button
                                key={index}
                                width="100%"
                                my={4}
                                fontSize={"3xl"}
                                color={"#414141"}
                                bg={"transparent"}
                                onClick={() => {
                                    setCategory(category);
                                    router.push("/User/Dashboard/");
                                    handleClose();
                                }}
                            >
                                {category}
                            </Button>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="gray" onClick={handleClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

const Movies = () => {
    const router = useRouter();
    const { query } = useRouter();
    const [MovieData, setMovieData] = useState([]);
    const [videoData, setVideoData] = useState([]);
    const [MovieCategory, setMovieCategory] = useState();
    // getAllChannelsQuery
    const categoryList = ["Action", "Drama"];
    useEffect(() => {
        const fetchDataForGenres = async () => {
            const categoryData = {};
            const videoType = "Movie";

            for (const category of categoryList) {
                await axios
                    .get(
                        `${server}user/allchannels?videoType=${videoType}&genre=${category}`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                            },
                            withCredentials: true,
                        }
                    )
                    .then((res) => {
                        categoryData[category] = res.data.channels;
                        setMovieData((prevData) => [
                            ...prevData,
                            { [category]: res.data.channels },
                        ]);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        };

        fetchDataForGenres();
    }, []);
    console.log(MovieData);
    return (
        <>
            <Carousal />
            <Box px={["2rem", "5rem"]}>
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
            </Box>

            {MovieData.map((Movie, index) => {
                const category = Object.keys(Movie)[0];
                const channels = Movie[category];
                return (
                    <Box px={["2rem", "5rem"]}>
                        <Heading size={"lg"}>{category}</Heading>
                        <Box>
                            <HStack
                                maxW="100%"
                                overflowX="auto"
                                className="scrollable-container"
                                spacing={"1rem"}
                            >
                                {channels.map((channel, index) => {
                                    const videos = channel.videos;
                                    const creatorId = channel.content_creator_id;

                                    console.log(videos);
                                    return videos.map((video) => {
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
                                    });
                                })}
                            </HStack>
                        </Box>
                    </Box>
                );
            })}
            <NetflixCategoriesModal setCategory={setMovieCategory} />
        </>
    );
};

const Dashboard = (text) => {
    const [content, setContent] = useState("shows");
    const handleClick = (text) => {
        setContent(text);
    };

    return (
        <UserTemplate>
            <Box px={[4, 8]}>
                <Flex alignItems={"center"}>
                    <Flex width={"100%"} py={"2rem"} borderRight={"2px solid black"}>
                        <Button
                            _active={{ color: "#55DF01" }}
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
                            _active={{ color: "#55DF01" }}
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
                            _active={{ color: "#55DF01" }}
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
            <Movies />
        </UserTemplate>
    );
};

export default Dashboard;