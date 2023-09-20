import { Box, Checkbox, Flex, HStack, Heading, Icon, Input, Menu, MenuButton, MenuItem, MenuList, Select, Stack, Text } from "@chakra-ui/react";
import { PaymentColumn, PaymentData } from "./Payments/Payments";
import { TableTemplate } from "../Table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './style.css';
import { AiOutlineCalendar } from "react-icons/ai";
import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";


export default function FailedPayment() {
    const [startDate, setStartDate] = useState(new Date());
    const [optionValue, setOptionValue] = useState('Last year');

    const handleSelectChange = value => {
        setOptionValue(value);
    };
    return (
        <Box mt={'2rem'}>
            <Stack alignItems={'center'} justifyContent={{ base: 'center', md: 'space-between' }} direction={{ base: 'column', md: 'row' }}>
                <Heading size={'md'}>Failed Payment List</Heading>
                <Stack w={['100%', 'auto']} alignItems={'center'} direction={{ base: 'column', md: 'row' }}>
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