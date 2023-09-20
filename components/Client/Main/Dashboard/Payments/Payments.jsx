import {
    Text, Box, Flex, VStack, Heading, HStack, Select, Stack, Checkbox, Input, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Icon,
} from "@chakra-ui/react";
import { TableTemplate } from "../../Table";
import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../style.css';
import { AiOutlineCalendar } from "react-icons/ai";
export const PaymentData = [
    {
        Date: 'Tuesday, 12 Nov 2022 4:35 AM',
        Viewer_Name: 'John',
        Video_Name: 'Video 1',
        Video_Amount: '$54',
        Payment_Method: 'Online',
    },
    {
        Date: 'Wednesday, 13 Nov 2022 3:20 PM',
        Viewer_Name: 'Alice',
        Video_Name: 'Video 2',
        Video_Amount: '$42',
        Payment_Method: 'Credit Card',
    },
    {
        Date: 'Thursday, 14 Nov 2022 9:45 AM',
        Viewer_Name: 'Emily',
        Video_Name: 'Video 3',
        Video_Amount: '$37',
        Payment_Method: 'PayPal',
    },
    {
        Date: 'Friday, 15 Nov 2022 7:10 PM',
        Viewer_Name: 'Michael',
        Video_Name: 'Video 4',
        Video_Amount: '$65',
        Payment_Method: 'Online',
    },
    {
        Date: 'Saturday, 16 Nov 2022 11:55 AM',
        Viewer_Name: 'Sophia',
        Video_Name: 'Video 5',
        Video_Amount: '$28',
        Payment_Method: 'Credit Card',
    },
    {
        Date: 'Sunday, 17 Nov 2022 6:30 PM',
        Viewer_Name: 'William',
        Video_Name: 'Video 6',
        Video_Amount: '$47',
        Payment_Method: 'PayPal',
    },
    {
        Date: 'Monday, 18 Nov 2022 10:15 AM',
        Viewer_Name: 'Olivia',
        Video_Name: 'Video 7',
        Video_Amount: '$39',
        Payment_Method: 'Credit Card',
    },
    {
        Date: 'Tuesday, 19 Nov 2022 2:45 PM',
        Viewer_Name: 'Daniel',
        Video_Name: 'Video 8',
        Video_Amount: '$59',
        Payment_Method: 'Online',
    },
    {
        Date: 'Wednesday, 20 Nov 2022 8:20 AM',
        Viewer_Name: 'Mia',
        Video_Name: 'Video 9',
        Video_Amount: '$46',
        Payment_Method: 'PayPal',
    },
    {
        Date: 'Thursday, 21 Nov 2022 3:55 PM',
        Viewer_Name: 'James',
        Video_Name: 'Video 10',
        Video_Amount: '$73',
        Payment_Method: 'Credit Card',
    },
];


export const PaymentColumn = [
    'Date',
    'Viewer_Name',
    'Video_Name',
    'Video_Amount',
    'Payment_Method',
];

export const Payments = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [optionValue, setOptionValue] = useState('Last Year');

    const handleSelectChange = value => {
        setOptionValue(value);
    };

    return (
        <Box mt={'5rem'}>
            <Stack direction={{ base: 'column', md: 'row' }} justifyContent={'space-between'}>
                <Box width={['100%', '30%']} p={8} border={'1px solid black'} borderRadius={'10px'} bg={'#232323'} >
                    <Heading textAlign={'start'} size={'md'} mb={4}>Total Video Details</Heading>
                    <HStack mb={2} justifyContent={'space-between'}>
                        <Text>Total Payment Received</Text>
                        <Text>$545</Text>
                    </HStack>
                    <HStack mb={2} justifyContent={'space-between'}>
                        <Text>Total Viewer</Text>
                        <Text>$1M</Text>
                    </HStack>
                    <HStack justifyContent={'space-between'}>
                        <Text>Total Subscriber</Text>
                        <Text>100K</Text>
                    </HStack>
                </Box>
                <Stack w={['100%', 'auto']} alignItems={'flex-end'} direction={{ base: 'column', md: 'row' }}>
                    <Checkbox>Select all</Checkbox>
                    <Flex w={'100%'} h={'2.5rem'} alignItems={'center'} justifyContent={'space-between'} className="custom-datepicker">
                        <DatePicker
                            className="datepicker"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                        <Icon as={AiOutlineCalendar} />
                    </Flex>
                    <Menu>
                        <MenuButton w={'100%'} p={2} _active={{ bg: '#232323' }} _hover={{ bg: '#232323' }} textAlign={'center'} borderRadius={'5px'} as={Box} bg="rgba(255, 255, 255, 0.48)">
                            <HStack justifyContent={'space-between'}>
                                <Text>{optionValue}</Text>
                                <Icon as={ChevronDownIcon} />
                            </HStack>
                        </MenuButton>
                        <MenuList p={0} m={0}>
                            <MenuItem onClick={() => handleSelectChange('Last Year')} value="Last Year">Last Year</MenuItem>
                            <MenuItem onClick={() => handleSelectChange('Last Month')} value="Last Month">Last Month</MenuItem>
                            <MenuItem onClick={() => handleSelectChange('Last Week')} value="Last Week">Last Week</MenuItem>
                        </MenuList>
                    </Menu>
                </Stack>
            </Stack>
            <TableTemplate data={PaymentData} columns={PaymentColumn} />
        </Box>
    );
}