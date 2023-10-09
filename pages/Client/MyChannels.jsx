import {
    Box, HStack, Heading, Stack, Text, VStack, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Divider,
    Input,
    Textarea,
    Icon,
} from "@chakra-ui/react";
import MainTemplate from "../../components/Client/Templates/Main";
import { Video } from "../../components/Client/Reusable Components/VideoPlayer";
import { useEffect, useRef, useState } from "react";
import { AiOutlineCloseCircle, AiOutlinePlus } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import axios from "axios";
import { server } from "../../components/server";
import { useSelector } from "react-redux";
const ChannelData = [
    {
        name: 'Dark',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
        episodes: [
            {
                name: 'Episode 1',
                Duration: '25',
                src: 'https://vjs.zencdn.net/v/oceans.mp4',
                poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
                desc: 'Another episode description.'

            },
            {
                name: 'Episode 2',
                Duration: '30',
                src: 'https://vjs.zencdn.net/v/oceans.mp4',
                poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
                desc: 'Another episode description.'
            },
            {
                name: 'Episode 3',
                Duration: '30',
                src: 'https://vjs.zencdn.net/v/oceans.mp4',
                poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
                desc: 'Another episode description.'
            },
            {
                name: 'Episode 4',
                Duration: '30',
                src: 'https://vjs.zencdn.net/v/oceans.mp4',
                poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
                desc: 'Another episode description.'
            },
            {
                name: 'Episode 5',
                Duration: '30',
                src: 'https://vjs.zencdn.net/v/oceans.mp4',
                poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
                desc: 'Another episode description.'
            },
        ]
    },
    {
        name: 'Stranger Things',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
        episodes: [
            {
                name: 'Episode 1',
                Duration: '40',
                src: 'https://vjs.zencdn.net/v/oceans.mp4',
                poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
                desc: 'Description for Stranger Things Episode 1.'
            },
            {
                name: 'Episode 2',
                Duration: '35',
                src: 'https://vjs.zencdn.net/v/oceans.mp4',
                poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
                desc: 'Description for Stranger Things Episode 2.'
            },
        ]
    },
    {
        name: 'Breaking Bad',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
        episodes: [
            {
                name: 'Episode 1',
                Duration: '45',
                src: 'https://vjs.zencdn.net/v/oceans.mp4',
                poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
                desc: 'Description for Breaking Bad Episode 1.'
            },
            {
                name: 'Episode 2',
                Duration: '50',
                src: 'https://vjs.zencdn.net/v/oceans.mp4',
                poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
                desc: 'Description for Breaking Bad Episode 2.'
            },
        ]
    },
];

const VideoPlayer = ({ src, poster, name }) => (
    <Box
        border={"1px solid transparent"}
        borderRadius={5}
        cursor={"pointer"}
        _hover={{ scale: "1.5" }}
        width={["100%", "350px"]}
        mr={"1rem"}
    >
        <Video src={src} poster={poster} name={name} />
    </Box>
)

const ChannelOutline = ({ data, showName, setShowName }) => {
    const [tempData, setTempData] = useState();

    const handleClick = async (index, name) => {
        if (showName === name) {
            setShowName('');
        }
        else {
            setShowName(name);
        }
        await axios.get(server + `creator/mychannel/${data.id}`, {
            method: "GET",
            withCredentials: true,
        })
            .then(response => {
                setTempData(response.data.channel.videos);
            })
            .catch(error => {
                console.error(error);
            });
        setEpisodeData(tempData);
    }

    return (
        <VStack spacing={'2rem'} my={'2rem'}>
            <HStack w={'100%'} justifyContent={'space-between'}>
                <Heading size={'md'}>Channel 1</Heading>
                <Text>Created On: <b>02-12-22</b></Text>
            </HStack>
            <HStack w={'100%'} overflowX={'auto'}>
                {/* {data?.videos?.map((Vdata, index) => {
                    return (
                        <Box key={index} onClick={() => handleClick(index, data.name)}>
                            {Vdata?.trailers?.map((Tdata, index) => {
                                return (
                                    <>
                                        <Box
                                            key={index}
                                            maxWidth="100%"
                                            height={{ base: "100%", md: 'auto' }}
                                        >
                                            <VideoPlayer
                                                poster={Tdata.poster}
                                                name={Vdata.name}
                                                src={Tdata.file} />
                                        </Box>
                                        <Text mt={'0.5rem'}>{Vdata.name}</Text>
                                    </>
                                )
                            })}

                        </Box>
                    )
                })} */}
                {ChannelData.map((data, index) => {
                    return (
                        <Box key={index} onClick={() => handleClick(index, data.name)}>
                            <Box
                                maxWidth="100%"
                                height={{ base: "100%", md: 'auto' }}
                            >
                                <VideoPlayer
                                    poster={data.poster}
                                    name={data.name}
                                    src={data.src} />
                            </Box>
                            <Text mt={'0.5rem'}>{data.name}</Text>
                        </Box>
                    )
                })}
            </HStack>
            <Text textAlign={'end'} w={'100%'} textDecor={'underline'}>View All</Text>
        </VStack>
    );
}


