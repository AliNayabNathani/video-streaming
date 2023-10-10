import React, { useRef, useState } from 'react';
import {
    Box,
    Avatar,
    Text,
    VStack,
    HStack,
    Divider,
    Stack,
    Flex,
    Button,
    Heading,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Icon,
    FormLabel,
    Textarea,
    Input,
} from '@chakra-ui/react';
import profileImage from '../../../Media/videe0/Logo/GREEN Play button/videe0 - Logo (GREEN PlayButton) (500x150).png'
import profileImage1 from '../../../Media/videe0/Logo/GREEN Play button/videe0 - Logo (GREEN PlayButton) (500x150).png'
import profileImage2 from '../../../Media/videe0/Logo/GREEN Play button/videe0 - Logo (GREEN PlayButton) (500x150).png'
import Nav from '../MainNav';
import Footer from '../../Bars/Footer';
import { AiFillPlusSquare, AiOutlineEdit } from 'react-icons/ai';
import { ReactPlayerOutline } from '../../Reusable Components/ReactPlayer';
import { PinkButton } from '../../Reusable Components/MainButton';


const UserCard = ({ user }) => {
    return (
        <Stack
            border='2px solid black'
            bg={'white'}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            direction={['column', 'row']}
            justifyContent={['center', 'space-between']}
        >
            <Flex flexDirection={['column', 'row']} alignItems={'center'}>
                <ReactPlayerOutline url={'https://www.youtube.com/watch?v=EwF_nFPS7qY'} />
                <VStack ml={4} alignItems={['center', 'flex-start']}>
                    <Text fontSize="lg" fontWeight="bold">
                        {user.episodeNum}
                    </Text>
                    <Text fontWeight="normal">25 Min</Text>
                    <Text textAlign={['center', 'left']} fontSize={'sm'}>
                        {user.bidDetails}
                    </Text>

                </VStack>
            </Flex>
            <Flex p={2} alignSelf={['center', 'flex-start']} flexDirection={'row'}>
                <Button fontSize={'md'} bg={'transparent'} borderRadius={'5px'} mr={2} border={'1px solid gray'}>
                    <AiOutlineEdit />
                </Button>
            </Flex>
        </Stack>
    );
};

const ViewAllApplicants = () => {
    // Sample user data, replace with your actual user data
    const users = [
        {
            episodeNum: 'Episode 1',
            Duration: '25 min',
            bidDetails:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            avatar: profileImage1,
        },
        {
            episodeNum: 'Nayab Nathani',
            Duration: '$900',
            bidDetails:
                'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            avatar: profileImage,
        },
        {
            episodeNum: 'Dummy User',
            Duration: '$100',
            bidDetails:
                'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            avatar: profileImage2,
        },
    ];

    return (
        <div>
            {users.map((user, index) => (
                <div key={index}>
                    <UserCard user={user} />
                    {index !== users.length - 1 && <Divider my={4} />}
                </div>
            ))}
        </div>
    );
};

const ChannelInfo = () => (
    <Box mb={'2rem'}>
        <Heading size={'md'}>Channel 1</Heading>
        <Text as={'href'}>Shows List</Text>
        <VideoOutline />
        <Divider size={'lg'} />
    </Box>
)

const VideoOutline = () => (
    <HStack justifyContent={'space-between'}>
        <VStack>
            <ReactPlayerOutline url={'https://www.youtube.com/watch?v=-kbsbCO5ws8'} />
            <Text textAlign={'center'}>Show 1</Text>
        </VStack>
        <VStack>
            <ReactPlayerOutline url={'https://www.youtube.com/watch?v=-kbsbCO5ws8'} />
            <Text textAlign={'center'}>Show 2</Text>
        </VStack>
        <VStack>
            <ReactPlayerOutline url={'https://www.youtube.com/watch?v=-kbsbCO5ws8'} />
            <Text textAlign={'center'}>Show 3</Text>
        </VStack>
        <VStack>
            <ReactPlayerOutline url={'https://www.youtube.com/watch?v=-kbsbCO5ws8'} />
            <Text textAlign={'center'}>Show 4</Text>
        </VStack>
        <VStack>
            <ReactPlayerOutline url={'https://www.youtube.com/watch?v=-kbsbCO5ws8'} />
            <Text textAlign={'center'}>Show 5</Text>
        </VStack>
    </HStack>
)

