import React, { useRef, useState, useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import videojs from "video.js";
import "video.js/dist/video-js.css";
import UserTemplate from '../../components/User/UserTemplate';
import { Box, Button, Divider, Flex, HStack, Heading, Icon, Image, Menu, MenuButton, MenuItem, MenuList, Select, Stack, Text } from '@chakra-ui/react';
import { BiDislike, BiLike, BiPlay } from 'react-icons/bi';
import { Tooltip } from 'recharts';
import { AiOutlineHeart, AiOutlineInfoCircle } from 'react-icons/ai';
import { BsDownload, BsThreeDotsVertical } from 'react-icons/bs';
import './Style.css';
import { MdCancel } from 'react-icons/md';
import { Router, useRouter } from 'next/router';

const ShowInfo = [
    {
        name: 'Dark',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/dark-small.jpg',
    },
    {
        name: 'Dark',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/dark-small.jpg',
    },
    {
        name: 'Dark',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/dark-small.jpg',
    },
    {
        name: 'Dark',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/dark-small.jpg',
    },
    {
        name: 'Dark',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/dark-small.jpg',
    },
    {
        name: 'Dark',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/dark-small.jpg',
    },
    {
        name: 'Dark',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/dark-small.jpg',
    },
]

const MovieInfo = [
    {
        name: 'Jason Bourne',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/bourne-small.jpg',
    },
    {
        name: 'Jason Bourne',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/bourne-small.jpg',
    },
    {
        name: 'Jason Bourne',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/bourne-small.jpg',
    },
    {
        name: 'Jason Bourne',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/bourne-small.jpg',
    },
    {
        name: 'Jason Bourne',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/bourne-small.jpg',
    },
    {
        name: 'Jason Bourne',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/bourne-small.jpg',
    },
    {
        name: 'Jason Bourne',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: '/assests/Shows/bourne-small.jpg',
    },
]


const Movies = () => {
    return (
        <>
            <Box px={['2rem', '5rem']}>
                <Heading size={'lg'}>Continue Watching</Heading>
                <Box >
                    <HStack maxW="100%" overflowX="auto" className="scrollable-container" spacing={'1rem'}>
                        {MovieInfo.map((index) => (
                            <Box
                                key={index}
                                mt={"2rem"}
                                border={"1px solid transparent"}
                                cursor={"pointer"}
                                _hover={{ scale: "1.5" }}
                                height={'auto'}
                                minW={["80%", "300px"]}
                                mr={"1rem"}
                            >
                                <Video src={'https://vjs.zencdn.net/v/oceans.mp4'} poster={'/assests/Shows/dark-small.jpg'} name={'Dark'} />
                            </Box>
                        ))}
                    </HStack>
                </Box>
                <Divider my={'2rem'} />
            </Box>

            <Box px={['2rem', '5rem']}>
                <Heading size={'lg'}>Your friends are watching</Heading>
                <Box >
                    <HStack maxW="100%" overflowX="auto" className="scrollable-container" spacing={'1rem'}>
                        {MovieInfo.map((index) => (
                            <Box
                                key={index}
                                mt={"2rem"}
                                border={"1px solid transparent"}
                                cursor={"pointer"}
                                _hover={{ scale: "1.5" }}
                                height={'auto'}
                                minW={["80%", "300px"]}
                                mr={"1rem"}
                            >
                                <Video src={'https://vjs.zencdn.net/v/oceans.mp4'} poster={'/assests/Shows/dark-small.jpg'} name={'Dark'} />
                            </Box>
                        ))}
                    </HStack>
                </Box>
            </Box>
        </>
    )
}

export const Video = ({ src, onOptions, poster, name }) => {
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
                setStreamButton(BiPause); // Set the button icon to pause
            } else {
                videoRef.current.pause();
                setStreamButton(BiPlay); // Set the button icon to play
            }
        }
    };

    return (
        <Box >
            <video
                ref={videoRef}
                className="video-js vjs-default-skin"
                style={{ borderTopRadius: '10px', width: "100%", height: "250px", objectFit: "cover" }}
                poster={poster}
            />

            <HStack mb={'2rem'} borderBottomRadius={'10px'} p={4} bg={"#232323"} justifyContent={"space-between"}>
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


const Channels = () => {
    return (
        <>
            <Box px={['2rem', '5rem']}>
                <Heading size={'lg'}>Channel</Heading>
                <Box >
                    <HStack maxW="100%" overflowX="auto" className="scrollable-container" spacing={'1rem'}>
                        {MovieInfo.map((index) => (
                            <Box
                                key={index}
                                mt={"2rem"}
                                border={"1px solid transparent"}
                                cursor={"pointer"}
                                _hover={{ scale: "1.5" }}
                                height={'auto'}
                                minW={["80%", "300px"]}
                                mr={"1rem"}
                            >
                                <Video src={'https://vjs.zencdn.net/v/oceans.mp4'} poster={'/assests/Shows/dark-small.jpg'} name={'Dark'} />
                            </Box>
                        ))}
                    </HStack>
                </Box>
                <Divider my={'2rem'} />
            </Box>

            <Box px={['2rem', '5rem']}>
                <Heading size={'lg'}>Your friends are watching</Heading>
                <Box >
                    <HStack maxW="100%" overflowX="auto" className="scrollable-container" spacing={'1rem'}>
                        {MovieInfo.map((index) => (
                            <Box
                                key={index}
                                mt={"2rem"}
                                border={"1px solid transparent"}
                                cursor={"pointer"}
                                _hover={{ scale: "1.5" }}
                                height={'auto'}
                                minW={["80%", "300px"]}
                                mr={"1rem"}
                            >
                                <Video src={'https://vjs.zencdn.net/v/oceans.mp4'} poster={'/assests/Shows/dark-small.jpg'} name={'Dark'} />
                            </Box>
                        ))}
                    </HStack>
                </Box>
            </Box>
        </>
    )
}
const Carousal = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item" data-value="1">
            <Image px={'1rem'} h={'300px'} w={'1500px'} src='/assests/Shows/dark.png' />
        </div>,
        <div className="item" data-value="2">
            <Image px={'1rem'} h={'300px'} w={'1500px'} src='/assests/Shows/riverdale.jpg' />
        </div>,
        <div className="item" data-value="3">
            <Image px={'1rem'} h={'300px'} w={'1500px'} src='/assests/Shows/gameofthrones.jpg' />
        </div>,
        <div className="item" data-value="4">
            <Image px={'1rem'} h={'300px'} w={'1500px'} src='/assests/Shows/strangerthings.jpg' />
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
    )
}

