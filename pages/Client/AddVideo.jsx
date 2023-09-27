import {
    Box, Button, Checkbox, FormLabel, HStack, Heading, Icon, Image, Input, Menu, MenuButton, MenuItem, MenuList, Select, Stack, Text, Textarea, VStack, useColorModeValue, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineCloseCircle, } from 'react-icons/ai';
import MyVideoTemplate from "../../components/Client/Templates/MyVideoTemplate";
import { FaPlus } from "react-icons/fa";
import { VideoPlayer } from "../../components/Client/Reusable Components/VideoPlayer";
import { useDetailContext } from "../../components/Client/Context/context";

const FormLabelOutline = ({ children }) => (
    <Text width={'100%'} textAlign={'start'} fontSize={'1rem'} fontWeight={'bold'}>
        {children}
    </Text>
)

const VideoOutline = ({ index, visibleVideoOutlines, setVisibleVideoOutlines }) => {
    const handleDelete = () => {
        setVisibleVideoOutlines((prevVisibleVideoOutlines) => {
            return prevVisibleVideoOutlines.filter((video, i) => i !== index);
        });
    };
    return (
        <HStack width={'100%'} bg={'whiteAlpha.400'} p={8} border={'2px solid black'}>
            <Box height={'100%'}>
                <UploadOutline />
            </Box>
            <VStack w={'100%'} ml={'1rem'} alignSelf={'flex-start'}>
                <Input _placeholder={{ color: 'white' }} variant={'unstyled'} placeholder="Add Title" />
                <Input _placeholder={{ color: 'white' }} variant={'unstyled'} placeholder="Add Length" />
                <Input _placeholder={{ color: 'white' }} variant={'unstyled'} placeholder="Add Description" />
            </VStack>
            <Icon onClick={handleDelete} cursor={'pointer'} color={'black'} as={AiOutlineCloseCircle} alignSelf={'flex-start'} boxSize={7} />
        </HStack>
    );
}


const UploadOutline = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    function TrailerModal({ isOpen, onClose }) {
        return (
            <>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent bg={'#232323'}>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>Enter Title</Text>
                            <Input />
                            <Text>Select Video</Text>
                            <Input type="file" accept="video/*" />
                            <Text>Select thumbnail</Text>
                            <Input type="file" accept="image/*" />
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Upload
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        )
    }

    const [uploadedVideo, setUploadedVideo] = useState([]);
    // const [trailerData, setTrailerData] = useState([]);
    console.log(uploadedVideo);
    const handleVideoUpload = (e) => {
        e.stopPropagation();

        const file = e.target.files[0];
        setUploadedVideo(file);
    }

    const UploadPreview = () => (
        <VideoPlayer
            src={'/public/assests/pexels-produtora-midtrack-10839347 (2160p).mp4'}
        />
    )
    return (
        <Box >
            <VStack alignItems={['center', 'flex-start']}>
                <Stack direction={'row-reverse'}>
                    <HStack>
                        <Button
                            bg={'#414141'}
                            color={'#55DF01'}
                            fontSize={'inherit'}
                            textDecor={'underline'}
                            w={'150px'} h={'150px'}
                            onClick={() => document.getElementById('fileInput').click()}
                        >
                            Upload File
                        </Button>
                        <input
                            id="fileInput"
                            style={{ display: 'none' }}
                            accept="video/*"
                            // onChange={handleVideoUpload}
                            onClick={onOpen}
                        />
                    </HStack>
                    <TrailerModal isOpen={isOpen} onClose={onClose} />
                </Stack>
            </VStack>
        </Box>
    );
}

export default function AddVideo() {
    const [visibleVideoOutlines, setVisibleVideoOutlines] = useState([]);
    const { updateSubTitle } = useDetailContext();
    updateSubTitle(null);
    const handleAddButtonClick = () => {
        setVisibleVideoOutlines([...visibleVideoOutlines, <VideoOutline key={visibleVideoOutlines.length} />]);
    };


    const [input, setInput] = useState({
        title: "",
        rentAmount: "",
        purchaseAmount: "",
        addGenre: "",
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
        addGenre: "",
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
        console.log(value);
        setInput({ ...input, [name]: value });
        console.log(input);
    }

    const handleSelectChange = (e, selectedValue) => {
        const name = e.target.name;
        console.log(selectedValue);
        setInput({ ...input, [name]: selectedValue });
        console.log(input);
    }

    return (
        <>
            <MyVideoTemplate>
                <Box py={8} px={16} mt={'4rem'} bg={'#232323'}>
                    <Heading textAlign={'start'} mb={8} size={'lg'}>Upload New Video</Heading>
                    <Stack justifyContent={'space-between'} direction={{ base: 'column', md: 'row' }}>
                        <VStack width={['100%', '40%']} alignItems={'flex-start'}>


                            <FormLabelOutline>Title</FormLabelOutline>
                            <Input name={'title'} value={input.title} onChange={handleInput} bg="rgba(255, 255, 255, 0.24)" borderColor='transparent' />


                            <FormLabelOutline>Rent Amount</FormLabelOutline>
                            <Input name="rentAmount" value={input.rentAmount} onChange={handleInput} type="number" bg="rgba(255, 255, 255, 0.24)" borderColor='transparent' />



                            <FormLabelOutline>Purchasing Amount</FormLabelOutline>
                            <Input name="purchaseAmount" value={input.purchaseAmount} onChange={handleInput} type="number" bg="rgba(255, 255, 255, 0.24)" borderColor='transparent' />



                            <FormLabelOutline>Add Genre</FormLabelOutline>
                            <Input name="addGenre" value={input.addGenre} onChange={handleInput} bg="rgba(255, 255, 255, 0.24)" borderColor='transparent' />



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
                            <VStack alignItems={'flex-start'} bg={'whiteAlpha.400'} w={'100%'} p={8}>
                                <UploadOutline />
                            </VStack>


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


                            {visibleVideoOutlines.map((video, index) => (
                                <VideoOutline
                                    visibleVideoOutlines={visibleVideoOutlines}
                                    setVisibleVideoOutlines={setVisibleVideoOutlines}
                                    index={index}
                                    key={index}
                                />
                            ))}

                            <Button
                                fontSize={'1.1rem'}
                                justifyContent={'space-between'}
                                width={'100%'}
                                onClick={handleAddButtonClick}
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
                                <Button w={'50%'}>Submit</Button>
                            </HStack>
                        </VStack>
                    </Stack>
                </Box >
            </MyVideoTemplate >
        </>
    )
}