import { Box, Button, Flex, GridItem, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineHeart, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiDislike, BiLike, BiPause, BiPlay } from 'react-icons/bi';
import { BsDownload, BsFillClockFill, BsThreeDotsVertical } from 'react-icons/bs';
import videojs from 'video.js';
import UserTemplate from '../../components/User/UserTemplate';
import { MdCancel } from 'react-icons/md';
import "video.js/dist/video-js.css";
import { Router } from 'next/router';

const Liveshows = [
    {
        name: 'Aus vs SriLanka (Cricket)',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/cricket-stream.jpg',
        date: 'Dec 1',
        viewers: '3000',
    },
    {
        name: 'World Cup Final (Football)',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/cricket-stream.jpg',
        date: 'Jan 15',
        viewers: '5000',
    },
    {
        name: 'Cricket Match 1',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/cricket-stream.jpg',
        date: 'Feb 28',
        viewers: '4000',
    },
    {
        name: 'Football Friendly Match',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/cricket-stream.jpg',
        date: 'Mar 10',
        viewers: '6000',
    },
    {
        name: 'Cricket Tournament Final',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/cricket-stream.jpg',
        date: 'Apr 2',
        viewers: '3500',
    },
    {
        name: 'Football Championship Semifinal',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/cricket-stream.jpg',
        date: 'May 20',
        viewers: '7000',
    },
];

const MainVideo = ({ src, onOptions, poster, name, viewers, date }) => {
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
        <Box position={'relative'} >
            <video
                ref={videoRef}
                className="video-js vjs-default-skin"
                style={{ borderTop: '10px', width: "100%", height: "50vh", objectFit: "cover" }}
                poster={poster}
            />
            <Button
                position="absolute"
                top="30%"
                left="50%"
                boxSize={16}
                transform="translate(-50%, -50%)"
                rounded={'full'}
                size="sm"
                bg="blackAlpha.600"
                color="white"
                onClick={togglePlayPause}
            >
                {streamButton}
            </Button>
            <HStack mb={'2rem'} borderBottomRadius={'10px'} p={4} bg={"#232323"} justifyContent={"space-between"}>
                <VStack>
                    <Heading size={'md'}>{name}</Heading>
                    <Text>{viewers} watching {date}</Text>
                </VStack>

                <HStack>
                    <Button
                        borderRadius={"20px"}
                        size={"sm"}
                        bg={"blackAlpha.600"}
                        color="white"
                        p={0}
                        onClick={handleOptions}>
                        <BsFillClockFill />
                    </Button>

                    <Button
                        position="absolute"
                        top="30%"
                        left="50%"
                        boxSize={16}
                        transform="translate(-50%, -50%)"
                        rounded={'full'}
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
                    <Menu variant={'striped'}>
                        <MenuButton as={Button}
                            borderRadius={"20px"}
                            size={"sm"}
                            bg={"blackAlpha.600"}
                            color="white"
                            p={0}
                        >
                            <Icon as={BsThreeDotsVertical} />
                        </MenuButton>
                        <MenuList p={0} className='striped-menu'>

                            <MenuItem className='striped-item'>
                                <AiOutlineInfoCircle className='striped-icon' />
                                <Text className='striped-text' marginLeft={'1rem'}> Episode Info</Text>
                            </MenuItem>
                            <MenuItem className='striped-item'>
                                <BsDownload className='striped-icon' />
                                <Text className='striped-text' marginLeft={'1rem'}>Buy/Rent/Subscribe</Text>
                            </MenuItem>
                            <MenuItem className='striped-item'>
                                <BiDislike className='striped-icon' />
                                <Text className='striped-text' marginLeft={'1rem'}>Not my type</Text>
                            </MenuItem>
                            <MenuItem className='striped-item'>
                                <BiLike className='striped-icon' />
                                <Text className='striped-text' marginLeft={'1rem'}>My type</Text>
                            </MenuItem>
                            <MenuItem className='striped-item'>
                                <AiOutlineHeart className='striped-icon' />
                                <Text className='striped-text' marginLeft={'1rem'}>Favourite</Text>
                            </MenuItem>
                            <MenuItem className='striped-item'>
                                <MdCancel className='striped-icon' />
                                <Text className='striped-text' marginLeft={'1rem'}>Remove</Text>
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
        <Box position={'relative'} >
            <video
                ref={videoRef}
                className="video-js vjs-default-skin"
                style={{ borderTop: '10px', width: "100%", height: "250px", objectFit: "cover" }}
                poster={poster}
            />
            <Button
                position="absolute"
                top="30%"
                left="50%"
                boxSize={16}
                transform="translate(-50%, -50%)"
                rounded={'full'}
                size="sm"
                bg="blackAlpha.600"
                color="white"
                onClick={togglePlayPause}
            >
                {streamButton}
            </Button>
            <HStack mb={'2rem'} borderBottomRadius={'10px'} p={4} bg={"#232323"} justifyContent={"space-between"}>
                <VStack>
                    <Heading size={'md'}>{name}</Heading>
                    <Text>{viewers} watching {date}</Text>
                </VStack>

                <HStack>
                    <Button
                        borderRadius={"20px"}
                        size={"sm"}
                        bg={"blackAlpha.600"}
                        color="white"
                        p={0}
                        onClick={handleOptions}>
                        <BsFillClockFill />
                    </Button>

                    <Button
                        position="absolute"
                        top="30%"
                        left="50%"
                        boxSize={16}
                        transform="translate(-50%, -50%)"
                        rounded={'full'}
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
                    <Menu variant={'striped'}>
                        <MenuButton as={Button}
                            borderRadius={"20px"}
                            size={"sm"}
                            bg={"blackAlpha.600"}
                            color="white"
                            p={0}
                        >
                            <Icon as={BsThreeDotsVertical} />
                        </MenuButton>
                        <MenuList p={0} className='striped-menu'>

                            <MenuItem className='striped-item'>
                                <AiOutlineInfoCircle className='striped-icon' />
                                <Text className='striped-text' marginLeft={'1rem'}> Episode Info</Text>
                            </MenuItem>
                            <MenuItem className='striped-item'>
                                <BsDownload className='striped-icon' />
                                <Text className='striped-text' marginLeft={'1rem'}>Buy/Rent/Subscribe</Text>
                            </MenuItem>
                            <MenuItem className='striped-item'>
                                <BiDislike className='striped-icon' />
                                <Text className='striped-text' marginLeft={'1rem'}>Not my type</Text>
                            </MenuItem>
                            <MenuItem className='striped-item'>
                                <BiLike className='striped-icon' />
                                <Text className='striped-text' marginLeft={'1rem'}>My type</Text>
                            </MenuItem>
                            <MenuItem className='striped-item'>
                                <AiOutlineHeart className='striped-icon' />
                                <Text className='striped-text' marginLeft={'1rem'}>Favourite</Text>
                            </MenuItem>
                            <MenuItem className='striped-item'>
                                <MdCancel className='striped-icon' />
                                <Text className='striped-text' marginLeft={'1rem'}>Remove</Text>
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
        <Box
            key={index}
            mt={"2rem"}
            border={"1px solid transparent"}
            cursor={"pointer"}
            _hover={{ scale: "1.5" }}
            height={'auto'} minW={["80%", "300px"]}
            mr={"1rem"}
        >
            <MainVideo src={data.src} date={data.date} viewers={data.viewers} poster={data.poster} name={data.name} />
        </Box>
    );
}

