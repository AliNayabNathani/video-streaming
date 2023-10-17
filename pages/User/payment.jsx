import React, { useState } from 'react'
import { Navbar } from '.'
import { Box, Heading, Icon, Input, Select, Text } from '@chakra-ui/react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Style.css';
import { AiOutlineCalendar } from 'react-icons/ai';

const DebitCard = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <Text>Card Number</Text>
            <Input bg={'#232323'} max={16} type='number' />
            <Text>Card Number</Text>
            <box className="custom-datepicker">
                <DatePicker
                    className="datepicker"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />
                <Icon as={AiOutlineCalendar} />
            </box>
        </>
    );
}

const payment = () => {
    const [card, setCard] = useState('credit');
    return (
        <>
            <Navbar />
            <Box px={32} py={16}>
                <Heading mb={8}>Choose how to Pay</Heading>
                <Select border={'1px solid #55DF01'}>
                    <option onChange={() => setCard('credit')} style={{ bg: '#232323' }} value="">Pay via Credit Card</option>
                    <option onChange={() => setCard('debit')} style={{ bg: '#232323' }} value="">Pay via Debit Card</option>
                </Select>
                {card === 'credit' ? (
                    <DebitCard />
                ) : (
                    <DebitCard />
                )}
            </Box>
        </>
    )
}

export default payment