const ModalTemplate = ({ isModalOpen, setIsModalOpen, Heading, Body }) => {

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{Heading}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Body />
                </ModalBody>
                <ModalFooter>
                    {/* You can add buttons here to confirm or cancel the action */}
                    <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

const AddEpisode = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fileInputRef = useRef(null);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleFileInputClick = () => {
        // Trigger a click event on the hidden file input when the text is clicked
        fileInputRef.current.click();
    };

    const handleFileInputChange = (e) => {
        // Handle the selected file here
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            console.log('Selected file:', selectedFile);
        }
    };

    const AddEpisodeBody = () => (
        <VStack>
            <HStack width={'100%'}>
                <FormLabel width={'40%'} textAlign={'start'}>Title</FormLabel>
                <Input />
            </HStack>
            <HStack width={'100%'}>
                <FormLabel textAlign={'start'}>Upload File</FormLabel>
                <Input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileInputChange} />
                <span
                    style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }}
                    onClick={handleFileInputClick}
                >
                    Select file from system
                </span>
            </HStack>
            <HStack width={'100%'}>
                <FormLabel textAlign={'start'}>Add Description</FormLabel>
                <Textarea width={'100%'} />
            </HStack>
            <HStack justifyContent={'center'} mt={'2rem'}>
                <PinkButton>Save</PinkButton>
            </HStack>
        </VStack>
    );

    return (
        <Box mt={'2rem'} p={'1rem'} bg={'white'} border={'1px solid black'}>
            <HStack justify={'space-between'}>
                <Heading size={'md'}>Add New Episode</Heading>
                <Icon as={AiFillPlusSquare} bg={'black'} color={'white'} onClick={handleOpenModal} />
            </HStack>
            <ModalTemplate isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} AddEpisodeBody={AddEpisodeBody} Heading={'Add New Episode'} />
        </Box >
    );
};


export default function ChannelDetails() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fileInputRef = useRef(null);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleFileInputClick = () => {
        // Trigger a click event on the hidden file input when the text is clicked
        fileInputRef.current.click();
    };

    const handleFileInputChange = (e) => {
        // Handle the selected file here
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            console.log('Selected file:', selectedFile);
        }
    };

    const AddChanelModelBody = () => (
        <VStack>
            <HStack>
                <FormLabel>Channel Name: </FormLabel>
                <Input />
            </HStack>
            <Heading textAlign={'start'} size={'sm'}>Add Episode 1</Heading>
            <AddEpisodeBody />
        </VStack>
    )

    const AddEpisodeBody = () => (
        <VStack>
            <HStack width={'100%'}>
                <FormLabel width={'40%'} textAlign={'start'}>Title</FormLabel>
                <Input />
            </HStack>
            <HStack width={'100%'}>
                <FormLabel textAlign={'start'}>Upload File</FormLabel>
                <Input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileInputChange} />
                <span
                    style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }}
                    onClick={handleFileInputClick}
                >
                    Select file from system
                </span>
            </HStack>
            <HStack width={'100%'}>
                <FormLabel textAlign={'start'}>Add Description</FormLabel>
                <Textarea width={'100%'} />
            </HStack>
            <HStack justifyContent={'center'} mt={'2rem'}>
                <PinkButton>Save</PinkButton>
            </HStack>
        </VStack>
    );
    return (
        <>
            <Nav />
            <Box pb={'2rem'} bg={useColorModeValue('gray.100', 'gray.900')}>
                <Box mx={'3rem'}>
                    <HStack justifyContent={'space-between'}>
                        <Heading textDecor={'underline'} py={'2rem'}>My Channels</Heading>
                        <Box onClick={handleOpenModal}>
                            <PinkButton>Create Channel</PinkButton>
                        </Box>
                    </HStack>
                    <ModalTemplate isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} Body={AddChanelModelBody} Heading={'Add Channel'} />
                    <ChannelInfo />
                    <Divider />
                    <ViewAllApplicants />
                    <AddEpisode />
                </Box>
            </Box>
            <Footer />
        </>
    )
}