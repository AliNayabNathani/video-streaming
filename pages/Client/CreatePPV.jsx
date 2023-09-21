import { Box, Flex, HStack, Icon, Image, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import MyVideoTemplate from "../../components/Client/Templates/MyVideoTemplate";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Style.css';
import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import TimeRange from "react-time-range";
import moment from "moment";

export default function CreatePPV() {
    const [startDate, setStartDate] = useState(new Date());
    const margin = 2;
    const [startTime, setStartTime] = useState(moment());
    const [endTime, setEndTime] = useState(moment());

    const returnFunctionStart = (event) => {
        setStartTime(event.startTime);
    };

    const returnFunctionEnd = (event) => {
        setEndTime(event.endTime);
    };
    return (
        <MyVideoTemplate>
            <Box bg={'#232323'} mt={'3rem'} p={16}>
                <Stack justifyContent={'space-between'} direction={['column', 'row']} spacing={'5rem'}>
                    <VStack w={'100%'} alignItems={'flex-start'}>
                        <Text>Event art</Text>
                        <Image mb={margin} src="/public/assests//Video Images/Screenshot 2023-09-12 150233.png" />

                        <Text>Event Title</Text>
                        <Input placeholder="Title" />

                        <Text>Event Description</Text>
                        <Textarea placeholder="Add Description" />

                        <Text>Insert iframe/embed cde for live stream</Text>
                        <Textarea placeholder="embed" />
                    </VStack>
                    <VStack w={'100%'} alignItems={'flex-start'}>
                        <Text>Venue</Text>
                        <Input placeholder="Add Details" />

                        <Stack direction={['column', 'row']} >
                            <VStack>
                                <Text>Start Date</Text>
                                <Flex alignItems={'center'} justifyContent={'space-between'} className="custom-datepicker">
                                    <DatePicker
                                        className="datepicker"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                    />
                                    <Icon as={AiOutlineCalendar} />
                                </Flex>
                            </VStack>
                            <VStack>
                                <Text>End Date</Text>
                                <Flex alignItems={'center'} justifyContent={'space-between'} className="custom-datepicker">
                                    <DatePicker
                                        className="datepicker"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                    />
                                    <Icon as={AiOutlineCalendar} />
                                </Flex>
                            </VStack>
                        </Stack>
                        <Stack direction={['column', 'row']} >
                            <VStack>
                                <Text>Start Time</Text>
                                <Flex alignItems={'center'} justifyContent={'space-between'} className="custom-datepicker">
                                    <DatePicker
                                        className="datepicker"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                    />
                                    <Icon as={AiOutlineCalendar} />
                                </Flex>
                            </VStack>
                            <VStack>
                                <Text>End Time</Text>
                                <Flex alignItems={'center'} justifyContent={'space-between'} className="custom-datepicker">
                                    <TimeRange
                                        onStartTimeChange={returnFunctionStart}
                                        onEndTimeChange={returnFunctionEnd}
                                        startMoment={startTime}
                                        endMoment={endTime}
                                    />
                                    <Icon as={AiOutlineCalendar} />
                                </Flex>
                            </VStack>
                        </Stack>
                    </VStack>
                </Stack>
            </Box>
        </MyVideoTemplate>
    );
}