const Shows = () => {
    const router = useRouter();
    return (
        <>
            <Carousal />
            <Box px={['2rem', '5rem']}>
                <Heading size={'lg'}>Continue Watching</Heading>
                <Box >
                    <HStack maxW="100%" overflowX="auto" className="scrollable-container" spacing={'1rem'}>
                        {ShowInfo.map((index) => (
                            <Box
                                key={index}
                                mt={"2rem"}
                                border={"1px solid transparent"}
                                cursor={"pointer"}
                                _hover={{ scale: "1.5" }}
                                height={'auto'}
                                onClick={() => router.push('/User/Preview')}
                                minW={["80%", "300px"]}
                                mr={"1rem"}
                            >
                                <Video src={'https://vjs.zencdn.net/v/oceans.mp4'} poster={'/assests/Shows/dark-small.jpg'} name={'Dark'} />
                            </Box>
                        ))}
                    </HStack>
                </Box>

                <Divider my={'2rem'} />
            </Box>



            <Box px={['2rem', '5rem']}>
                <Heading size={'lg'}>Your friends are watching</Heading>
                <Box >
                    <HStack maxW="100%" overflowX="auto" className="scrollable-container" spacing={'1rem'}>
                        {ShowInfo.map((index) => (
                            <Box
                                key={index}
                                mt={"2rem"}
                                border={"1px solid transparent"}
                                cursor={"pointer"}
                                _hover={{ scale: "1.5" }}
                                height={'auto'}
                                onClick={() => router.push('/User/Preview')}
                                minW={["80%", "300px"]}
                                mr={"1rem"}
                            >
                                <Video src={'https://vjs.zencdn.net/v/oceans.mp4'} poster={'/assests/Shows/dark-small.jpg'} name={'Dark'} />
                            </Box>
                        ))}
                    </HStack>
                </Box>
            </Box>
        </>
    );
}

const Dashboard = (text) => {
    const [content, setContent] = useState('shows');
    const handleClick = (text) => {
        setContent(text);
    }

    return (
        <UserTemplate>
            <Box px={['2rem', '5rem']}>
                <Flex alignItems={'center'}>
                    <Flex width={'100%'} py={'2rem'} display={{ base: 'none', md: 'none', lg: 'none', xl: 'flex' }} borderRight={'2px solid black'}>

                        <Button _active={{ color: '#55DF01' }} width={'80%'} variant={'outline'} onClick={() => handleClick('shows')} borderRadius={'0'} py={4} px={2} fontSize={{ base: 'sm', md: 'md' }} className="Content-Bar">
                            TV Shows
                        </Button>

                        <Button _active={{ color: '#55DF01' }} width={'80%'} variant={'outline'} onClick={() => handleClick('movies')} borderRadius={'0'} py={4} px={2} fontSize={{ base: 'sm', md: 'md' }} className="Content-Bar">
                            Movies
                        </Button>

                        <Button _active={{ color: '#55DF01' }} width={'80%'} variant={'outline'} onClick={() => handleClick('channels')} borderRadius={'0'} py={4} px={2} fontSize={{ base: 'sm', md: 'md' }} className="Content-Bar">
                            Channels
                        </Button>
                    </Flex>
                </Flex>
            </Box>
            {content === 'shows' ? (
                <Shows />
            ) : content === 'movies' ? (
                <Movies />
            ) : (
                <Channels />
            )}
        </UserTemplate>
    )
}

export default Dashboard