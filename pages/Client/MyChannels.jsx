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
import { useRef, useState } from "react";
import { AiOutlineCloseCircle, AiOutlinePlus } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import axios from "axios";
import { server } from "../../components/server";
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


const response = axios.get(server + 'creator/mychannels', {
    method: "GET",
    withCredentials: true,
})
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });

console.log(response);
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

const ChannelOutline = ({ setShowName }) => {
    const [currentIndex, setCurrentIndex] = useState();

    const handleClick = (index, name) => {
        if (index !== currentIndex) {
            setShowName(name)
        }
        else {
            setShowName('');
        }
        setCurrentIndex(index);

    }

    return (
        <VStack spacing={'2rem'} my={'2rem'}>
            <HStack w={'100%'} justifyContent={'space-between'}>
                <Heading size={'md'}>Channel 01</Heading>
                <Text>Created On: <b>02-12-22</b></Text>
            </HStack>
            <HStack maxW={'100%'} overflowX={'scroll'}>
                {ChannelData.map((data, index) => {
                    return (
                        <Box key={index} onClick={() => handleClick(index, data.name)}>

                            <Box
                                // Adjust the width as needed
                                maxWidth="100%" // Ensure the player doesn't exceed its original size
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


const AddEpisode = ({ index, episodes, setEpisodes }) => {
    const handleDelete = () => {
        setEpisodes((prevepisodes) => {
            return prevepisodes.filter((video, i) => i !== index);
        });
    };
    return (
        <>
            <HStack w={'100%'} justifyContent={'space-between'}>
                <Heading size={'md'}>Add Episode</Heading>
                <Icon onClick={handleDelete} cursor={'pointer'} color={'black'} as={AiOutlineCloseCircle} boxSize={6} />
            </HStack>
            <Box w={'100%'}>
                <Text>Title</Text>
                <Input bg={'#414141'} placeholder="Title" />
            </Box>
            <Box w={'100%'}>
                <Text>Upload File</Text>
                <Button justifyContent={'space-between'} w={'100%'} rightIcon={<AiOutlinePlus size={20} />}>
                    Select File from Device
                    <Input display={'none'} type="file" />
                </Button>
            </Box>
            <Box w={'100%'}>
                <Text>Description</Text>
                <Textarea bg={'#414141'} placeholder="Description" />
            </Box>
        </>
    );
}

const AddChannelModal = ({ isOpen, onClose }) => {
    const [episodes, setEpisodes] = useState([]);
    const handleNextEpClick = () => {
        setEpisodes([...episodes, <AddEpisode key={episodes.length} />])
    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent py={'2rem'} minH={['auto', '500px']} minW={["auto", "700px"]} bg={'#232323'}>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack h={'100%'} px={'5rem'} w={'100%'} justifyContent={'center'} alignItems={'center'} >
                            <VStack w={'100%'} spacing={'1rem'} alignItems={'flex-start'}>
                                <Heading size={'md'}>Add Channel</Heading>
                                <Box w={'100%'}>
                                    <Text>Channel Name</Text>
                                    <Input bg={'#414141'} placeholder="Enter Channel Name" />
                                </Box>
                                {episodes.map((ep, index) => (
                                    <AddEpisode key={index} index={index} episodes={episodes} setEpisodes={setEpisodes} />
                                ))}
                            </VStack>
                            <Button variant={'outline'} w={'100%'} onClick={handleNextEpClick} >Add Next Episode</Button>
                            <Button w={'30%'}>Save</Button>
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

    return (
        <MainTemplate>
            <Box mx={'2rem'} >
                <Stack direction={'row'} mt={'1rem'} mb={'3rem'} justifyContent={'space-between'}>
                    <Heading size={'lg'}>My Channels</Heading>
                    <Button onClick={onOpen}>Create Channel</Button>
                </Stack>
                <Box>
                    <ChannelOutline setShowName={setShowName} />
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
                    <ChannelOutline setShowName={setShowName} />
                    <Divider />
                    <ChannelOutline setShowName={setShowName} />
                </Box>
                <AddChannelModal isOpen={isOpen} onClose={onClose} />

            </Box>
        </MainTemplate>
    );
}