const Sports = () => {
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
                        onClick={() => }
                        height={'auto'} minW={["80%", "300px"]}
                        mr={"1rem"}
                    >
                        <Video src={data.src} date={data.date} viewers={data.viewers} poster={data.poster} name={data.name} />
                    </Box>
                </GridItem>
            ))}
        </SimpleGrid>
    );
}

const EpisodeOutline = ({ children, setContent, text }) => {
    const handleClick = (text) => {
        setContent(text);
    }

    return (
        <Button
            _active={{ color: '#55DF01', border: '1px solid #55DF01' }}
            width={'80%'}
            bg={'transparent'}
            variant={'outline'}
            onClick={() => handleClick(text)}
            borderRadius={'0'} py={4} px={2}
            fontSize={{ base: 'sm', md: 'md' }}
        >
            {children}
        </Button>
    );
}

const PPV = () => {
    const [content, setContent] = useState('Episodes');
    const [Button, setButton] = useState();
    return (
        <UserTemplate>
            <Box px={['2rem', '5rem']}>
                <Heading></Heading>
                <Flex alignItems={'center'}>
                    <Flex width={'100%'} py={'2rem'} display={{ base: 'none', md: 'none', lg: 'none', xl: 'flex' }} borderRight={'2px solid black'}>

                        <EpisodeOutline setContent={setContent} text='Sports'>
                            Sports
                        </EpisodeOutline>

                        <EpisodeOutline setContent={setContent} text='Education'>
                            Education
                        </EpisodeOutline>

                        <EpisodeOutline setContent={setContent} text='Live Shopping'>
                            Live Shopping
                        </EpisodeOutline>

                        <EpisodeOutline setContent={setContent} text='Online Classes'>
                            Online Classes
                        </EpisodeOutline>
                    </Flex>
                </Flex>
                {content === 'Sports' ? (
                    <Sports />
                ) : content === 'Education' ? (
                    <Sports />
                ) : content === 'Live Shopping' ? (
                    <Sports />
                ) : content === 'Online Classes' ? (
                    <Sports />
                ) : null}

            </Box>

        </UserTemplate>
    )
}

export default PPV