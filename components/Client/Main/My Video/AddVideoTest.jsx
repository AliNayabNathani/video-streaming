import {
    Box, Button, Checkbox, FormLabel, HStack, Heading, Icon, Image, Input, Menu, MenuButton, MenuItem, MenuList, Select, Stack, Text, Textarea, VStack, useColorModeValue, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
    Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineVideoCameraAdd, } from 'react-icons/ai';
import { FaPlus } from "react-icons/fa";
import { useDetailContext } from "../../Context/context";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiImageAdd, BiPlay } from "react-icons/bi";
import { Tooltip } from "recharts";
import videojs from "video.js";
import axios from "axios";
import { server } from "../../../server";

const Video = ({ src, onOptions, poster, name }) => {
    const videoRef = useRef(null);

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
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                poster={poster}
            />
            <HStack p={2} bg={"whiteAlpha.100"} justifyContent={"space-between"}>
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
                    <Tooltip hasArrow label={name} bg="white">
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
                    </Tooltip>
                    <Button
                        borderRadius={"20px"}
                        size={"sm"}
                        bg={"blackAlpha.600"}
                        color="white"
                        p={0}
                        onClick={handleOptions}
                    >
                        <BsThreeDotsVertical />
                    </Button>
                </HStack>
            </HStack>
        </Box>
    );
};

const FormLabelOutline = ({ children }) => (
    <Text width={'100%'} color={'white'} textAlign={'start'} fontSize={'1rem'} fontWeight={'bold'}>
        {children}
    </Text>
)

const VideoOutline = ({ index, setEpisodes, episodes, data }) => {
    const [serverImage, setServerImage] = useState();
    const [serverVideo, setServerVideo] = useState();
    const [uploading, setUploading] = useState(false);
    const videoInputRef = useRef(null);
    const imageInputRef = useRef(null);
    console.log('Episodes: ', episodes);

    const handleTitleChange = (e, index) => {
        const newEpisodes = [...episodes];
        newEpisodes[index].title = e.target.value;
        setEpisodes(newEpisodes);
    };

    const handleDescriptionChange = (e, index) => {
        const newEpisodes = [...episodes];
        newEpisodes[index].desc = e.target.value;
        setEpisodes(newEpisodes);
    };

    const handleVideoChange = (e, index) => {
        const selectedFile = e.target.files[0].name;
        const newEpisodes = [...episodes];
        newEpisodes[index].episodeVideo = selectedFile;
        setEpisodes(newEpisodes);
    };

    const handlePictureChange = (e, index) => {
        const selectedFile = e.target.files[0].name;
        const newEpisodes = [...episodes];
        newEpisodes[index].poster = selectedFile;
        setEpisodes(newEpisodes);
    };

    const handleDelete = () => {
        const newEpisodes = [...episodes];
        newEpisodes.splice(index, 1);
        setEpisodes(newEpisodes);
    };

    const handlePictureSelect = (e, index) => {
        const selectedFile = e.target === imageInputRef.current ? e.target.files[0] : null;
        setServerImage(selectedFile);
        if (selectedFile) {
            const objectURL = URL.createObjectURL(selectedFile);
        }
        const formData = new FormData();
        formData.append("image", selectedFile);
        setUploading(true);
        axios
            .post(server + "other/uploadPicture", formData, {
                header: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setUploading(false);
            });
        handlePictureChange(e, index);
    };

    function LoadingSpinner() {
        return (
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        );
    }
    const handleVideoSelect = (e, index) => {
        const selectedFile = e.target === videoInputRef.current ? e.target.files[0] : null;
        setServerVideo(selectedFile);

        const formData = new FormData();
        formData.append("Video", selectedFile);
        setUploading(true);

        axios
            .post(server + "other/uploadVideo", formData, {
                header: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setUploading(false);
            })
        handleVideoChange(e, index)
    }
    return (
        <HStack width={'100%'} bg={'whiteAlpha.400'} p={8} border={'2px solid black'}>
            {uploading && <LoadingSpinner />}

            <Box height={'100%'}>
                <Image w="100%" maxW="500px" alt={data.poster} objectFit={'cover'} src={data?.poster ? `http://localhost:5000/uploadPicture/${data.poster}` : `https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png`} />
            </Box>
            <VStack w={'100%'} ml={'1rem'} alignSelf={'flex-start'}>
                <Input _placeholder={{ color: 'white' }} onChange={(e) => handleTitleChange(e, index)} name="title" variant={'unstyled'} placeholder="Add Title" />
                <Input _placeholder={{ color: 'white' }} onChange={(e) => handleDescriptionChange(e, index)} name="desc" variant={'unstyled'} placeholder="Add Description" />
                <HStack w={"100%"} >
                    <label style={{ cursor: "pointer" }}>
                        <Input
                            type="file"
                            accept="video/*"
                            display="none"
                            name="video"
                            ref={videoInputRef}
                            justifyContent={"center"}
                            onChange={(e) => handleVideoSelect(e, index)}
                            required
                        />
                        {serverVideo ? serverVideo.name : 'Add Video File'}
                    </label>
                </HStack>

                <HStack w={"100%"} >
                    <label style={{ cursor: "pointer" }}>
                        <Input
                            type="file"
                            accept="image/*"
                            display="none"
                            name="poster"
                            ref={imageInputRef}
                            justifyContent={"center"}
                            onChange={(e) => handlePictureSelect(e, index)}
                            required
                        />
                        {serverImage ? serverImage.name : 'Add Picture File'}
                    </label>
                </HStack>

            </VStack>
            <Icon onClick={handleDelete} cursor={'pointer'} color={'black'} as={AiOutlineCloseCircle} alignSelf={'flex-start'} boxSize={7} />
        </HStack>
    );
}

