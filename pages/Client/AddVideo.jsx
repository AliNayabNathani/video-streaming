import { Box, Button, Checkbox, FormLabel, HStack, Heading, Icon, Image, Input, Select, Stack, Text, Textarea, VStack, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { AiTwotoneFile } from 'react-icons/ai';
import { PinkButton } from "../../components/Client/Reusable Components/MainButton";
import Footer from "../../components/Client/Bars/Footer";
import Nav from "../../components/Client/Main/MainNav";

const FormLabelOutline = ({ children }) => (
    <FormLabel width={'50%'} textDecor={'underline'} textAlign={'start'}>
        {children}
    </FormLabel>
)

const WhiteOutline = () => (
    <HStack width={'100%'} bg={'white'} border={'2px solid black'}>
        <Box height={'100%'}>
            <UploadOutline />
        </Box>
        <VStack>
            <Input textDecor={'underline'} outline={'none'} border={'none'} placeholder="Add Title" />
            < Input textDecor={'underline'} outline={'none'} border={'none'} placeholder="Add Length" />
            <Input textDecor={'underline'} outline={'none'} border={'none'} placeholder="Add Description" />
        </VStack>
    </HStack>
)


const UploadOutline = () => {
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleImageUpload = (e) => {
        // Stop the event propagation to prevent multiple file input clicks
        e.stopPropagation();
        setUploadedImage(<Icon as={AiTwotoneFile} />);
    };
    return (
        <VStack alignItems={['center', 'flex-start']}>
            {!uploadedImage && (
                <HStack>
                    <Button
                        bg={'white'}
                        color="black"
                        onClick={() => document.getElementById('fileInput').click()}
                    >
                        Choose File
                    </Button>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        accept="videos/*"
                        onChange={handleImageUpload}
                    />
                </HStack>
            )}
            {uploadedImage && (
                <Icon
                    as={AiTwotoneFile}
                    boxSize="50px"
                    borderRadius="full"
                    ml={2}
                />
            )}
        </VStack>
    );
}

export default function AddVideo() {
    return (
        <>
            <Nav />
            <Box bg={useColorModeValue('gray.100', 'gray.900')}>
                <Box pb={{ base: '0', md: '5rem' }} mx={{ base: '0', md: '10rem' }} >
                    <Heading py={'3rem'} textAlign={'center'} textDecor={'underline'}>Upload New Video</Heading>
                    <Stack justifyContent={'space-between'} direction={{ base: 'column', md: 'row' }}>
                        <VStack spacing={'1rem'}>
                            <HStack width={'100%'}>
                                <FormLabelOutline>Title</FormLabelOutline>
                                <Input bg={'white'} textAlign={'end'} />
                            </HStack>
                            <HStack width={'100%'}>
                                <FormLabelOutline>Rent Amount</FormLabelOutline>
                                <Input bg={'white'} textAlign={'end'} type="number" />
                            </HStack>
                            <HStack width={'100%'}>
                                <FormLabelOutline>Purchasing Amount</FormLabelOutline>
                                <Input bg={'white'} textAlign={'end'} type="number" />
                            </HStack>
                            <HStack width={'100%'}>
                                <FormLabelOutline>Add Genre</FormLabelOutline>
                                <Input bg={'white'} textAlign={'end'} />
                            </HStack>
                            <HStack width={'100%'}>
                                <FormLabelOutline>Description</FormLabelOutline>
                                <Textarea bg={'white'} />
                            </HStack>
                            <HStack width={'100%'}>
                                <FormLabelOutline>Cast/Crew Details</FormLabelOutline>
                                <Textarea bg={'white'} />
                            </HStack>
                            <HStack width={'100%'}>
                                <FormLabelOutline>Category</FormLabelOutline>
                                <Select bg={'white'}>
                                    <option value="Short Film">Short film</option>
                                    <option value="Educational">Educational</option>
                                </Select>
                            </HStack>
                            <HStack width={'100%'}>
                                <FormLabelOutline>Country/Region</FormLabelOutline>
                                <Select bg={'white'}>
                                    <option value="US">US</option>
                                    <option value="Africa">Africa</option>
                                    <option value="UK">UK</option>
                                </Select>
                            </HStack>
                            <HStack width={'100%'}>
                                <FormLabelOutline>Language</FormLabelOutline>
                                <Select bg={'white'}>
                                    <option value="English">English</option>
                                    <option value="Swahili">Swahili</option>
                                    <option value="French">French</option>
                                </Select>
                            </HStack>
                            <HStack width={'100%'}>
                                <FormLabelOutline>Select Type</FormLabelOutline>
                                <Select bg={'white'}>
                                    <option value="Series">Series</option>
                                    <option value="Series">Movie</option>
                                </Select>
                            </HStack>
                        </VStack>


                        <VStack>
                            <VStack>
                                <HStack width={'100%'}>
                                    <FormLabelOutline>Trailers (if any)</FormLabelOutline>
                                    <UploadOutline />
                                </HStack>
                                <VStack>
                                    <FormLabel>Trailer Langauge (Optional)</FormLabel>
                                    <Select bg={'white'} placeholder="select language">
                                        <option value="English">English</option>
                                        <option value="Swahili">Swahili</option>
                                        <option value="French">French</option>
                                    </Select>
                                </VStack>
                            </VStack>
                            <HStack width={'100%'}>
                                <FormLabelOutline>Upload Episodes</FormLabelOutline>
                                <VStack width={'100%'}>
                                    <WhiteOutline />
                                    <Text bg={'white'}>Add New Episode</Text>
                                    <FormLabelOutline>Add Audio File</FormLabelOutline>
                                    <UploadOutline />
                                    <FormLabelOutline>Trailers (if any)</FormLabelOutline>
                                    <Select bg={'white'} placeholder="select language">
                                        <option value="English">English</option>
                                        <option value="Swahili">Swahili</option>
                                        <option value="French">French</option>
                                    </Select>
                                </VStack>
                            </HStack >
                            <HStack mt={'3rem'} justifyContent={'center'}>
                                <PinkButton>Cancel</PinkButton>
                                <PinkButton>Submit</PinkButton>
                            </HStack>
                        </VStack>
                    </Stack>
                </Box>
            </Box>
            <Footer />
        </>
    )
}