import {
    Box, Checkbox, HStack, Input, Text, Table,
    Stack,
    Select,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Icon,
} from "@chakra-ui/react"
import { TableTemplate } from "../Table"
import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './style.css';
import { AiOutlineCalendar } from "react-icons/ai";
const InvoiceData = [
    {
        Pending: '$250',
        Confirmed: '$650',
        Earning: '$350',
        payments: '$352'
    },
    {
        Pending: '$320',
        Confirmed: '$700',
        Earning: '$400',
        payments: '$375'
    },
    {
        Pending: '$200',
        Confirmed: '$800',
        Earning: '$300',
        payments: '$425'
    },
    {
        Pending: '$180',
        Confirmed: '$600',
        Earning: '$375',
        payments: '$310'
    },
    {
        Pending: '$400',
        Confirmed: '$750',
        Earning: '$500',
        payments: '$450'
    },
    {
        Pending: '$300',
        Confirmed: '$720',
        Earning: '$420',
        payments: '$390'
    },
    {
        Pending: '$280',
        Confirmed: '$900',
        Earning: '$380',
        payments: '$375'
    },
    {
        Pending: '$350',
        Confirmed: '$680',
        Earning: '$420',
        payments: '$400'
    },
    {
        Pending: '$420',
        Confirmed: '$780',
        Earning: '$460',
        payments: '$430'
    },
]

const InvoiceColumns = [
    'Pending',
    'Confirmed',
    'Earning',
    'payments'
];

export const Invoices = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [optionValue, setOptionValue] = useState('Yearly');

    const handleSelectChange = value => {
        setOptionValue(value);
    };
    return (
        <Flex direction={{ base: 'column-reverse', md: 'row' }}>
            <Box width={{ base: 'auto', md: '100%' }}>
                <Box direction={{ base: 'column', md: 'row' }} my={5}>
                    <Text fontSize={'1.2rem'} fontWeight={'bold'}>Invoice List</Text>
                    <Stack alignItems={'center'} justifyContent={'space-between'} direction={{ base: 'column', md: 'row' }}>
                        <Checkbox colorScheme='customGreen' size={'lg'} width={['100%', 'auto']}>Select all</Checkbox>
                        <HStack>
                            <Flex width={['100%', 'auto']} h={'2.5rem'} alignItems={'center'} justifyContent={'space-between'} className="custom-datepicker">
                                <DatePicker
                                    className="datepicker"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                />
                                <Icon as={AiOutlineCalendar} />
                            </Flex>
                            <Menu>
                                <MenuButton width='200px' p={2} _active={{ bg: '#232323' }} _hover={{ bg: '#232323' }} textAlign={'center'} borderRadius={'5px'} as={Box} bg={'#414141'}>
                                    <HStack justifyContent={'space-between'}>
                                        <Text>{optionValue}</Text>
                                        <Icon as={ChevronDownIcon} />
                                    </HStack>
                                </MenuButton>
                                <MenuList p={0} m={0}>
                                    <MenuItem onClick={() => handleSelectChange('Yearly')} value="Yearly">Yearly</MenuItem>
                                    <MenuItem onClick={() => handleSelectChange('Monthly')} value="Monthly">Monthly</MenuItem>
                                    <MenuItem onClick={() => handleSelectChange('Weekly')} value="Weekly">Weekly</MenuItem>
                                    <MenuItem onClick={() => handleSelectChange('Daily')} value="Daily">Daily</MenuItem>
                                </MenuList>
                            </Menu>
                        </HStack>
                    </Stack>
                </Box>
                <TableTemplate data={InvoiceData} columns={InvoiceColumns} />
            </Box >
        </Flex>
    )
}