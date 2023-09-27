import {
    Box, Flex, HStack, Icon, Image, Input, Stack, Text, Textarea, VStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button,
} from "@chakra-ui/react";
import MyVideoTemplate from "../../components/Client/Templates/MyVideoTemplate";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Style.css';
import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { useDetailContext } from "../../components/Client/Context/context";

export default function CreatePPV() {
    const [startDate, setStartDate] = useState(new Date());

    const margin = 2;
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();

    const returnFunctionStart = (event) => {
        setStartTime(event.startTime);
    };

    const returnFunctionEnd = (event) => {
        setEndTime(event.endTime);
    };

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
        const { updateSubTitle } = useDetailContext();
        updateSubTitle(null);
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
        <MyVideoTemplate>
            <Box bg={'#232323'} mt={'3rem'} p={16}>
                <Stack h={'100%'} justifyContent={'space-between'} direction={['column', 'row']} spacing={['0', '5rem']}>
                    <VStack w={'100%'} alignItems={'flex-start'}>
                        <Text>Event art</Text>
                        <Box w={'100%'} objectFit={'unset'}>
                            <Image mb={2} src='/assests/Video Images/R.jpg' />
                        </Box>
                        <Text>Event Title</Text>
                        <Input placeholder="Title" />

                        <Text>Event Description</Text>
                        <Textarea placeholder="Add Description" />

                        <Text>Insert iframe/embed code for live stream</Text>
                        <Textarea placeholder="embed" />
                    </VStack>
                    <VStack h={'100%'} w={'100%'} alignItems={'flex-start'}>
                        <Text>Venue</Text>
                        <Input placeholder="Add Details" />

                        <Stack w={'100%'} direction={['column', 'row']} >
                            <VStack>
                                <Text>Start Date</Text>
                                <Flex w={'100%'} justifyContent={'space-between'} className="custom-datepicker">
                                    <DatePicker
                                        className="datepicker"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                    />
                                    <Icon as={AiOutlineCalendar} />
                                </Flex>
                            </VStack>
                            <VStack w={'100%'}>
                                <Text>End Date</Text>
                                <Flex w={'100%'} justifyContent={'space-between'} className="custom-datepicker">
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
                                <Flex w={'100%'} justifyContent={'space-between'} className="custom-datepicker">
                                    <TimeDropdown />
                                    <Icon as={BiTime} />
                                </Flex>
                            </VStack>
                            <VStack w={'100%'}>
                                <Text>End Time</Text>
                                <Flex w={'100%'} justifyContent={'space-between'} className="custom-datepicker">
                                    <TimeDropdown />
                                    <Icon as={BiTime} />
                                </Flex>
                            </VStack>
                        </Stack>
                        <Text>Ticket cost per view</Text>
                        <Input />
                        <Text>Contact Number</Text>
                        <Input />
                        <Stack h={'100%'} mt={['auto', '11rem']} direction={['column', 'row']} w={'100%'}>
                            <Button w={'100%'}>Start Streaming</Button>
                            <Button variant={'outline'} w={'100%'}>Create Event</Button>
                        </Stack>
                    </VStack>
                </Stack>
            </Box>
        </MyVideoTemplate>
    );
}