const TrailerOutline = ({ index, setTrailers, trailers, handleAddTrailer, data }) => {
    const { onOpen, isOpen, onClose } = useDisclosure();

    const handleDelete = () => {
        const newTrailers = [...trailers];
        newTrailers.splice(index, 1);
        setTrailers(newTrailers);
    };
    return (
        <HStack width={'100%'} bg={'whiteAlpha.400'} p={8} border={'2px solid black'}>
            <VStack alignItems={['center', 'flex-start']} p={6}>
                <Stack direction={'row-reverse'}>
                    <HStack>
                        <Button
                            bg={'#414141'}
                            bgImage={data?.trailerPoster ? `http://localhost:5000/uploadPicture/${data.trailerPoster}` : null}
                            bgSize={'contain'}
                            color={'#55DF01'}
                            fontSize={'inherit'}
                            textDecor={'underline'}
                            w={'150px'} h={'150px'}
                            onClick={onOpen}
                        >
                            Upload File
                        </Button>

                    </HStack>
                    <UploadModal index={index} handleAddTrailer={handleAddTrailer} setTrailers={setTrailers} trailers={trailers} isOpen={isOpen} onClose={onClose} />
                </Stack>
                <Text>{data?.trailerTitle}</Text>
            </VStack>
            <Icon onClick={handleDelete} cursor={'pointer'} color={'black'} as={AiOutlineCloseCircle} alignSelf={'flex-start'} boxSize={7} />
        </HStack>
    );
}