const AddEpisode = ({ index, tempEpisodeData, setTempEpisodeData, setEpisodes }) => {

    const handleDelete = () => {
        setEpisodes((prevepisodes) => {
            return prevepisodes.filter((video, i) => i !== index);
        });

        setTempEpisodeData((prevepisodes) => {
            return prevepisodes.filter((video, i) => i !== index);
        });
    };

    const handleVideoFileChange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('video', file);

        try {
            const response = await axios.post(server + 'other/uploadVideo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });

            const videoSrc = response.data.video.src;

            console.log(videoSrc);
            // Update your state with the video source URL
            setTempEpisodeData({ ...tempEpisodeData, file: videoSrc });
        } catch (error) {
            // Handle any errors here
            console.error(error);
        }
    };

    const handlePosterFileChange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post(server + 'other/uploadPicture', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });

            const imageSrc = response.data.image.src;

            console.log(imageSrc);
            // Update your state with the image source URL
            setTempEpisodeData({ ...tempEpisodeData, poster: imageSrc });
        } catch (error) {
            // Handle any errors here
            console.error(error);
        }
    };


    return (
        <>
            <HStack w={'100%'} justifyContent={'space-between'}>
                <Heading size={'md'}>Add Episode</Heading>
                <Icon onClick={handleDelete} cursor={'pointer'} color={'black'} as={AiOutlineCloseCircle} boxSize={6} />
            </HStack>
            <Box w={'100%'}>
                <Text>Title</Text>
                <Input
                    onChange={(e) =>
                        setTempEpisodeData({
                            ...tempEpisodeData,
                            title: e.target.value,
                        })
                    }
                    value={tempEpisodeData?.title}
                    bg={'#414141'}
                    placeholder="Title"
                />
            </Box>
            <Box w={'100%'}>
                <Text>Upload File</Text>
                <Button mb={'1rem'} justifyContent={'space-between'} w={'100%'} rightIcon={<AiOutlinePlus size={20} />}>
                    Select Video from Device
                    <Input onChange={handleVideoFileChange}
                        w={'100%'} type="file" accept="video/*"
                        style={{ opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    />                </Button>
                <Button justifyContent={'space-between'} w={'100%'} rightIcon={<AiOutlinePlus size={20} />}>
                    Select Poster from Device
                    <Input onChange={handlePosterFileChange}
                        w={'100%'} type="file" accept="image/*"
                        style={{ opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    />
                </Button>
            </Box>
            <Box w={'100%'}>
                <Text>Description</Text>
                <Textarea bg={'#414141'} onChange={(e) => setTempEpisodeData({ ...tempEpisodeData, description: e.target.value })} placeholder="Description" />
            </Box>
        </>
    );
}

const AddChannelModal = ({ isOpen, onClose }) => {
    const [episodes, setEpisodes] = useState([]);
    const [tempEpisodeData, setTempEpisodeData] = useState({
        title: '',
        file: '',
        poster: '',
        description: '',
    });
    console.log(tempEpisodeData)

    const [episodeData, setEpisodeData] = useState([]);
    const [channelName, setChannelName] = useState();
    const { user } = useSelector((state) => state.auth);

    console.log('Episode Data: ', episodeData);
    const HandleSave = async () => {
        setEpisodeData([...episodeData, tempEpisodeData]);
        const requestBody = {
            name: channelName,
            episodes: episodeData,
        };
        const res = await axios.post(server + 'creator/mychannel/add', requestBody, {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true,
        })
        console.log(res);
    }

    const handleNextEpClick = () => {
        setEpisodeData([...episodeData, tempEpisodeData]);
        console.log('Episode Data: ', episodeData);
        setEpisodes([...episodes, <AddEpisode key={episodes.length} />])
    }

    const clearEpisodeData = () => {
        setEpisodeData([]);
        setEpisodes([]);
        setTempEpisodeData({ ...tempEpisodeData, title: '', description: '', poster: '', file: '' })
        setChannelName('');
    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent py={'2rem'} minH={['auto', '500px']} minW={["auto", "700px"]} bg={'#232323'}>
                    <ModalCloseButton onClick={clearEpisodeData} />
                    <ModalBody>
                        <VStack h={'100%'} px={['auto', '5rem']} w={'100%'} justifyContent={'center'} alignItems={'center'} >
                            <VStack w={'100%'} spacing={'1rem'} alignItems={'flex-start'}>
                                <Heading size={'md'}>Add Channel</Heading>
                                <Box w={'100%'}>
                                    <Text>Channel Name</Text>
                                    <Input value={channelName} onChange={(e) => setChannelName(e.target.value)} bg={'#414141'} placeholder="Enter Channel Name" />
                                </Box>
                                {episodes.map((ep, index) => (
                                    <AddEpisode tempEpisodeData={tempEpisodeData} setTempEpisodeData={setTempEpisodeData} key={index} index={index} episodes={episodes} setEpisodes={setEpisodes} />
                                ))}
                            </VStack>
                            <Button variant={'outline'} w={'100%'} onClick={handleNextEpClick} >Add Next Episode</Button>
                            <HStack>
                                <Button w={'100%'} onClick={HandleSave}>Save</Button>
                                <Button onClick={clearEpisodeData} w={'100%'}>Clear</Button>
                            </HStack>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}


export default function Channel() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showName, setShowName] = useState();
    const [channelData, setChannelData] = useState();
    const [episodeData, setEpisodeData] = useState();

    const videos =
        useEffect(() => {
            const getChannels = async () => {
                await axios.get(server + 'creator/mychannels', {
                    method: "GET",
                    withCredentials: true,
                })
                    .then(response => {
                        setChannelData(response.data.channels);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
            getChannels();
        }, []);

    return (
        <MainTemplate>
            <Box mx={'2rem'} >
                <Stack direction={'row'} mt={'1rem'} mb={'3rem'} justifyContent={'space-between'}>
                    <Heading size={'lg'}>My Channels</Heading>
                    <Button onClick={onOpen}>Create Channel</Button>
                </Stack>
                <Box>
                    {/* {channelData?.map((data, index) => {
                        return (
                            <>
                                <ChannelOutline showName={showName} setEpisodeData={setEpisodeData} data={data} setShowName={setShowName} />
                                <Divider />

                                {showName === data.name &&
                                    episodeData?.map((Edata, index) => {
                                        return Edata.episodes.map((Epdata) => (
                                            <Stack key={index} cursor={'pointer'} my={'1rem'} justifyContent={['center', 'space-between']} width={'100%'} p={'1.5rem'} bg={'#232323'} direction={{ base: 'column', md: 'row' }} alignItems={'center'}>
                                                <Box
                                                    // Adjust the width as needed
                                                    maxWidth="100%" // Ensure the player doesn't exceed its original size
                                                    height={{ base: "100%", md: 'auto' }}
                                                >
                                                    <VideoPlayer
                                                        poster={Epdata.poster}
                                                        name={Epdata.title}
                                                        src={Epdata.file} />
                                                </Box>
                                                <Stack alignItems={'flex-start'} justifyContent={'flex-start'} s direction={'column'}>
                                                    <Heading size={'md'}>{Epdata.title}</Heading>
                                                    <Text>{Epdata.Duration} min</Text>
                                                    <Text>{Epdata.description}</Text>
                                                </Stack>
                                                <Stack direction={{ base: 'row', md: 'column' }} alignSelf={'normal'} justifyContent={'space-between'}>
                                                    <Icon as={FiEdit3} boxSize={6} />
                                                </Stack>
                                            </Stack>
                                        ));
                                    })
                                }
                            </>
                        )
                    })} */}

                    <ChannelOutline showName={showName} ChannelData={ChannelData} setShowName={setShowName} />
                    <Divider />

                    {ChannelData.map((data) => {
                        if (data.name == showName) {
                            return data.episodes.map((episode, index) => (
                                <Stack key={index} cursor={'pointer'} my={'1rem'} justifyContent={['center', 'space-between']} width={'100%'} p={'1.5rem'} bg={'#232323'} direction={{ base: 'column', md: 'row' }} alignItems={'center'}>
                                    <Box
                                        // Adjust the width as needed
                                        maxWidth="100%" // Ensure the player doesn't exceed its original size
                                        height={{ base: "100%", md: 'auto' }}
                                    >
                                        <VideoPlayer
                                            poster={episode.poster}
                                            name={episode.name}
                                            src={episode.src} />
                                    </Box>
                                    <Stack alignItems={'flex-start'} justifyContent={'flex-start'} s direction={'column'}>
                                        <Heading size={'md'}>{episode.name}</Heading>
                                        <Text>{episode.Duration} min</Text>
                                        <Text>{episode.desc}</Text>
                                    </Stack>
                                    <Stack direction={{ base: 'row', md: 'column' }} alignSelf={'normal'} justifyContent={'space-between'}>
                                        <Icon as={FiEdit3} boxSize={6} />
                                    </Stack>
                                </Stack>
                            ))
                        }
                    })}
                </Box>
                <AddChannelModal isOpen={isOpen} onClose={onClose} />
            </Box>
        </MainTemplate>
    );
}