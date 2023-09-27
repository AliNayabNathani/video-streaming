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

// import { VideoPlayer } from "../../components/Client/Reusable Components/VideoPlayer";
import MainTemplate from "../../components/Client/Templates/Main";
import { Video } from "../../components/Client/Reusable Components/VideoPlayer";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

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

const ChannelOutline = () => (
    <VStack spacing={'2rem'} my={'2rem'}>
        <HStack w={'100%'} justifyContent={'space-between'}>
            <Heading size={'md'}>Channel 01</Heading>
            <Text>Created On: <b>02-12-22</b></Text>
        </HStack>
        <HStack maxW={'100%'} overflow={'hidden'}>
            <Box>
                <Box
                    // Adjust the width as needed
                    maxWidth="100%" // Ensure the player doesn't exceed its original size
                    height={{ base: "100%", md: 'auto' }}
                >
                    <VideoPlayer
                        poster="https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8"
                        name={'Dark'}
                        src={'https://vjs.zencdn.net/v/oceans.mp4'} />
                </Box>
                <Text mt={'0.5rem'}>Show 01</Text>
            </Box>
            <Box>
                <Box
                    // Adjust the width as needed
                    maxWidth="100%" // Ensure the player doesn't exceed its original size
                    height={{ base: "100%", md: 'auto' }}
                >
                    <VideoPlayer
                        poster="https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8"
                        name={'Dark'}
                        src={'https://vjs.zencdn.net/v/oceans.mp4'} />
                </Box>
                <Text>Show 01</Text>
            </Box>
            <Box>
                <Box
                    // Adjust the width as needed
                    maxWidth="100%" // Ensure the player doesn't exceed its original size
                    height={{ base: "100%", md: 'auto' }}
                >
                    <VideoPlayer
                        poster="https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8"
                        name={'Dark'}
                        src={'https://vjs.zencdn.net/v/oceans.mp4'} />
                </Box>
                <Text>Show 01</Text>
            </Box>
        </HStack>
        <Text textAlign={'end'} w={'100%'} textDecor={'underline'}>View All</Text>
    </VStack>
)


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
                <Input placeholder="Title" />
            </Box>
            <Box w={'100%'}>
                <Text>Upload File</Text>
                <Input variant={'unstyled'} type="file" />
            </Box>
            <Box w={'100%'}>
                <Text>Description</Text>
                <Textarea placeholder="Description" />
            </Box>
        </>
    );
}

const AddChannelModal = ({ isOpen, onClose }) => {
    const [episodes, setEpisodes] = useState([]);
    // const [episodeData, setEpisodeData] = useState({
    //     name,
    //     Title, 

    // });
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
                        <VStack h={'100%'} w={'100%'} justifyContent={'center'} alignItems={'center'} >
                            <VStack px={'3rem'} spacing={'1rem'} alignItems={'flex-start'}>
                                <Heading size={'md'}>Add Channel</Heading>
                                <Box w={'100%'}>
                                    <Text>Channel Name</Text>
                                    <Input />
                                </Box>
                                {episodes.map((ep, index) => (
                                    <AddEpisode key={index} index={index} episodes={episodes} setEpisodes={setEpisodes} />
                                ))}
                            </VStack>
                            <Button onClick={handleNextEpClick} >Add Next Episode</Button>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}


export default function Channel() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <MainTemplate>
            <Box mx={'2rem'} >
                <Stack direction={'row'} mt={'1rem'} mb={'3rem'} justifyContent={'space-between'}>
                    <Heading size={'lg'}>My Channels</Heading>
                    <Button onClick={onOpen}>Create Channel</Button>
                </Stack>
                <Box>
                    <ChannelOutline />
                    <Divider />
                    <ChannelOutline />
                    <Divider />
                    <ChannelOutline />
                </Box>
                <AddChannelModal isOpen={isOpen} onClose={onClose} />
            </Box>
        </MainTemplate>
    );
}