const UploadModal = ({ isOpen, onClose, setTrailers, trailers, handleAddTrailer, index }) => {
    const [serverImage, setServerImage] = useState();
    const [serverVideo, setServerVideo] = useState();
    const [uploading, setUploading] = useState(false);
    const videoInputRef = useRef(null);
    const imageInputRef = useRef(null);
    console.log('Trailers', trailers);

    const handleTitleChange = (e, index) => {
        const newTrailers = [...trailers];
        newTrailers[index].trailerTitle = e.target.value;
        setTrailers(newTrailers);
    };

    const handleDescriptionChange = (e, index) => {
        const newTrailers = [...trailers];
        newTrailers[index].description = e.target.value;
        setTrailers(newTrailers);
    };

    const handleVideoChange = (e, index) => {
        const selectedFile = e.target.files[0].name;
        const newTrailers = [...trailers];
        newTrailers[index].trailerVideo = selectedFile;
        setTrailers(newTrailers);
    };

    const handlePictureChange = (e, index) => {
        const selectedFile = e.target.files[0].name;
        const newTrailers = [...trailers];
        newTrailers[index].trailerPoster = selectedFile;
        setTrailers(newTrailers);
    };

    const handlePictureSelect = (e, index) => {
        const selectedFile = e.target === imageInputRef.current ? e.target.files[0] : null;
        setServerImage(selectedFile);
        if (selectedFile) {
            const objectURL = URL.createObjectURL(selectedFile);
        }
        const formData = new FormData();
        formData.append("image", selectedFile);
        setUploading(true);
        axios
            .post(server + "other/uploadPicture", formData, {
                header: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setUploading(false);
            });
        handlePictureChange(e, index);
    };

    function LoadingSpinner() {
        return (
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        );
    }
    const handleVideoSelect = (e, index) => {
        const selectedFile = e.target === videoInputRef.current ? e.target.files[0] : null;
        setServerVideo(selectedFile);

        const formData = new FormData();
        formData.append("Video", selectedFile);
        setUploading(true);

        axios
            .post(server + "other/uploadVideo", formData, {
                header: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setUploading(false);
            })
        handleVideoChange(e, index)
    }

    const handleSubmit = () => {
        handleAddTrailer();
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create a New Entry</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {uploading && LoadingSpinner}
                    <VStack w={'100%'} ml={'1rem'} alignSelf={'flex-start'}>
                        <Input _placeholder={{ color: 'white' }} onChange={(e) => handleTitleChange(e, index)} name="title" variant={'unstyled'} placeholder="Add Title" />
                        <Input _placeholder={{ color: 'white' }} onChange={(e) => handleDescriptionChange(e, index)} name="desc" variant={'unstyled'} placeholder="Add Description" />
                        <HStack w={"100%"} >
                            <label style={{ cursor: "pointer" }}>
                                <Input
                                    type="file"
                                    accept="video/*"
                                    display="none"
                                    name="video"
                                    ref={videoInputRef}
                                    justifyContent={"center"}
                                    onChange={(e) => handleVideoSelect(e, index)}
                                    required
                                />
                                {serverVideo ? serverVideo.name : 'Add Video File'}
                            </label>
                        </HStack>

                        <HStack w={"100%"} >
                            <label style={{ cursor: "pointer" }}>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    display="none"
                                    name="poster"
                                    ref={imageInputRef}
                                    justifyContent={"center"}
                                    onChange={(e) => handlePictureSelect(e, index)}
                                    required
                                />
                                {serverImage ? serverImage.name : 'Add Picture File'}
                            </label>
                        </HStack>

                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                        Submit
                    </Button>
                    <Button variant="ghost" onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default function AddVideoTest({ channelId }) {
    const [isVideoCreated, setIsVideoCreated] = useState(false);
    const [episodes, setEpisodes] = useState([
        {
            title: '',
            desc: '',
            episodeVideo: '',
            poster: '',
        },
    ]);
    const [trailers, setTrailers] = useState([
        {
            trailerTitle: '',
            description: '',
            trailerVideo: '',
            trailerPoster: '',
        },
    ]);

    const handleAddEpisode = () => {
        setEpisodes([...episodes, {
            title: '',
            description: '',
            video: '',
            poster: '',
        }]);
    };

    const handleAddTrailer = () => {
        setTrailers([...trailers, {
            trailerTitle: '',
            description: '',
            trailerVideo: '',
            trailerPoster: '',
        }]);
    };

    const [input, setInput] = useState({
        title: "",
        rentAmount: "",
        purchaseAmount: "",
        genre: "",
        description: "",
        castDetails: "",
        category: "",
        country: "",
        language: "",
        type: "",
    });

    const [errors, setErrors] = useState({
        title: "",
        rentAmount: "",
        purchaseAmount: "",
        genre: "",
        description: "",
        castDetails: "",
        category: "",
        country: "",
        language: "",
        type: "",
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput({ ...input, [name]: value });
    }

    const handleSelectChange = (e, selectedValue) => {
        const name = e.target.name;
        setInput({ ...input, [name]: selectedValue });
        console.log(input);
    }
    console.log(input);
    const createVideo = async () => {

        const videoTitle = input.title;
        const rented_amount = input.rentAmount;
        const purchasing_amount = input.purchaseAmount;
        const Genre = input.genre;
        const description = input.description;
        const Cast = input.castDetails;
        const Type = input.type;
        const formData = new FormData();

        // Append non-file data
        formData.append('videoTitle', videoTitle);
        formData.append('rented_amount', rented_amount);
        formData.append('purchasing_amount', purchasing_amount);
        formData.append('Genre', Genre);
        formData.append('description', description);
        formData.append('Cast', Cast);
        formData.append('Type', Type);
        const filteredTrailers = trailers.filter(trailer => Object.values(trailer).some(value => value !== ''));
        const filteredEpisodes = episodes.filter(episode => Object.values(episode).some(value => value !== ''));

        formData.append('trailer', filteredTrailers);
        formData.append('episodes', filteredEpisodes);
        // // Append trailers data (assuming trailers is an array)
        // trailers
        //     .filter(trailer => Object.values(trailer).some(value => value !== ''))
        //     .forEach((trailer, index) => {
        //         formData.append(`trailers[${index}][trailerTitle]`, trailer.trailerTitle);
        //         formData.append(`trailers[${index}][description]`, trailer.description);
        //         formData.append(`trailers[${index}][trailerVideo]`, trailer.trailerVideo);
        //         formData.append(`trailers[${index}][trailerPoster]`, trailer.trailerPoster);
        //     });

        // // Append episodes data (assuming episodes is an array)
        // episodes
        //     .filter(episode => Object.values(episode).some(value => value !== ''))
        //     .forEach((episode, index) => {
        //         formData.append(`episodes[${index}][title]`, episode.title);
        //         formData.append(`episodes[${index}][description]`, episode.description);
        //         formData.append(`episodes[${index}][episodeVideo]`, episode.episodeVideo);
        //         formData.append(`episodes[${index}][poster]`, episode.poster);
        //     });
        console.log(videoTitle, rented_amount, purchasing_amount, Genre, description, Cast, Type);

        const response = await axios.post(server + 'creator/myvideo/add',
            formData, {
            headers: {
                'Content-type': 'multipart/form-data',
            },
            withCredentials: true,
        });
        console.log(response);
        if (response.data.status == 200) {
            setIsVideoCreated(true);
        }
    }

    return (
        <>
            <Box p={'3rem'} mt={'2rem'} bg={'#232323'}>
                <Stack justifyContent={'space-between'} direction={{ base: 'column', md: 'row' }}>
                    <VStack width={['100%', '40%']} alignItems={'flex-start'}>

                        <FormLabelOutline>Title</FormLabelOutline>
                        <Input name={'title'} value={input.title} onChange={handleInput} bg="rgba(255, 255, 255, 0.24)" borderColor='transparent' />

                        <FormLabelOutline>Rent Amount</FormLabelOutline>
                        <Input name="rentAmount" value={input.rentAmount} onChange={handleInput} type="number" bg="rgba(255, 255, 255, 0.24)" borderColor='transparent' />

                        <FormLabelOutline>Purchasing Amount</FormLabelOutline>
                        <Input name="purchaseAmount" value={input.purchaseAmount} onChange={handleInput} type="number" bg="rgba(255, 255, 255, 0.24)" borderColor='transparent' />

                        <FormLabelOutline>Add Genre</FormLabelOutline>
                        <Input name="genre" value={input.genre} onChange={handleInput} bg="rgba(255, 255, 255, 0.24)" borderColor='transparent' />

                        <FormLabelOutline>Description</FormLabelOutline>
                        <Textarea name="description" value={input.description} onChange={handleInput} bg="rgba(255, 255, 255, 0.24)" borderColor='transparent' />

                        <FormLabelOutline>Cast/Crew Details</FormLabelOutline>
                        <Textarea name="castDetails" value={input.castDetails} onChange={handleInput} bg="rgba(255, 255, 255, 0.24)" borderColor='transparent' />

                        <FormLabelOutline>Category</FormLabelOutline>
                        <Menu>
                            <MenuButton name="category" w={'100%'} p={2} borderRadius={'5px'} as={Box} bg="rgba(255, 255, 255, 0.24)">{input.category ? input.category : 'educational'} </MenuButton>
                            <MenuList p={0} m={0}>
                                <MenuItem name="category" onClick={(e) => handleSelectChange(e, 'Educational')} value="Educational">Educational</MenuItem>
                                <MenuItem name="category" onClick={(e) => handleSelectChange(e, 'Short Film')} value="Short Film">Short Film</MenuItem>
                            </MenuList>
                        </Menu>

                        <FormLabelOutline>Country/Region</FormLabelOutline>
                        <Menu>
                            <MenuButton name="country" w={'100%'} p={2} borderRadius={'5px'} as={Box} bg="rgba(255, 255, 255, 0.24)">
                                {input.country ? input.country : 'US'}
                            </MenuButton>
                            <MenuList p={0} m={0}>
                                <MenuItem name="country" onClick={(e) => handleSelectChange(e, 'US')} value="US">US</MenuItem>
                                <MenuItem name="country" onClick={(e) => handleSelectChange(e, 'Africa')} value="Africa">Africa</MenuItem>
                                <MenuItem name="country" onClick={(e) => handleSelectChange(e, 'UK')} value="UK">UK</MenuItem>
                            </MenuList>
                        </Menu>

                        <FormLabelOutline>Language</FormLabelOutline>
                        <Menu>
                            <MenuButton name="language" w={'100%'} p={2} borderRadius={'5px'} as={Box} bg={'whiteAlpha.400'}>
                                {input.language ? input.language : 'English'}
                            </MenuButton>
                            <MenuList p={0} m={0}>
                                <MenuItem name="language" onClick={(e) => handleSelectChange(e, 'English')} value="English">English</MenuItem>
                                <MenuItem name="language" onClick={(e) => handleSelectChange(e, 'Swahili')} value="Swahili">Swahili</MenuItem>
                                <MenuItem name="language" onClick={(e) => handleSelectChange(e, 'French')} value="French">French</MenuItem>
                            </MenuList>
                        </Menu>

                        <FormLabelOutline>Select Type</FormLabelOutline>
                        <Menu>
                            <MenuButton name="type" w={'100%'} p={2} borderRadius={'5px'} as={Box} bg="rgba(255, 255, 255, 0.24)">
                                {input.type ? input.type : 'Movie'}
                            </MenuButton>
                            <MenuList p={0} m={0}>
                                <MenuItem name="type" onClick={(e) => handleSelectChange(e, 'Movie')} value="Movie">Movie</MenuItem>
                                <MenuItem name="type" onClick={(e) => handleSelectChange(e, 'Series')} value="Series">Series</MenuItem>
                            </MenuList>
                        </Menu>
                    </VStack>

                    <VStack width={['100%', '50%']} alignItems={'flex-start'}>

                        <FormLabelOutline>Trailers (if any)</FormLabelOutline>
                        <HStack w={'100%'} overflowX={'auto'}>
                            {trailers.map((data, index) => (
                                <TrailerOutline
                                    data={data}
                                    handleAddTrailer={handleAddTrailer}
                                    index={index}
                                    setTrailers={setTrailers}
                                    trailers={trailers}
                                    key={index}
                                />
                            ))}
                        </HStack>

                        <FormLabel>Trailer Langauge (Optional)</FormLabel>
                        <Menu>
                            <MenuButton name="language" w={'100%'} p={2} borderRadius={'5px'} as={Box} bg={'whiteAlpha.400'}>
                                {input.language ? input.language : 'English'}
                            </MenuButton>
                            <MenuList p={0} m={0}>
                                <MenuItem name="language" onClick={(e) => handleSelectChange(e, 'English')} value="English">English</MenuItem>
                                <MenuItem name="language" onClick={(e) => handleSelectChange(e, 'Swahili')} value="Swahili">Swahili</MenuItem>
                                <MenuItem name="language" onClick={(e) => handleSelectChange(e, 'French')} value="French">French</MenuItem>
                            </MenuList>
                        </Menu>


                        <FormLabelOutline>Upload Episodes</FormLabelOutline>
                        {episodes.map((data, index) => {
                            return (
                                <VideoOutline
                                    data={data}
                                    episodes={episodes}
                                    setEpisodes={setEpisodes}
                                    index={index} key={index} />
                            );
                        })}

                        <Button
                            fontSize={'1.1rem'}
                            justifyContent={'space-between'}
                            width={'100%'}
                            onClick={handleAddEpisode}
                            rightIcon={<FaPlus size={20} />}
                        >
                            Add New Episodes</Button>

                        <HStack>
                            <Text
                                color={'#55DF01'}
                                textDecor={'underline'}
                                onClick={() => document.getElementById('fileInput').click()}
                            >
                                Add Audio File
                            </Text>
                            <input
                                type="file"
                                id="audioInput"
                                style={{ display: 'none' }}
                                accept="audio/*"
                            />
                        </HStack>

                        <Menu>
                            <MenuButton name="language" w={'100%'} p={2} borderRadius={'5px'} as={Box} bg={'whiteAlpha.400'}>
                                {input.language ? input.language : 'English'}
                            </MenuButton>
                            <MenuList p={0} m={0}>
                                <MenuItem name="language" onClick={(e) => handleSelectChange(e, 'English')} value="English">English</MenuItem>
                                <MenuItem name="language" onClick={(e) => handleSelectChange(e, 'Swahili')} value="Swahili">Swahili</MenuItem>
                                <MenuItem name="language" onClick={(e) => handleSelectChange(e, 'French')} value="French">French</MenuItem>
                            </MenuList>
                        </Menu>

                        <HStack w={'100%'} >
                            <Button variant={'outline'} w={'50%'}>Cancel</Button>
                            <Button w={'50%'} onClick={createVideo}>Submit</Button>
                        </HStack>
                    </VStack>
                </Stack>
            </Box >
        </>
    )
}