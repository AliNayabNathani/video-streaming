import { Box, Button, Checkbox, Container, Divider, Flex, FormLabel, GridItem, HStack, Heading, Icon, Image, Input, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import { useRouter } from "next/router";
import Catalog from "../../components/Client/Main/My Video/Catalog";
import { ContentBar } from "../../components/Client/Reusable Components/ContentBar";
import { useDetailContext } from "../../components/Client/Context/context";
import MainTemplate from "../../components/Client/Templates/Main";
import AddVideo from "../../components/Client/Main/My Video/AddVideo";
import { ChevronDownIcon } from "@chakra-ui/icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Style.css';
import { AiOutlineCalendar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { BsFillTriangleFill, BsThreeDotsVertical, BsTriangle } from "react-icons/bs";

const CastandCrew = () => {
    const [optionValue, setOptionValue] = useState('Writer');

    const handleSelectChange = value => {
        setOptionValue(value);
    };
    return (
        <Box p={'3rem'} mt={'2rem'} bg={'#232323'}>
            <Heading size={'md'} mb={'2rem'}>Studio Creator</Heading>
            <Text fontWeight={'bold'}>Name</Text>
            <Input w={'100%'} mt={'0.5rem'} placeholder="Enter Name" />

            <Heading size={'md'} mt={'1rem'}>Cast and Crew</Heading>
            <Text mt={'0.5rem'}>At least one crew member is required</Text>

            <VStack mt={'1rem'}>
                <HStack w={'100%'} spacing={'2rem'}>
                    <Box w={'50%'}>
                        <Text fontWeight={'bold'}>Name</Text>
                        <Input w={'100%'} placeholder="Enter Name" />
                    </Box>
                    <Box w={'50%'}>
                        <Text fontWeight={'bold'}>Name</Text>
                        <Input w={'100%'} placeholder="Enter Name" />
                    </Box>
                </HStack>
                <HStack alignItems={'flex-start'} w={'100%'} spacing={'2rem'}>
                    <Box w={'50%'} h={'150px'}>
                        <Text fontWeight={'bold'}>Role</Text>
                        <Menu>
                            <MenuButton w={'100%'} p={2} _active={{ bg: '#232323' }} _hover={{ bg: '#232323' }} textAlign={'center'} borderRadius={'5px'} as={Box} bg={'#414141'}>
                                <HStack justifyContent={'space-between'}>
                                    <Text>{optionValue}</Text>
                                    <Icon as={ChevronDownIcon} />
                                </HStack>
                            </MenuButton>
                            <MenuList w={'425px'} p={0} m={0}>
                                <MenuItem onClick={() => handleSelectChange('Writer')} value="Writer">Writer</MenuItem>
                                <MenuItem onClick={() => handleSelectChange('Director')} value="Director">Director</MenuItem>
                                <MenuItem onClick={() => handleSelectChange('Producer')} value="Producer">Producer</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box w={'50%'}>
                        <Text fontWeight={'bold'}>Character Name</Text>
                        <Input w={'100%'} placeholder="Character name" />
                        <Button mt={'1rem'} w={'100%'}>Add Cast Member</Button>
                    </Box>
                </HStack>
                <HStack alignItems={'flex-start'} w={'100%'} spacing={'2rem'}>
                    <Button w={'50%'}>Add Crew Member</Button>
                    <Button w={'50%'}>Save</Button>
                </HStack>
            </VStack>
        </Box>
    )
}

const VideoAssets = () => {
    const [videoLanguage, setVideoLanguage] = useState('Language: Please Select');
    const [frameRate, setFrameRate] = useState('Frame Rate: Please Select');
    const [captionLanguage, setCaptionLanguage] = useState('Language: Please Select');
    const [trailerLanguage, setTrailerLanguage] = useState('Language: Please Select');

    const handleVideoLanguage = (text) => {
        setVideoLanguage(text);
    }
    const handleCaptionLanguage = (text) => {
        setCaptionLanguage(text);
    }
    const handleTrailerLanguage = (text) => {
        setTrailerLanguage(text);
    }

    const handleFrameRate = (text) => {
        setFrameRate(text);
    }

    return (
        <Box p={'3rem'} mt={'2rem'} bg={'#232323'}>
            <VStack alignItems={'flex-start'} justifyContent={'space-between'}>
                <Box w={'100%'}>
                    <Heading size={'md'}>Mezzanine File</Heading>
                    <Stack mt={'0.5rem'} direction={['column', 'row']}>
                        <FormLabel p={'5px'} fontWeight={'normal'} color={'whiteAlpha.500'} w={'100%'} bg={'transparent'} border={'1px solid rgba(255, 255, 255, 0.24)'} borderRadius={'5px'}>
                            Browse...
                            <Input type="file" style={{ display: 'none' }} placeholder="Browse..." />
                        </FormLabel>
                        <Input placeholder="Amazon S3" />
                        <Menu>
                            <MenuButton name="videoLanguage" h={'100%'} w={'100%'} p={2} borderRadius={'5px'} as={Box} bg={'#414141'}>
                                {videoLanguage}
                            </MenuButton>
                            <MenuList p={0} m={0}>
                                <MenuItem name="videoLanguage" onClick={() => handleVideoLanguage('English')} value="English">English</MenuItem>
                                <MenuItem name="videoLanguage" onClick={() => handleVideoLanguage('Swahili')} value="Swahili">Swahili</MenuItem>
                                <MenuItem name="videoLanguage" onClick={() => handleVideoLanguage('French')} value="French">French</MenuItem>
                            </MenuList>
                        </Menu>
                    </Stack>
                </Box>

                <Box w={'100%'}>
                    <Heading size={'md'}>Captions</Heading>
                    <Stack mt={'0.5rem'} direction={['column', 'row']}>
                        <FormLabel p={'5px'} fontWeight={'normal'} color={'whiteAlpha.500'} w={'100%'} bg={'transparent'} border={'1px solid rgba(255, 255, 255, 0.24)'} borderRadius={'5px'}>
                            Browse...
                            <Input type="file" style={{ display: 'none' }} placeholder="Browse..." />
                        </FormLabel>
                        <Input placeholder="Amazon S3" />

                        <Menu>
                            <MenuButton name="frameRate" w={'100%'} h={'100%'} p={2} borderRadius={'5px'} as={Box} bg={'#414141'}>
                                {frameRate}
                            </MenuButton>
                            <MenuList p={0} m={0}>
                                <MenuItem name="frameRate" onClick={() => handleFrameRate('24')} value="24">24</MenuItem>
                                <MenuItem name="frameRate" onClick={() => handleFrameRate('60')} value="60">60</MenuItem>
                                <MenuItem name="frameRate" onClick={() => handleFrameRate('120')} value="120">120</MenuItem>
                            </MenuList>
                        </Menu>

                    </Stack>
                    <Stack mt={'1rem'} w={'100%'} direction={['column', 'row']} justifyContent={'flex-end'}>
                        <Menu>
                            <MenuButton w={['100%', '275px']} name="captionLanguage" p={2} borderRadius={'5px'} as={Box} bg={'#414141'}>
                                {captionLanguage}
                            </MenuButton>
                            <MenuList p={0} m={0}>
                                <MenuItem name="captionLanguage" onClick={() => handleCaptionLanguage('English')} value="English">English</MenuItem>
                                <MenuItem name="captionLanguage" onClick={() => handleCaptionLanguage('Swahili')} value="Swahili">Swahili</MenuItem>
                                <MenuItem name="captionLanguage" onClick={() => handleCaptionLanguage('French')} value="French">French</MenuItem>
                            </MenuList>
                        </Menu>
                    </Stack>
                </Box>

                <Box w={'100%'}>
                    <Heading size={'md'}>Trailer (Original)</Heading>
                    <Stack mt={'0.5rem'} direction={['column', 'row']}>
                        <FormLabel p={'5px'} fontWeight={'normal'} color={'whiteAlpha.500'} w={'100%'} bg={'transparent'} border={'1px solid rgba(255, 255, 255, 0.24)'} borderRadius={'5px'}>
                            Browse...
                            <Input type="file" style={{ display: 'none' }} placeholder="Browse..." />
                        </FormLabel>
                        <Input placeholder="Amazon S3" />
                        <Menu>
                            <MenuButton name="trailerLanguage" h={'100%'} w={'100%'} p={2} borderRadius={'5px'} as={Box} bg={'#414141'}>
                                {trailerLanguage}
                            </MenuButton>
                            <MenuList p={0} m={0}>
                                <MenuItem name="trailerLanguage" onClick={() => handleTrailerLanguage('English')} value="English">English</MenuItem>
                                <MenuItem name="trailerLanguage" onClick={() => handleTrailerLanguage('Swahili')} value="Swahili">Swahili</MenuItem>
                                <MenuItem name="trailerLanguage" onClick={() => handleTrailerLanguage('French')} value="French">French</MenuItem>
                            </MenuList>
                        </Menu>
                    </Stack>
                </Box>
            </VStack>


        </Box>
    );
}

const CreatePPV = () => {
    const [startDate, setStartDate] = useState(new Date());

    const margin = 2;
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();

    const generateTimeOptions = () => {
        const options = [];
        const startTime = new Date();
        startTime.setHours(0, 0, 0, 0); // Set the start time to midnight

        const interval = 30; // 30-minute interval
        const endTime = new Date();
        endTime.setHours(23, 59, 59, 999); // Set the end time to 11:59:59 PM

        let currentTime = new Date(startTime);

        while (currentTime <= endTime) {
            const hours = currentTime.getHours();
            const minutes = currentTime.getMinutes();

            options.push({
                label: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`,
                value: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`,
            });

            currentTime.setMinutes(currentTime.getMinutes() + interval);
        }
        return options;
    };

    const TimeDropdown = () => {
        const [selectedTime, setSelectedTime] = useState('');
        const timeOptions = generateTimeOptions();
        console.log(timeOptions);
        // const handleTimeChange = (event) => {
        //     setSelectedTime(event.target.value);
        // };
        console.log(selectedTime);
        return (
            <VStack spacing={4}>
                <Box>
                    <Menu>
                        <MenuButton>
                            {selectedTime || 'Select a time'}
                        </MenuButton>
                        <MenuList maxH={'200px'} overflowY={'auto'}>
                            {timeOptions.map((option, index) => (
                                <MenuItem onClick={() => setSelectedTime(option.value)} key={index} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </Box>
            </VStack>
        );
    };

    return (
        <Box bg={'#232323'} mt={'3rem'} p={8}>
            <Stack justifyContent={'space-between'} direction={['column', 'row']} spacing={['0', '2rem']}>
                <VStack w={'40%'} alignItems={'flex-start'}>
                    <Text>Event art</Text>
                    <Box objectFit={'unset'}>
                        <Image alt="video" mb={2} w={'350px'} h={'auto'} objectFit={'cover'} src='/assests/Video Images/R.jpg' />
                    </Box>
                    <Text>Event Title</Text>
                    <Input placeholder="Title" />
                    <Stack maxW={'100%'} direction={['column', 'row']} >
                        <VStack maxW={'100%'}>
                            <Text>Start Date</Text>
                            <Flex maxW={'100%'} alignItems={'center'} justifyContent={'space-between'} className="custom-datepicker">
                                <DatePicker
                                    className="datepicker"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                />
                                <Icon as={AiOutlineCalendar} />
                            </Flex>
                        </VStack>
                        <VStack maxW={'100%'}>
                            <Text>End Date</Text>
                            <Flex maxW={'100%'} alignItems={'center'} justifyContent={'space-between'} className="custom-datepicker">
                                <DatePicker
                                    className="datepicker"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                />
                                <Icon as={AiOutlineCalendar} />
                            </Flex>
                        </VStack>
                    </Stack>
                    <Stack w={'100%'} direction={['column', 'row']} >
                        <VStack w={'100%'}>
                            <Text>Start Time</Text>
                            <Flex w={'100%'} alignItems={'center'} justifyContent={'space-between'} className="custom-datepicker">
                                <TimeDropdown />
                                <Icon as={BiTime} />
                            </Flex>
                        </VStack>
                        <VStack w={'100%'}>
                            <Text>End Time</Text>
                            <Flex w={'100%'} alignItems={'center'} justifyContent={'space-between'} className="custom-datepicker">
                                <TimeDropdown />
                                <Icon as={BiTime} />
                            </Flex>
                        </VStack>
                    </Stack>
                    <Text>Contact Number</Text>
                    <Input />
                </VStack>

                <VStack w={'50%'} alignItems={'flex-start'}>
                    <Text>Venue</Text>
                    <Input placeholder="Add Details" />
                    <Text>Event Description</Text>
                    <Textarea h={'10px'} placeholder="Add Description" />

                    <Text>Insert iframe/embed code for live stream</Text>
                    <Textarea h={'10px'} placeholder="embed" />
                    <Text>Ticket cost per view</Text>
                    <Input />

                    <Stack w={'100%'} mt={['auto', '5rem']} direction={['column', 'row']} >
                        <Button w={'100%'}>Start Streaming</Button>
                        <Button w={'100%'} variant={'outline'} >Create Event</Button>
                    </Stack>
                </VStack>
            </Stack>
        </Box>
    );
}

const Availability = () => {

    const CountryCheckout = ({ name }) => {
        const [count, setCount] = useState(0);

        const handleChecked = (e) => {
            const isChecked = event.target.checked;

            if (isChecked) {
                setCount(prev => prev + 1);
            } else {
                setCount(prev => prev - 1);
            }
        }
        return (
            <Box borderRadius={'10px'} bg={'#232323'}>
                <Box bg={'#55DF01'} borderTopRadius={'10px'}>
                    <Text color='black' fontWeight={'bold'} fontSize={'lg'} p={4} textAlign={'center'}>{name}</Text>
                </Box>
                <HStack justifyContent={'space-between'}>
                    <Icon className="thin-lines-icon" color={'#55DF01'} zIndex={1} top={'-1'} position="relative" style={{ marginInline: "auto", transform: "rotate(180deg)" }} as={BsFillTriangleFill} boxSize={5} />
                </HStack>

                <Box px={8} py={4}>
                    <Divider />
                    <Text>{count} out of 3 Selected</Text>
                    <HStack mt={'1rem'} p={2} alignItems={'center'} justifyContent={'space-around'} bg={'#181818'}>
                        <Flex w={'100%'} justifyContent={'space-around'} alignItems={'center'}>
                            <Checkbox onChange={handleChecked} colorScheme="customGreen">Prime</Checkbox>
                            <Icon as={BsThreeDotsVertical} />
                        </Flex>
                        <Flex w={'100%'} justifyContent={'space-around'} alignItems={'center'}>
                            <Checkbox onChange={handleChecked} colorScheme="customGreen">Buy</Checkbox>
                            <Icon as={BsThreeDotsVertical} />
                        </Flex>
                        <Flex w={'100%'} justifyContent={'space-around'} alignItems={'center'}>
                            <Checkbox onChange={handleChecked} colorScheme="customGreen">Rent</Checkbox>
                            <Icon as={BsThreeDotsVertical} />
                        </Flex>
                    </HStack>
                    <HStack p={2} justifyContent={'space-around'} bg={'#414141'}>
                        <Flex w={'100%'} justifyContent={'space-around'} alignItems={'center'}>
                            <Checkbox colorScheme="customGreen">Asap</Checkbox>
                            <Icon as={BsThreeDotsVertical} />
                        </Flex>
                        <Flex w={'100%'} justifyContent={'space-around'} alignItems={'center'}>
                            <Checkbox colorScheme="customGreen">Asap</Checkbox>
                            <Icon as={BsThreeDotsVertical} />
                        </Flex>
                        <Flex w={'100%'} justifyContent={'space-around'} alignItems={'center'}>
                            <Checkbox colorScheme="customGreen">Asap</Checkbox>
                            <Icon as={BsThreeDotsVertical} />
                        </Flex>
                    </HStack>
                </Box>
            </Box >
        );
    }

    const CountryPrice = ({ name }) => {
        const [count, setCount] = useState(0);
        return (
            <Box borderRadius={'10px'} bg={'#232323'}>
                <Box bg={'#55DF01'} borderTopRadius={'10px'}>
                    <Text color='black' fontWeight={'bold'} fontSize={'lg'} p={4} textAlign={'center'}>{name}</Text>
                </Box>
                <HStack justifyContent={'space-between'}>
                    <Icon className="thin-lines-icon" color={'#55DF01'} zIndex={1} top={'-1'} position="relative" style={{ marginInline: "auto", transform: "rotate(180deg)" }} as={BsFillTriangleFill} boxSize={5} />
                </HStack>
                <Box px={8} py={4}>
                    <Divider />
                    <HStack mt={'1rem'} p={2} alignItems={'center'} justifyContent={'space-around'} bg={'#181818'}>
                        <Heading size={'md'}>Buy</Heading>
                        <Heading size={'md'}>Rent</Heading>
                    </HStack>
                    <HStack p={2} justifyContent={'space-around'} bg={count == 1 ? '#181818' : '#414141'}>
                        <Flex w={'100%'} justifyContent={'space-around'} alignItems={'center'}>
                            <Text>HD $</Text>
                            <Text color={'#55DF01'}>0.99</Text>
                        </Flex>
                        <Flex w={'100%'} justifyContent={'space-around'} alignItems={'center'}>
                            <Text>HD $</Text>
                            <Text color={'#55DF01'}>0.99</Text>
                        </Flex>
                    </HStack>
                    <HStack p={2} justifyContent={'space-around'} bg={count == 1 ? '#181818' : '#414141'}>
                        <Flex w={'100%'} justifyContent={'space-around'} alignItems={'center'}>
                            <Text>HD $</Text>
                            <Text color={'#55DF01'}>0.99</Text>
                        </Flex>
                        <Flex w={'100%'} justifyContent={'space-around'} alignItems={'center'}>
                            <Text>HD $</Text>
                            <Text color={'#55DF01'}>0.99</Text>
                        </Flex>
                    </HStack>
                </Box>
            </Box >
        );
    }
    return (
        <>
            <Heading mt={'2rem'} mb={'0.5rem'} size={'md'}>Where and how can VideeO customers watch this</Heading>
            <Text>Set where this title can be viewed, offer types and Availability dates </Text>

            <Heading mt={'1rem'} mb={'0.5rem'} size={'md'}>Locations</Heading>
            <SimpleGrid mb={'4rem'} columns={[1, 1, 2]} spacing={8}>
                <GridItem colSpan={1}>
                    <CountryCheckout name={'United States'} />
                </GridItem>
                <GridItem colSpan={1}>
                    <CountryCheckout name={'United Kingdom'} />
                </GridItem>
            </SimpleGrid>

            <Heading>Which pricing model do you want to use?</Heading>
            <HStack mb={'2rem'} w={['100%', '60%']}>
                <Button w={'100%'} variant={'outline'}>Present Pricing</Button>
                <Button w={'100%'}>Custom Pricing (advanced)</Button>
            </HStack>

            <SimpleGrid mb={'4rem'} columns={[1, 1, 2]} spacing={8}>
                <GridItem colSpan={1}>
                    <CountryPrice name={'United States'} />
                </GridItem>
                <GridItem colSpan={1}>
                    <CountryPrice name={'United Kingdom'} />
                </GridItem>
            </SimpleGrid>
        </>
    );
}
const NavData = [
    {
        name: "Catalog Listing",
        to: AddVideo
    },
    {
        name: "Cast & Crew",
        to: CastandCrew
    },
    {
        name: "Video Assets",
        to: VideoAssets
    },
    {
        name: "PPV Live Stream",
        to: CreatePPV,
    },
    {
        name: 'Availability',
        to: Availability
    }
];

export default function MyVideo() {
    const { updateSubTitle, subTitle } = useDetailContext();
    const router = useRouter();
    const handleNavigation = (to) => {
        router.push(to);
    }
    useEffect(() => {
        if (subTitle === null) {
            updateSubTitle('Catalog Listing');
        }
    }, []);

    return (
        <MainTemplate>
            <Box mx={{ base: '0', md: '3rem' }} width={'100%'}>
                <HStack justifyContent={'space-between'} mb={'2rem'}>
                    <Heading size={'lg'}>Upload New Video</Heading>
                    <Button>
                        Publish
                    </Button>
                </HStack>
                <ContentBar text='Video' data={NavData} />
                {console.log('SubTitle: ', subTitle)}
                <Box>
                    {NavData.map((navItem, index) => (
                        <React.Fragment key={index}>
                            {navItem.name === subTitle && navItem.to && React.createElement(navItem.to)}
                        </React.Fragment>
                    ))}
                </Box>
            </Box>
        </MainTemplate>
    );
}